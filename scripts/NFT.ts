import { ethers } from "hardhat";

async function main() {
  const NFT = await ethers.getContractFactory("MyNFT");
  const myNft = await NFT.deploy(
    "ipfs://QmcNLe4Fe2247rCRhQHm32jyySGBKGDXkWWeEb2NDLmeFR"
  );

  await myNft.deployed();

  console.log("My nft deployed successfully", myNft.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
