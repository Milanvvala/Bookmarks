const { parser } = require('html-metadata-parser');
const hmp = async () => {
   var result = await parse('http://example.com/');
   console.log(JSON.stringify(result, null, 3));
}
const sample = {
   "meta": {
      "title": "Pico.css • Minimal CSS Framework for semantic HTML",
      "url": "https://picocss.com",
      "description": "Elegant styles for all native HTML elements without .classes and dark mode automatically enabled. 7.9 kB minified and gzipped!"
   },
   "og": {
      "title": "Pico.css • Minimal CSS Framework for semantic HTML",
      "description": "Elegant styles for all native HTML elements without .classes and dark mode automatically enabled. 7.9 kB minified and gzipped!",
      "url": "https://picocss.com",
      "image": "https://picocss.com/img/opengraph.jpg",
      "site_name": "Pico.css",
      "type": "website"
   },
   "images": []
}
{
   /*
   { "name": "new_user", "email": "nu@mail.co", "password": "pass_" } 
   [x]cu 
   { "success": true,
  "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlNjY0YzFjMTBlODNjMGYyM2U4ZDhmIn0sImlhdCI6MTY3NjA0MzQ1OH0.ikFfVciEYn2Qrf5sBB446oFoQvAtTHaG4-PL6zWIUtg",
  "user": { "name": "new_user", "email": "nu@mail.co", "password": "$2a$10$tqTlHVGLUtFkBG4rE64e7.7KEm2v/wA4V4cKqH8cVDWiG4w2H/.o2",
    "_id": "63e664c1c10e83c0f23e8d8f", "date": "2023-02-10T15:37:37.764Z", "__v": 0 }
   }
   [x]lou
   { "success": true,
  "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlNjY0YzFjMTBlODNjMGYyM2U4ZDhmIn0sImlhdCI6MTY3NjA0MzYwMn0.JXwXVXg-heyTpu5i8FomM_dkIoDEXLZeAiTX_AZYVc0",
  "user": { "_id": "63e664c1c10e83c0f23e8d8f", "name": "new_user", "email": "nu@mail.co",
    "password": "$2a$10$tqTlHVGLUtFkBG4rE64e7.7KEm2v/wA4V4cKqH8cVDWiG4w2H/.o2", "date": "2023-02-10T15:37:37.764Z", "__v": 0}
   }
   [x]gu
   { "_id": "63e664c1c10e83c0f23e8d8f", "name": "new_user", "email": "nu@mail.co",
  "password": "$2a$10$tqTlHVGLUtFkBG4rE64e7.7KEm2v/wA4V4cKqH8cVDWiG4w2H/.o2", "date": "2023-02-10T15:37:37.764Z", "__v": 0 }
  
  {"url": "https://www.w3schools.com/"}
  [x]ci
  { "user": "63e664c1c10e83c0f23e8d8f", "url": "https://www.w3schools.com/", "title": "W3Schools Online Web Tutorials",
  "fevicon": "https://www.google.com/s2/favicons?domain=https://www.w3schools.com/&sz=128", "_id": "63e6664bc10e83c0f23e8d95", "__v": 0} 
  [x]gi
  [
  { "_id": "63e666bdc10e83c0f23e8d97", "user": "63e664c1c10e83c0f23e8d8f", "url": "https://www.w3schools.com/",
    "title": "W3Schools Online Web Tutorials", "fevicon": "https://www.google.com/s2/favicons?domain=https://www.w3schools.com/&sz=128", "__v": 0 },
  { "_id": "63e669ad70a1f35b399110c7", "user": "63e664c1c10e83c0f23e8d8f", "url": "https://github.com",
    "title": "GitHub: Let’s build from here · GitHub",
    "description": "GitHub is where over 100 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and features, power your CI/CD and DevOps workflows, and secure code before you commit it.",
    "fevicon": "https://www.google.com/s2/favicons?domain=https://github.com&sz=128", "__v": 0}
]
  [x]di
  {
  "success": "deleted",
  "item": { "_id": "63e669ad70a1f35b399110c7", "user": "63e664c1c10e83c0f23e8d8f", "url": "https://github.com",
    "title": "GitHub: Let’s build from here · GitHub",
    "description": "GitHub is where over 100 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and features, power your CI/CD and DevOps workflows, and secure code before you commit it.",
    "fevicon": "https://www.google.com/s2/favicons?domain=https://github.com&sz=128", "__v": 0
  }
}
  */
}
