// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
	// Hardhat always runs the compile task when running scripts with its command
	// line interface.
	//
	// If this script is run directly using `node` you may want to call compile
	// manually to make sure everything is compiled
	// await hre.run('compile');

	// We get the contract to deploy

	const token = "0x3a97704a1b25F08aa230ae53B352e2e72ef52843"; // AGVE
	const beneficiary = "0x8BeE0043B5F369367Eb694489305962e72B453b2"; // Hornet EoA
	const owner = "0xd811a03eeb2623556bf05bcd7f58874d2d784c26"; // Agave Agent
	const start = 1614513600; // Sunday, 28 February 2021 12:00:00
	const cliffDuration = 0;
	const duration = 31536000; // 1 year
	const revocable = true;

	const TokenVesting = await hre.ethers.getContractFactory("TokenVesting");
	const vesting = await TokenVesting.deploy(
		token,
		beneficiary,
		owner,
		start,
		cliffDuration,
		duration,
		revocable
	);
	await vesting.deployed();

	await hre.tenderly.verify({
		name: "TokenVesting",
		address: vesting.address,
	});

	console.log("vesting deployed to:", vesting.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
