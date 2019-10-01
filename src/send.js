const Iota = require("@iota/core");
const Converter = require("@iota/converter");
const TransactionConverter = require("@iota/transaction-converter");

const iota = Iota.composeAPI({
  provider: "https://nodes.devnet.iota.org:443"
});

const seed =
  "FSXDANPLVXCEWESVOGPJTIOZ9WUSP9QWWIGRVSPBFLFVAVQLTNMDSNMQBZFAKFQRKATVMMBXM9LPNDVOH";

const outputAddress =
  "BVDMSPHXWJLOHJYZMAURAGFSKESNOTMTJRUKZWIVQAMGATJSXHAMHRAZVKVEOFDCULMNUYOQQCQATQPPWACMOXAEVD";

// when we start the random walk, which we look for two confirmation tips three milestones deep in the tangle
const depth = 3;

// defines the difficulty of the POW
const minWeightMagnitude = 9;

// create a tag
const tag = "IOTACADEMY9TUTORIAL9MESSAGE";

// create the message
const message = Converter.asciiToTrytes("Hello IOTA!");

// create a transfer array
const transfers = [
  {
    value: 0,
    address: outputAddress,
    tag: tag,
    message: message
  }
];

// create the transaction
// prepare transfers takes in an array of transaction data and returns the trytes of the resulting bundle
iota
  .prepareTransfers(seed, transfers)
  .then(trytes => trytes.map(hash => console.log(TransactionConverter.asTransactionObject(hash))));
