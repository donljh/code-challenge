// const { ethers } = require("ethers");
import { ethers } from "ethers";

// Given $SWTH Token Contract
const swthContractAddress: string = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";

// Create a connection via a public RPC node, retrieved from https://docs.bscscan.com/misc-tools-and-utilities/public-rpc-nodes
const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed1.binance.org/");

// Describes which methods we need to use in the interaction with the contract
const ABI: string[] = [
    "function balanceOf(address) view returns (uint256)", // Gets account balance of a given address
    "function decimals() view returns (uint8)"
]

// Create a contract to interact with the chain
const contract = new ethers.Contract(swthContractAddress, ABI, provider);

// Given addresses to look up
const addressesToLookUp: string[] = [
    "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"
];


// Async function wrapper that retrieves holders, logs results according to problem description
const retrieveHolders = async () => {
    // Retrieve the decimals of the SWTH token value
    const decimals = await contract.decimals();
    for (const address of addressesToLookUp) {
        // Retrieve amount based on given address
        const amount = await contract.balanceOf(address);
        // Parse the amount based on decimal places and groups non-decimal values in 3s
        const parsedAmount = ethers.utils.commify(ethers.utils.formatUnits(amount, decimals));
        console.log(`${address} ${parsedAmount}`)
    }
}

retrieveHolders();