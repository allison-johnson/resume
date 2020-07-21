#! /usr/bin/env node

const fs = require('fs')

//__dirname tells you the absolute path of the directory
//containing the currently executing file
fs.readFile(__dirname + './info.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
        return data 
    }
})