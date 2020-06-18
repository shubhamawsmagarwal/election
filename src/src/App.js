import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import { ABI,ADDRESS } from './config';
import Owner from './Owner';
import Vote from './Vote';

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }
  async loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const election = new web3.eth.Contract(ABI,ADDRESS);
    this.setState({ election });
    const owner =await election.methods.owner().call();
    this.setState({ owner });
    const candidatesCount = await election.methods.candidatesCount().call();
    for (var i = 1; i <= candidatesCount; i++) {
      const candidate = await election.methods.candidates(i).call();
      this.setState({
        candidates: [...this.state.candidates, candidate]
      });
    }
    this.setState({ loading: false });
  }
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      candidates:[],
      loading: true
    };
    this.addCandidate=this.addCandidate.bind(this);
    this.addVoters=this.addVoters.bind(this);
    this.vote=this.vote.bind(this);
  }
  addCandidate(candidate){
    this.setState({ loading: true });
    this.state.election.methods.addCandidate(candidate).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false });
    });
  }
  addVoters(address){
    this.setState({ loading: true });
    this.state.election.methods.addVoters(address).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false });
    });
  }
  vote(id){
    this.setState({ loading: true });
    this.state.election.methods.vote(id).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false });
    });
  }
  render() {
    if(this.state.loading)
      return(<div className="text-center">Loading...</div>);
    else if(this.state.account===this.state.owner)
      return(<Owner account={this.state.account} addCandidate={this.addCandidate} addVoters={this.addVoters}/>);
    else 
      return (<Vote account={this.state.account} candidates={this.state.candidates} vote={this.vote}/>);
  }
}

export default App;