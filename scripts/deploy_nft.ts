import { ethers } from 'hardhat';

async function main() {
  const contractFactory = await ethers.getContractFactory('NFT');
  // console.log('factory: ', contractFactory);
  const contract = await contractFactory.deploy();
  // console.log('contract: ', contract);
  await contract.deployed();
  console.log('deployed at: ', contract.address);

  const trx = await contract.makeNft();
  await trx.wait();

  const trx2 = await contract.makeNft();
  await trx2.wait();
}

async function run() {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

run();
