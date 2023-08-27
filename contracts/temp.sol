// SPDX-License-Identifier: LGPL 3.0
pragma solidity ^0.8.8;

import "./BLS.sol";

contract temp {
    function verifySingleSignature(
        uint256[2] calldata signature,
        uint256[4] calldata pubkeys,
        uint256[2] calldata messages
    ) external view returns (bool) {
        return BLS.verifySingle(signature, pubkeys, messages);
    }

    function verifyMultiple(
        uint256[2] calldata signature,
        uint256[4][] calldata pubkeys,
        uint256[2][] calldata messages
    ) external view returns (bool) {
        return BLS.verifyMultiple(signature, pubkeys, messages);
    }

    function isValidPublicKey(uint256[4] memory publicKey)
        public
        pure
        returns (bool)
    {
        return BLS.isValidPublicKey(publicKey);
    }

    function isValidSignature(uint256[2] memory signature)
        public
        pure
        returns (bool)
    {
        return BLS.isValidSignature(signature);
    }
}
