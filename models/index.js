const Comment = require("./Comment");
const Like = require("./Like");
const Post = require("./Post");
const Profile = require("./Profile");
const User = require("./User");

User.hasOne(Profile);
Profile.belongsTo(User);

User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

User.belongsToMany(Like, {through: "User-Like"});
Like.belongsToMany(User, {through: "User-Like"})
module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}
