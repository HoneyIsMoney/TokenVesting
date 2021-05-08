pragma solidity ^0.6.2;

interface IVoting {
    function vote(uint256 _voteId, bool _supports, bool _executesIfDecided) external;
}