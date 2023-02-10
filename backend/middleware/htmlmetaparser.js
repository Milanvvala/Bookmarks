const { parser } = require('html-metadata-parser');

// async 
(async () => {
    var result = await parse('http://example.com/');
    console.log(JSON.stringify(result, null, 3));
})();
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