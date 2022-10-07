require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.2",
      },
      {
        version: "0.5.1",
        settings: {},
      },
    ],
  },
  networks :{
    rinkeby:{
   url:'https://eth-rinkeby.alchemyapi.io/v2/Ufms-rtMNTVc8SE08pGDgPMlosLDbm_9',
   accounts:['08b5dffbe893204764e3553378091867d7158203f6d091954b923aeb18590de0']
    }
  }
};
