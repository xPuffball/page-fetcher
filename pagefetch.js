const args = process.argv;
const URL = args[2];
const PATH = args[3];

const request = require("request");
const fs = require("fs");

request(URL, (error, response, body) => {
  if (error) {
    console.log("Error! Error Code: " + error)
  } 
  else {
    fs.writeFile(PATH, body, (err) => {
      if (err) {
        console.log("Invalid File Path!")
        throw err;
      }
      console.log("File Written at: " + PATH);
    })
  }
})

