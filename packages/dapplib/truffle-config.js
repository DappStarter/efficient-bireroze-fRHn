require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn proof harvest nasty frame tenant'; 
let testAccounts = [
"0xb2095601410ff46169b3f6bf9c553a18283e8db50c9e50d94373806287aaae61",
"0x60f5511f18b8ddc72d962c5cdad242c5757b4addc37bb4a0dc2a72ce28584471",
"0x5afd84863a27fe069e0f4f828823cecd334829fa5a08f90f6c8131c99b7d295e",
"0x226b891ac2eceb1d019498c5befb3f59602d656ce36025408043c97f1125748a",
"0xdface8b01ecd5ff6b5179f50631a39e32914201cf0385b1d246faeab58aeab02",
"0x6d181166272d14bae4147de5a282811e6b3adc4bf497ecbae53454d146bd523d",
"0xd5fe2437c341dc3aed72ce73f77a4e4f1d7975d3b0b9c680c384eadc748b4509",
"0x9468f574178cc29e2597eff4aad1f74959a43985a44cebdc53a86481b31063ea",
"0x827b5c1a3c39eca9df43daba47484455cfb263f927dcf71ca8667ffc5f554d21",
"0x712146898cc1143f5a6d8debe42646688874145445571726235ba22666dbdf77"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


