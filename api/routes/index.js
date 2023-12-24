const express = require("express");
const fs = require('node:fs');


const router = express.Router();

const pathRoutes = `${__dirname}`;


const removeExtension = (fileName) => {
  return fileName.split('.').slice(0, -1).join('.');
};

// Ahora puedes usar __dirname con fs.readdirSync
fs.readdirSync(pathRoutes).filter(file => {
  const fileWithoutExtension = removeExtension(file);
  const skip = ['index'].includes(fileWithoutExtension);
  if (!skip) {
   router.use(`/${fileWithoutExtension}`, require(`./${fileWithoutExtension}.js`));
   console.log(`Route /${fileWithoutExtension} loaded`)
  }
});
router.get('*', (req, res) => {
  res.status(404).send('error');
});

module.exports = router;