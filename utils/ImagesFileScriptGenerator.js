const fs = require('fs');
const PFX = "ex";
const TYPE = ".png";
const images = [];
const ROUTE = "../assets/images/exercises/";
const MAX_NUM_FILES = 90;

for(let i = 1; i <= MAX_NUM_FILES; i++){
    images.push({ id: `${i}`, image: `${ROUTE}${PFX}${i}${TYPE}` });
}

let code = `export const IMAGES = [\n`;

for(let image of images){
    code += `{ id: ${image.id}, image: require("${image.image}") },\n`;
}
code += `];\n`;

const filePath = './utils/imagesFile.js';

fs.writeFile(filePath, code, (err) => {
  if (err) {
    console.error('Error al escribir el archivo:', err);
  } else {
    console.log('Archivo generado correctamente en', filePath);
  }
});