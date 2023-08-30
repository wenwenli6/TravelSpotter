const mongoose = require('mongoose');
const Review = require('./review')
const Schema = mongoose.Schema;


// https://res.cloudinary.com/douqbebwk/image/upload/w_300/v1600113904/YelpCamp/gxgle1ovzd2f3dgcpass.png

const ImageSchema = new Schema({
    url: String,
    filename: String
});
//使用Mongoose创建一个名为thumbnail的虚拟属性，thumbnail属性的目的是生成一个缩略图(thumbnail page)URL
//Use mongoose to create a virtual property named thumbnail. Thumbnail property 
//can generate a thumbnail URL, which can be used to display a smaller version of 
//an image on a web page. This can improve page loading speed or to display thumbnails on apage
ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200');
});
//将Mongoose文档转换为JSON格式时，应将虚拟属性包含在文档的JSON表示中
const opts = { toJSON: { virtuals: true } };

const SpotSchema = new Schema({
    title: String,
    images: [ImageSchema],
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    price: Number,
    description: String,
    location: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },  //authorization, only author can delete or edit the original post
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
}, opts);

//为每一个Spot实例创建一个自定义的信息窗口弹出框内容
SpotSchema.virtual('properties.popUpMarkup').get(function () {
    return `
    <strong><a href="/spots/${this._id}">${this.title}</a><strong>
    <p>${this.description.substring(0, 20)}...</p>`
});


//when delete Spot, delete reviews related to the spots
//middleware in mongoose, add event listener on SpotSchema
SpotSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
})

module.exports = mongoose.model('Spot', SpotSchema);