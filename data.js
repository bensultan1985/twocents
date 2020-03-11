const express = require('express');

const dataRouter = express.Router();

let dataArray = [];

dataRouter.get('/', (req, res) => {
        console.log('get');
        res.send(dataArray);
})

dataRouter.post('/post', (req, res) => {
    res.send('200');
    let wisdom = req.body.wisdom;
    let name = req.body.name;
    dataArray.push({wisdom: wisdom, name: name});
    console.log(dataArray);
})

module.exports = dataRouter;

//old post request
// server.post('/wisdomTree/post', (req, res) => {
//     res.send('200');
//     console.log('hi');
//     let wisdom = JSON.stringify(req.body.wisdom);
//     let name = JSON.stringify(req.body.name);
//     fs.writeFile('log.txt',`{"wisdom": ` + wisdom + '}\n',  {'flag':'a'},  function(err) {
//         if (err) {
//             return console.error(err);
//         }
//     });
//     fs.writeFile('log.txt',`{"name": ` + name + '}\n',  {'flag':'a'},  function(err) {
//         if (err) {
//             return console.error(err);
//         }
//     });
// })