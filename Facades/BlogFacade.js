var mongoose = require("mongoose");
var Blog = require("../Models/LocationBlog");

const getAllBlogs = () => Blog.find({}).exec();

const addBlog = (info, author, longitude, latitude) => {
    var logBlogDetail = {info, author, pos:{longitude, latitude}};
    return new Blog(logBlogDetail).save();
};

const getBlogById = id => Blog.findById({_id:id}).exec();

const likeLocBlog = async (id, user_id) => {
    var blog = await Blog.findById({_id:id}).exec();
    blog.likedBy.push(user_id);
    return blog.save();
};

module.exports = {
    getAllBlogs,
    addBlog,
    getBlogById,
    likeLocBlog
};