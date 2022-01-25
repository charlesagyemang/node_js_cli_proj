#!/usr/bin/env node

const yargs = require("yargs");
const fs = require('fs')

const options = yargs
 .usage("Usage: --input <input>")
 .option(
     "n", 
    {
        alias: "input", 
        describe: "input file", 
        type: "string", 
        demandOption: true 
    })
  .usage("Usage: --output <pen>")
  .option("output",{
    alias: "output", 
    describe: "Output file name", 
    type: "string", 
    demandOption: true 
})
 .argv;


fs.readFile(options.input, 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
  fs.writeFile(options.output, data, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log("file writtten successfully");
  })
})