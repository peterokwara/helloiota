const Iota = require("@iota/core");

// use seed we created earlier
const seed =
  "FSXDANPLVXCEWESVOGPJTIOZ9WUSP9QWWIGRVSPBFLFVAVQLTNMDSNMQBZFAKFQRKATVMMBXM9LPNDVOH";

// we need two transactions for the signature in a value transaction
const security = 2;

// we want to generate addresses with checksums
const checksum = true;

// create 10 addresses
for (let i = 0; i <= 10; i++) {
  console.log(Iota.generateAddress(seed, i, security, checksum));
}
