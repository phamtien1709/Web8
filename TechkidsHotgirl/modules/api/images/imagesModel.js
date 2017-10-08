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
const getImageById = (imageId, callback) => {
  imagesModel.findOne({ '_id' : imageId })
              .select({_id:0, name:1, content:1})
              .exec((err, doc) => {
    if(err) {
      throw (err);
    } else {
      callback(null, doc);
    }
  });
}
//Update

//Delete

module.exports = {
  createImage,
  getImageById
}
