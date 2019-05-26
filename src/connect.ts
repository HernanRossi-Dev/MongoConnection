const mongoose = require("mongoose");
const mongoDBUrl = "mongodb://HernanRossi:UMlYnuMQWVomlFYW@pathfinderarena-shard-00-00-gmjjh.mongodb.net:27017,pathfinderarena-shard-00-01-gmjjh.mongodb.net:27017,pathfinderarena-shard-00-02-gmjjh.mongodb.net:27017/test?ssl=true&replicaSet=PathfinderArena-shard-0&authSource=admin&retryWrites=true";
const CharacterData = require('./data/CharacterData');

let db;
const MongoConnect = async () => {
  try {
    console.log('Starting MongoDB remote connection: ');
    await mongoose.connect(mongoDBUrl, { useNewUrlParser: false }); 
    db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
  } catch (err) {
    console.error('DB connection error: ', err);
  }
};

const InsertCharacter = async () => {
  const newCharacter = CharacterData.Valeros;
  newCharacter.created = new Date();
  let insertResult;
  try {
    insertResult = await db
    .collection("characters")
    .insertOne(newCharacter);
  } catch (err) {
    console.log("MongoDB Error: ", err);
  }
};

const ExecutionOptions = [
  {
    name: 'Exit Program',
    instruction: () => {
        console.log("Exiting Program!");
        process.exit(1)
    },
    id: 0
  },
  {
  name: 'Insert Character',
  instruction: InsertCharacter,
  id: 1,
  },
];

const main = async () => {
  await MongoConnect();
  console.log('Welcome, the following instructions are available: ');
  ExecutionOptions.forEach((instr, index) => {
    const output = `instruction: ${instr.name} ID: ${index}`;
    console.log(output);
  });
  await readLineRecursive();
};

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const readLineRecursive = async () => {
  await readline.question(`What would you like to do, select the corresponding ID: ? `, async (id) => {
    console.log(`Selected ${ExecutionOptions[id].name}:`);
    await ExecutionOptions[id].instruction();
    readLineRecursive();
  });
}
main();