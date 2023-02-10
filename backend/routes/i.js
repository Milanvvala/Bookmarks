const express = require('express'); const router = express.Router();
const fetchuser = require('../middleware/featchuser') //middlewere function for request that require login
const Item = require('../models/Itemmodel');
const { body, validationResult } = require('express-validator');
const { parser } = require('html-metadata-parser');


// Route 1 : get all available items : GET "/getitems" login required
router.get('/getitems', fetchuser,
  async (req, res) => {
    try {
      const items = await Item.find({ user: req.user.id })
      res.json(items) //final response
    } catch (error) { res.status(500).json({ error: error.massage, code_block: "/getitems catch block", type: "server error" }) }
  })

// Route 2 : create item : POST "/createitem" login required
router.post('/createitem', fetchuser,
  [ // validations through express validator
    body('url', 'invalid url').exists() //  url must be an exists
  ],
  async (req, res) => {
    const { url } = req.body
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) { return res.status(400).json({ errors: errors.array() }) }
    try {
      console.log(url)
      let result = await parser(url); //html-meta-parser
      const { title,description } = result.meta
      const fevicon = `https://www.google.com/s2/favicons?domain=${url}&sz=512`
      //creating new item
      let item = new Item({ user: req.user.id, url, title, description, fevicon })
      const savedItem = await item.save()
      res.json(savedItem) //final response
    } catch (error) { res.status(500).json({ error: error.massage, code_block: "/createitem catch block", type: "server error" }) }
  })

// Route  : deleteiteam : DELETE "/deleteiteam" login required
router.delete('/deleteiteam/:id', fetchuser,
  async (req, res) => {
    try {
      //find note from user notes and delete it
      let iteam = await iteam.findById(req.params.id)
      if (!iteam) { res.status(404).send({ err: "not found" }) }
      //chacking iteam is owned by user
      if (iteam.user.toString() !== req.user.id) { return res.status(401).send("not allowd") }
      iteam = await Iteam.findByIdAndDelete(req.params.id)
      res.json({ success: "deleted", iteam: iteam }) //final response
    } catch (error) { res.status(500).json({ error: error.massage, code_block: "/deleteiteam catch block", type: "server error" }) }
  })

{/*
body('fevicon', 'invalid fevicon').exists(),     
body('description', 'invalid description').isLength({ min: 5 }) // description must be at least 5 chars long
body('title', 'invalid name').isLength({ min: 3 }), // name must be at least 3 chars long
// let rjson = JSON.stringify(result, null, 3) //null and 3 added based on documentation
https://www.google.com/s2/favicons?domain=${domain}&sz=${size}
*/
}

module.exports = router 