const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');

describe('Social Sequelzie Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
        await db.sync({ force: true });
    })

    // Write your tests here

    test('can create a user', async () => {
        const testUser = await User.create({ "username": "john_doe",
        "email": "john_doe@example.com" });
        expect(testUser.username).toBe('john_doe');
    });

    test('can read a user', async() =>{
        const testUser = await User.findOne({where: {username: "john_doe"}})
        expect(testUser.username).toBe('john_doe');
    });

    test('can get all users', async() =>{
        const allUsers = await User.findAll();
        expect(allUsers.length).toBe(1)
    });

    test('can update a user', async() =>{
        const updateUser = await User.findByPk(1);
        await updateUser.update({username: "jd"});
        expect(updateUser.username).toBe("jd")
    })

    test('can delete a user', async() =>{
        const user = await User.findByPk(1);
        await user.destroy();
        const deleted = await User.findByPk(1);
        expect(deleted).toEqual(null)
    })

    test('can create a profile', async () => {
        const testProfile = await Profile.create({
            "bio": "I'm a software engineer",
            "profilePicture": "https://example.com/profile1.jpg",
            "birthday": "1990-06-15"
          });
        expect(testProfile.bio).toBe("I'm a software engineer");
    });

    test('can read a profile', async() =>{
        const testProfile = await Profile.findOne({where: {profilePicture:"https://example.com/profile1.jpg"}})
        expect(testProfile.birthday).toBe("1990-06-15");
    });

    test('can get all profiles', async() =>{
        const testProfile = await Profile.create({
      "bio": "I love to travel",
      "profilePicture": "https://example.com/profile2.jpg",
      "birthday": "1985-09-28"
    });
        const allProfiles = await Profile.findAll();
        expect(allProfiles.length).toBe(2)
    });

    test('can update a profile', async() =>{
        const updateProfile = await Profile.findByPk(2);
        await updateProfile.update({bio: "I love to swim!"});
        expect(updateProfile.bio).toBe("I love to swim!")
    })

    test('can delete a profile', async() =>{
        const profile = await Profile.findByPk(1);
        await profile.destroy();
        const deleted = await Profile.findByPk(1);
        expect(deleted).toEqual(null)
    })


    test('can create a post', async () => {
        const testPost = await Post.create({
      "title": "New Song Release",
      "body": "Check out my latest song on Spotify!",
      "createdAt": "2022-03-27T16:20:00.000Z"
    });
        expect(testPost.body).toBe("Check out my latest song on Spotify!");
    });

    test('can read a post', async() =>{
        const testPost = await Post.findOne({where: {createdAt:"2022-03-27T16:20:00.000Z"}})
        expect(testPost.title).toBe("New Song Release");
    });

    test('can get all posts', async() =>{
        const testPost = await Post.create({
      "title": "Harvard Yard in the Spring",
      "body": "Spring is finally here! Here's a shot of Harvard Yard.",
      "createdAt": "2022-03-25T11:45:00.000Z"
    });
        const allPosts = await Post.findAll();
        expect(allPosts.length).toBe(2)
    });

    test('can update a post', async() =>{
        const updatePost = await Post.findByPk(2);
        await updatePost.update({title: "Harvard Yard in the Fall"});
        expect(updatePost.title).toBe("Harvard Yard in the Fall")
    })

    test('can delete a post', async() =>{
        const post = await Post.findByPk(1);
        await post.destroy();
        const deleted = await Post.findByPk(1);
        expect(deleted).toEqual(null)
    })

})
