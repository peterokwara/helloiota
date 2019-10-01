const Iota = require("@iota/core");

// set the api for iota
const iota = Iota.composeAPI({
  provider: "https://nodes.devnet.iota.org:443"
});

// fetch the node information
iota
  .getNodeInfo()
  .then(info => console.log(info))
  .catch(err => console.log(err));
