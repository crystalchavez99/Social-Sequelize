const { Comment, Like, Post, Profile, User } = require("./models/index");

// Define your associations here



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
