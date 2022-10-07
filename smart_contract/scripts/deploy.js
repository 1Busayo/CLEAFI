const hre = require("hardhat");

async function main() {
  const cleafiImageMinterFactory = await hre.ethers.getContractFactory('CleaFI_NFTs',)
  const cleafiImageContract = await cleafiImageMinterFactory.deploy()

  await cleafiImageContract.deployed()
 
  console.log("CleaFi Contract deployed to:", cleafiImageContract.address);

  // console.log("Details Cleaifi", cleafiImageContract);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
(async () => {
try {
  await main()
} catch (error) {
  console.error(error)
  process.exit(1)
}

})()