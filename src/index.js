const fs = require('fs');
const { program } = require('commander');

let inputString = '';
let currentLine = 0;

program.description('Cracking the code interview question solutions')
  .option('-q, --question <num>', 'question #. ex: 1-2')
  .option('-d, --data <input...>', 'inputs, separated by space')
  .parse(process.argv);

const options = program.opts();

if (options.data) {
  main();
} else {
  process.stdin.resume();
  process.stdin.setEncoding('utf-8');

  process.stdin.on('data', function(inputStdin) {
      inputString += inputStdin;
  });

  process.stdin.on('end', function() {
      inputString = inputString.split('\n');

      main();
  });
}

function readLine() {
    return inputString[currentLine++];
}

function main() {
  //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  let probNum;
  let inputs;

  if (options.question) {
    probNum = options.question;
  } else {
    probNum = readLine().replace(/\s+$/g, '');
    inputString.shift();
  }
  if (options.data) {
    inputs = options.data;
  } else {
    inputs = inputString;
  }
  console.log({inputs});

  // call problem function
  try {
    const mod = require(`./problems/q_${probNum}`);
    result = mod(inputs);
    console.log(result);
  } catch (err) {
    console.warn(err);
  }
}
