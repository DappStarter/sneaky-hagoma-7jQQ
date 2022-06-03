require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name reflect machine unknown hope another army gaze'; 
let testAccounts = [
"0xdc6cf59f92cc77a0db92bb4af9dbebb60c427b7038a408462187488b616431c1",
"0x07f29ae168bf31b2aa68f6279f3b5c35f624417fe9737d2eba5b951738bbcbf4",
"0x814afa18749adcc0bb95b7f914708a9037ae8ae10e96811d25d9869b44271a81",
"0x931ba5ef308d0c18b8a340558aa4b5e56ad99962ed13b070d68b07b308f0d012",
"0xae2778948f2a523ae178426e29b21eece468a8ea8e8217c5c1ebc5664fe983c9",
"0xb6f689498534418b0646415507838a44d5b31a523a9a9d180e82bda427df157c",
"0xf7bc113cd3d59896d459b4e6332a46635ca9e7fbf147ae4f5eedd6df2e8f3c5c",
"0x93cbe02ca375e69a8a309532b0d1391043d3459d4bf9faa58f3350220f9acd58",
"0x34b5a29426a2f1306d1dfc848596411de8ad0ddd8890136799a31de808a4358f",
"0x952a512f6c393855948914d369074e98d3871f434ee66d4092a80142c8d96098"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

