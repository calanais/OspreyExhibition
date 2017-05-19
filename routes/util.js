const fs = require('fs');
const path = require('path');
const hash = require('string-hash');

function getImgs(){

let imgFiles = fs.readdirSync('./public/imgs','utf8');

// let imgData = [];
var data = { "images": [] };
for (let i = 0; i < imgFiles.length; i++) {
    let fileinfo = path.parse(imgFiles[i]);
    console.log(fileinfo);
    data.images.push({ 'id' : hash(fileinfo.name), 'filename' : fileinfo.base , 'title':fileinfo.name });
}

return data;
}

module.exports = getImgs;
