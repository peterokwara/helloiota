const Iota = require("@iota/core");
const Converter = require("@iota/converter");

// set up the node api we are getting information on
const iota = Iota.composeAPI({
  provider: "https://nodes.devnet.iota.org:443"
});

// address we want to get information from
const listenAddress =
  "BVDMSPHXWJLOHJYZMAURAGFSKESNOTMTJRUKZWIVQAMGATJSXHAMHRAZVKVEOFDCULMNUYOQQCQATQPPWACMOXAEVD";

// message tag we are looking for
const tag = "IOTACADEMY9TUTORIAL9MESSAGE";

// setting up the query
const query = {
  addresses: [listenAddress],
  tags: [tag]
};

const delay = 3000;

// retriece the message
// remove the last tryte of the signatureMessageFragment that has a length of 2187 trytes before converting it to ASCII
iota
  .findTransactionObjects(query)
  .then(transactions => {
    transactions.map(transaction => {
      const msg = Converter.trytesToAscii(
        transaction.signatureMessageFragment.replace(/9*$/, "")
      );
      console.log(msg);
    });
  })
  .catch(err => {
    console.log(err);
  });
