var makeTestData = require('../CreateDataScripts/MakeTestData');
const dbSetup = require("../DBSettings/dbSetup");

// root level hooks
before(async () => {
    await makeTestData();
});

after(async () => {
    console.log('after got fired');
    await dbSetup.closeConnection();
});