// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/Strings.sol";

// This is the main building block for FileMart smart contracts.
contract DataContract {

    // struct DataListing 
    string public name; // name of the data set files(s) for exchange
    string public description; // description of the data set file(s) for exchange
    string public createdAt; // created at timestmap for the contract
    uint256 public priceWei; // Current price (adjustable by owner)
    uint256 public purchases; // Number of successful purchases
    string public keywords; // Keywords associated with dataset
    string public size; // Size description
    address public owner; // Owner of the data listing
    bool public active; // Owner-controlled active status for the contract
    string private dataUrl; // Shared location of data assets

    uint256 public MIN_PURCHASES = 3; // Contract pays once this amount of purchases completed without min flags.

    uint256 public MAX_FLAGS = 3; // Number of flags allowed before this contract is disabled.
    uint256 flags;
    mapping(address => bool) flaggedMap;

    // These events can help off-chain applications understand what happens within your contract.
    event PurchaseCompleted(address indexed purchaseAddress);
    event PageFlagged(address indexed reporterAddress, string reason);

    constructor(
        string memory _name,
        string memory _description,
        string memory _dataUrl,
        uint256 _priceWei,
        string memory _createdAt,
        string memory _keywords,
        string memory _size
    ) {
        owner = msg.sender;
        name = _name;
        description = _description;
        dataUrl = _dataUrl;
        priceWei = _priceWei;
        createdAt = _createdAt;
        keywords = _keywords;
        size = _size;
        
        purchases = 0;
        active = true;
    }

    function purchaseData() public payable returns (string memory) {
        require(
            flags <= MAX_FLAGS,
            "DataContract has been flagged and is no longer valid"
        );
        require(
            msg.value == priceWei,
            "Incorrect amount on message for purchase"
        );

        if (purchases == MIN_PURCHASES) {
            // Transfer any held funds in the reserve.
            payable(owner).transfer(address(this).balance);
        } else if (purchases > MIN_PURCHASES) {
            // Immediately transfer if purchase amount above minimum.
            payable(owner).transfer(msg.value);
        }

        purchases += 1;
        emit PurchaseCompleted(msg.sender);
        return dataUrl;
    }

    function setPrice(uint256 _priceWei) public {
        require(
            msg.sender == owner,
            "Only the contract owner may call this function"
        );
        priceWei = _priceWei;
    }

    function flagDataset(string memory reason) public returns (uint256) {
        bool flagged = flaggedMap[msg.sender];
        require(!flagged, "You have already flagged this page");

        flaggedMap[msg.sender] = true;
        flags += 1;
        emit PageFlagged(msg.sender, reason);
        return flags;
    }

    function toggleActive() public {
        require(
            msg.sender == owner,
            "Only the contract owner may call this function"
        );
        active = !active;
    }


     function getDescription() public view returns (string memory) {
        return description;
     }

    function getMetadataString() public view returns (string memory) {
        return
            string.concat(
                name,
                "|",
                description,
                "|",
                Strings.toString(priceWei),
                "|",
                Strings.toString(purchases),
                "|",
                keywords,
                "|",
                size,
                "|",
                createdAt,
                "|",
                (active && flags <= MAX_FLAGS) ? "active" : "inactive"
            );
    }
}
