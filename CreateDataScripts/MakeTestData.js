const expect = require("chai").expect;
const dbSetup = require('../DBSettings/dbSetup');
const Test_DB = require('../DBSettings/Settings').TEST_DB_URI;
dbSetup.connect(Test_DB);
var User = require('../Models/User');
var LocationBlog = require("../Models/LocationBlog");
var Position = require("../Models/Position");
var userFacade = require("../Facades/UserFacade");


function userCreate(firstName,lastName,userName,password,type,company,companyUrl){
    var job = [{type,company,companyUrl},{type,company,companyUrl}];
    var userDetail = {firstName,lastName,userName,password,job};
    var user = new User(userDetail);
    return user.save();
}

function positionCreator(lon,lat,userId,dateInFuture){
    var posDetail = {user:userId,loc:{coordinates:[lon,lat]}};
    if(dateInFuture){
        posDetail.created = "2022-09-25T20:40:21.899Z";
    }
    var position = new Position(posDetail);
    return position.save();
}

function LocationBlogCreator(info, author, longitude, latitude) {
    var LocationBlogDetail = { info, pos: { longitude, latitude }, author };
    var blog = new LocationBlog(LocationBlogDetail);
    return blog.save()
}
async function createUsers(){
    await User.remove({});
    await Position.remove({});
    await LocationBlog.remove({});

    var userPromises = [
        userCreate("Kurt","Wonnegut","annb","test","xxx","comp","comp.url"),
        userCreate("aafa","sfsdf","dfsdf","test","xxx","comp","comp.url"),
        userCreate("fsaf","sfsdf","fsfsf","test","xxx","comp","comp.url"),
        userCreate("afasfaafa","sfssfdf","sfsfs","test","xxx","comp","comp.url"),
        userCreate("aaafasffa","fsf","teteter","test","xxx","comp","comp.url")
    ]

    var users = await Promise.all(userPromises);
    var posPromises = [
        positionCreator(123,123,users[0]._id),
        positionCreator(123,123,users[1]._id),
        positionCreator(123,123,users[2]._id),
        positionCreator(123,123,users[3]._id),
        positionCreator(123,123,users[4]._id)];

    var positions = await Promise.all(posPromises);

    var blogPromises = [
        LocationBlogCreator("Cool Place",users[0]._id,26,148),
        LocationBlogCreator("Another Cool Place",users[0]._id,56,56),
        LocationBlogCreator("Yet Another Cool Place",users[0]._id,156,56),
        LocationBlogCreator("The coolest Place",users[3]._id,156,56),
    ];
    var blogs = await Promise.all(blogPromises);
    //console.log(users);
    //console.log(positions);
    console.log(blogs);
}


async function createUsersForLocationTest(){

    try {

    await User.remove({});
    await Position.remove({});
    await LocationBlog.remove({});

    var userPromises = [
        userCreate("Kurt","Wonnegut","Swimmer1","test", "xxx","comp","comp.url"),
        userCreate("Peter","Hansen","Swimmer2","test2","xxx","comp","comp.url"),
        userCreate("Helle","Olsen","Runner1","test3","xxx","comp","comp.url"),
        userCreate("Janne","Johnson","Runner11","test4","xxx","comp","comp.url"),
        userCreate("Tester","Testesen","Tester","test5","xxx","comp","comp.url"),
    ]
    var users = await Promise.all(userPromises);

    var posPromises = [
        positionCreator(12.487442, 55.773718,users[0]._id,true),
        positionCreator(12.604494, 55.766214,users[1]._id,true),
        positionCreator(12.502635, 55.719345,users[2]._id,true),
        positionCreator(12.515734, 55.646729,users[3]._id,true),
    ]
    var positions = await Promise.all(posPromises);
    var nUser = await userFacade.getUserById(users[0]._id);
    console.log(nUser.lastName);
        
    } catch (error) {
        console.log(error);
    }


}
//createUsers();

//createUsersForLocationTest();

module.exports = createUsersForLocationTest;

