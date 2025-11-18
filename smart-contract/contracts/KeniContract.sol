// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract KeniContract {

    address public signer;
    string public storedData;
    bytes32 public lastHash;
    address public lastUpdatedBy;

    constructor(address _signer) {
        signer = _signer;
    }

    function setDataWithSignature(
        string memory _data,
        bytes32 metaHash,
        bytes calldata signature
    ) public {

        bytes32 ethSignedHash = keccak256(
            abi.encodePacked("\x19Ethereum Signed Message:\n32", metaHash)
        );

        (uint8 v, bytes32 r, bytes32 s) = _split(signature);
        address recovered = ecrecover(ethSignedHash, v, r, s);

        require(recovered == signer, "Invalid signature");

        storedData = _data;
        lastHash = metaHash;
        lastUpdatedBy = msg.sender;
    }

    function getData() public view returns (string memory) {
        return storedData;
    }

    function _split(bytes memory sig) internal pure returns(uint8, bytes32, bytes32) {
        require(sig.length == 65, "invalid sig length");
        bytes32 r;
        bytes32 s;
        uint8 v;
        assembly {
            r := mload(add(sig, 32))
            s := mload(add(sig, 64))
            v := byte(0, mload(add(sig, 96)))
        }
        return (v, r, s);
    }
}
