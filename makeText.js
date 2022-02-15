/** Command-line tool to generate Markov text. */
const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = requre("process");

function generateText() {
  let m = new markov.MarkovMachine(text);
  console.log(m.makeText());
}

function makeText() {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.log(`Cannot read file: ${path}: ${err}`);
      process.exit(1);
    } else {
      generateText(data);
    }
  });
}

async function makeURLText(url) {
  let resp;

  try {
    resp = await axios.get(url);
  } catch (err) {
    console.error(`Cannot read URL: ${url}: ${err}`);
    process.exit(1);
  }
  generateText(resp.data);
}

let [method, path] = process.argv.slice(2);

if (method === "file") {
  makeText(path);
} else if (method == "url") {
  makeURLText(path);
} else {
  console.error(`Unknown method: ${method}`);
  process.exit(1);
}
