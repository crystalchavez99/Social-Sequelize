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


})
