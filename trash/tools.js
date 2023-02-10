const express = require('express'); const router = express.Router();
const fetchuser = require('../middleware/featchuser'); const Tool = require('../models/Toolmodel');
const { body, validationResult } = require('express-validator');

// Route 1 : get all available tools : GET "/gettools" login required
router.get('/gettools',
    fetchuser, //middlewere function for request that require login
    async (req, res) => {
        try {
            const tools = await Tool.find({ user: req.user.id })
            res.json(tools) //final response
            
        } catch (error) {
            res.status(500).json({ error: error.massage, code_block: "/gettools catch block", type: "server error" })
        }
    })

// Route 2 : create tool : POST "/createtool" login required
router.post('/createtool',
    fetchuser,
    [ // validations through express validator
        // name must be at least 3 chars long
        body('title', 'invalid name').isLength({ min: 3 }),
        // path url and fevicon  must be an exists
        body('path', 'invalid url').exists(),
        body('fevicon', 'invalid fevicon').exists(),
        // description must be at least 5 chars long
        body('description', 'invalid description').isLength({ min: 5 })
    ],
    async (req, res) => {
        const { title, description, path, fevicon } = req.body

        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            //creating new tool
            let tool = new Tool({
                user: req.user.id, title, description, fevicon, path
            })

            const savedTool = await tool.save()
            res.json(savedTool) //final response

        } catch (error) {
            res.status(500).json({ error: error.massage, code_block: "/createtool catch block", type: "server error" })
        }
    })

// Route 3 : update : PUT "/update/id:" login required
router.put('/update/:id',
    fetchuser,
    async (req, res) => {
        const { title, description, path, fevicon } = req.body
        try {
            //create new temporory tool object
            const newTool = {}
            if (title) { newTool.title = title }
            if (description) { newTool.description = description }
            if (path) { newTool.path = path }
            if (fevicon) { newTool.fevicon = fevicon }

            //find note from user notes
            let tool = await Tool.findById(req.params.id)
            if (!tool) {
                res.status(404).send({ err: "notfound" })
            }

            //chacking not is owned by user
            if (tool.user.toString() !== req.user.id) {
                return res.status(401).send("not allowd")
            }

            tool = await Tool.findByIdAndUpdate(req.params.id, { $set: newTool }, { new: true })
            res.json({ tool }) //final response

        } catch (error) {
            res.status(500).json({ error: error.massage, code_block: "/createtool catch block", type: "server error" })

        }
    })

// Route 4 : deletetool : DELETE "/deletetool" login required
router.delete('/deletetool/:id',
    fetchuser,
    async (req, res) => {
        try {
            //find note from user notes and delete it
            let tool = await Tool.findById(req.params.id)
            if (!tool) {
                res.status(404).send({ err: "not found" })
            }

            //chacking tool is owned by user
            if (tool.user.toString() !== req.user.id) {
                return res.status(401).send("not allowd")
            }

            tool = await Tool.findByIdAndDelete(req.params.id)
            res.json({ success: "deleted", tool: tool }) //final response

        } catch (error) {
            res.status(500).json({ error: error.massage, code_block: "/createtool catch block", type: "server error" })
        }
    })

// Route 5 : add to favotite : PUT "/addfav" login required
router.get('/addfav', (req, res) => {
    try { 
    } catch (error) {
        res.status(500).json({ error: error.massage, code_block: "/createtool catch block", type: "server error" })
    }
})

// Route 6 : publish tool to explore : PUT "/publish" login required
router.get('/publish', (req, res) => {
    try { 
    } catch (error) {
        res.status(500).json({ error: error.massage, code_block: "/createtool catch block", type: "server error" })
    }
})

module.exports = router