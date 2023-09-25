import React, { useState, useEffect } from 'react';
import './App.css';
import { ethers } from 'ethers';

// Load environment variables from .env file
require('dotenv').config();

function App() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Check if MetaMask is installed
    if (window.ethereum) {
      setIsConnected(true);
    }
  }, []);

  async function handleConnect() {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        setIsConnected(true);
      } catch (error) {
        console.error('Error connecting to wallet:', error);
        alert('Could not connect to wallet. Please try again.');
      }
    } else {
      alert("Please install MetaMask or another compatible wallet to use this dApp.");
    }
  }

  async function handleMintAndBurn() {
    if (isConnected) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contractAddress = '0x9612Fc26Ae91619F4BB70dE0e8b44B1FEd88b8C2'; // Replace with your contract address
        const contractABI = [
          { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
          {
            anonymous: false,
            inputs: [ [Object], [Object], [Object] ],
            name: 'Approval',
            type: 'event'
          },
          {
            anonymous: false,
            inputs: [ [Object], [Object], [Object] ],
            name: 'ApprovalForAll',
            type: 'event'
          },
          {
            anonymous: false,
            inputs: [ [Object], [Object] ],
            name: 'OwnershipTransferred',
            type: 'event'
          },
          {
            anonymous: false,
            inputs: [ [Object], [Object], [Object] ],
            name: 'Transfer',
            type: 'event'
          },
          {
            inputs: [ [Object], [Object] ],
            name: 'approve',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function'
          },
          {
            inputs: [ [Object] ],
            name: 'balanceOf',
            outputs: [ [Object] ],
            stateMutability: 'view',
            type: 'function'
          },
          {
            inputs: [ [Object] ],
            name: 'getApproved',
            outputs: [ [Object] ],
            stateMutability: 'view',
            type: 'function'
          },
          {
            inputs: [ [Object], [Object] ],
            name: 'isApprovedForAll',
            outputs: [ [Object] ],
            stateMutability: 'view',
            type: 'function'
          },
          {
            inputs: [ [Object] ],
            name: 'isTokenBurned',
            outputs: [ [Object] ],
            stateMutability: 'view',
            type: 'function'
          },
          {
            inputs: [],
            name: 'mintAndBurn',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function'
          },
          {
            inputs: [],
            name: 'name',
            outputs: [ [Object] ],
            stateMutability: 'view',
            type: 'function'
          },
          {
            inputs: [],
            name: 'owner',
            outputs: [ [Object] ],
            stateMutability: 'view',
            type: 'function'
          },
          {
            inputs: [ [Object] ],
            name: 'ownerOf',
            outputs: [ [Object] ],
            stateMutability: 'view',
            type: 'function'
          },
          {
            inputs: [],
            name: 'renounceOwnership',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function'
          },
          {
            inputs: [ [Object], [Object], [Object] ],
            name: 'safeTransferFrom',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function'
          },
          {
            inputs: [ [Object], [Object], [Object], [Object] ],
            name: 'safeTransferFrom',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function'
          },
          {
            inputs: [ [Object], [Object] ],
            name: 'setApprovalForAll',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function'
          },
          {
            inputs: [ [Object] ],
            name: 'supportsInterface',
            outputs: [ [Object] ],
            stateMutability: 'view',
            type: 'function'
          },
          {
            inputs: [],
            name: 'symbol',
            outputs: [ [Object] ],
            stateMutability: 'view',
            type: 'function'
          },
          {
            inputs: [ [Object] ],
            name: 'tokenByIndex',
            outputs: [ [Object] ],
            stateMutability: 'view',
            type: 'function'
          },
          {
            inputs: [ [Object], [Object] ],
            name: 'tokenOfOwnerByIndex',
            outputs: [ [Object] ],
            stateMutability: 'view',
            type: 'function'
          },
          {
            inputs: [ [Object] ],
            name: 'tokenURI',
            outputs: [ [Object] ],
            stateMutability: 'view',
            type: 'function'
          },
          {
            inputs: [],
            name: 'totalSupply',
            outputs: [ [Object] ],
            stateMutability: 'view',
            type: 'function'
          },
          {
            inputs: [ [Object], [Object], [Object] ],
            name: 'transferFrom',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function'
          },
          {
            inputs: [ [Object] ],
            name: 'transferOwnership',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function'
          }// Your contract's ABI here
          // ...
        ];

        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        const transaction = await contract.mintAndBurn();

        await transaction.wait();

        alert('Transaction successful!');
      } catch (error) {
        console.error('Error:', error);
        alert('Transaction failed.');
      }
    } else {
      alert('Please connect your wallet first.');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {isConnected ? (
          <button className="button" onClick={handleMintAndBurn}>
            Mint and Burn
          </button>
        ) : (
          <button className="button" onClick={handleConnect}>
            Connect Wallet
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
