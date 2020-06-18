pragma solidity ^0.5.0;
contract Election{
   address public owner;
   struct Candidate{
      uint id;
      string name;
      uint voteCount;
   }
   mapping(uint=>Candidate) public candidates;
   mapping(address=>bool) private hasVoted;
   mapping(address=>uint) private voterList;
   uint public candidatesCount;
   uint private votersCount;
   constructor() public{
      owner=msg.sender;
   }
   modifier onlyOwner(){
      require(msg.sender==owner);
      _;
   }
   function addCandidate(string memory _name) public onlyOwner{
      candidatesCount++;
      candidates[candidatesCount]=Candidate(candidatesCount,_name,0);
   }
   function addVoters(address voter) public onlyOwner{
      require(voterList[voter]==0);
      votersCount++;
      voterList[voter]=votersCount;
   }
   function vote(uint _candidateId) public{
      require(owner!=msg.sender);
      require(voterList[msg.sender]>0);
      require(!hasVoted[msg.sender]);
      require(_candidateId>0 && _candidateId<=candidatesCount);
      hasVoted[msg.sender]=true;
      candidates[_candidateId].voteCount++;
   }
}
  