// var TransactionTypes = require('../utils/transaction-types.js');
// var constants = require('../utils/constants.js');
// var httpCall = require('../utils/httpCall.js');
// var chainJS = require('chain-js');

// app.route.put('/set',  async function (req) {
//     console.log("req: ", req);

//     let set = req.query.set;
//     let fee = String(constants.fees.set * constants.fixedPoint);
//     let type = TransactionTypes.SET; // withdraw money to mainchain
//     let options = {
//         fee: fee,
//         type: type,
//         args: JSON.stringify([set])
//     };
//     let secret = req.query.secret;

//     let transaction = chainJS.dapp.createInnerTransaction(options, secret);

//     let dappId = app.id;

//     let params = {
//         transaction: transaction
//     };

//     console.log("set data: ", params);
//     var res = await httpCall.call('PUT', `/api/dapps/${dappId}/transactions/signed`, params);

//     return res;
// })

// app.route.get('/get',  async function (req) {
//     console.log("req: ", req);
//     let result = await app.model.Storage.findOne({
//         condition: { owner: req.query.address }
//     });
//     return result;
// })



var TransactionTypes = require('../utils/transaction-types.js');
var constants = require('../utils/constants.js');
var httpCall = require('../utils/httpCall.js');
var chainJS = require('chain-js');

app.route.put('/addTask',  async function (req) {
    console.log("req: ", req);

    let taskName = req.query.taskName;
    let taskDesc = req.query.taskDesc;
    let fee = String(constants.fees.addTask * constants.fixedPoint);
    let type = TransactionTypes.ADD_TASK; // withdraw money to mainchain
    let options = {
        fee: fee,
        type: type,
        args: JSON.stringify([taskName, taskDesc])
    };
    let secret = req.query.secret;

    let transaction = chainJS.dapp.createInnerTransaction(options, secret);

    //let dappId = req.query.dappId;
    let dappId = app.id;

    let params = {
        transaction: transaction
    };

    console.log("AddTask data: ", params);
    var res = await httpCall.call('PUT', `/api/dapps/${dappId}/transactions/signed`, params);

    return res;
});

app.route.put('/completeTask',  async function (req) {
    console.log("req: ", req);

    let taskName = req.query.taskName;
    let fee = String(constants.fees.completeTask * constants.fixedPoint);
    let type = TransactionTypes.COMPLETE_TASK; // withdraw money to mainchain
    let options = {
        fee: fee,
        type: type,
        args: JSON.stringify([taskName])
    };
    let secret = req.query.secret;

    let transaction = chainJS.dapp.createInnerTransaction(options, secret);

   // let dappId = req.query.dappId;
    let dappId = app.id;

    let params = {
        transaction: transaction
    };

    console.log("CompleteTask data: ", params);
    var res = await httpCall.call('PUT', `/api/dapps/${dappId}/transactions/signed`, params);

    return res;
});

app.route.get('/getTask',  async function (req) {
    console.log("req: ", req);
    let result = await app.model.Todolist.findAll({
        condition: { owner: req.query.address }
    });
    console.log('result: ', result);
    return result;
});
