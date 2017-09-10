const fileController = require('./fileController');
const filename = 'F:/Techkids_Web_Gen8/SaaS/public/style.css';

var a = fileController.readFile(filename);
console.log(a);
