const mongoose = require('mongoose');
const imagesSchema = require('./imagesSchema');

const imagesModel = mongoose.model('images', imagesSchema);

//Create
const createImage = (image, callback) => {
  let newImage = {
    imageUrl : image.imageUrl,
    content : image.content,
    title : image.title,
  }
  imagesModel.create(newImage, (err, doc) => {
    if (err) {
      callback(err);
    } else {
      callback(null, doc);
    }
  })
}
//Get

//Update

//Delete

module.exports = {
  createImage
}
