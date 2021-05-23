const { Blockchain, Transaction } = require(`./blockchain`);
const EC = require(`elliptic`).ec;
const ec = new EC(`secp256k1`);

const myKey = ec.keyFromPrivate(`faaed9012bf194e4946a4ffd745506c8bb8881f8323e4d4faffbce1635a18108`);
const myWalletAddress = myKey.getPublic(`hex`);


let coin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, `Public key goes here`, 10);
tx1.signTransaction(myKey);
coin.addTransation(tx1);

mineBitch = (num) =>{
  let i = 0;
  while(i != num){
    console.log(`\nYou have: ${coin.getBalanceOfAddress(myWalletAddress)} in your wallet!`);
    console.log(`\n⛏  Starting the miner...`);
    coin.minePendingTransactions(myWalletAddress);
    console.log(`Is chain valid? ${coin.isChainValid()}\n`);

    i++;
    console.log(`Blocks mined: ${i}\n`)
  }
}

mineBitch(10);