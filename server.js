const http = require('http');
const path = require('path');
const fs = require('fs');
const express = require('express');


let wisdomArray = []

const server = express()

server.use(express.json());
server.use(express.urlencoded({extended: false}));

server.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))

const dataRouter = require('./data.js');
server.use('/wisdomTree', dataRouter);

// server.get('/wisdomTree', (req, res) => {
//         console.log('get');
//         fs.readFile('log.txt', (err, data) => { 
//             if (err) throw err;
//             res.send(data.toString())
// })
// })

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
    // wisdomArray.push(req.body);
    // console.log(wisdomArray);
// })