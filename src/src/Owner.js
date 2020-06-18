import React, { Component } from 'react';

class Owner extends Component {

  render() {
    return (
      <div className="card container">
          <h1 className="text-center py-4">Admin's Page</h1>
          <h6 className="card-header text-center py-4">Your Account address :<strong>{this.props.account}</strong></h6>
          <div className="card-body px-lg-5">
            <form onSubmit={(event)=>{
              event.preventDefault();
              const candidate=this.candidate.value;
              this.candidate.value='';
              this.props.addCandidate(candidate);
              }} 
              className="text-center py-4">
                <label><strong>Register a candidate(By Writing name)</strong></label>
                <input 
                type="text"
                ref={(input) => { this.candidate = input }}
                placeholder="Enter name of candidate"
                className="form-control my-4" 
                required
                onKeyPress={(event) => {
                  if (event.key === 'Enter') event.preventDefault();
                }}
                />
                <button className="btn btn-outline-success my-4" type="submit">Register</button>
            </form>
            <form onSubmit={(event)=>{
              event.preventDefault();
              const voter=this.voter.value;
              this.voter.value='';
              this.props.addVoters(voter);
              }} 
              className="text-center">
                <label><strong>Register a voter(By Writing its account address)</strong></label>
                <input 
                type="text"
                ref={(input) => { this.voter = input }}
                placeholder="Enter address of voter"
                className="form-control my-4" 
                required
                onKeyPress={(event) => {
                  if (event.key === 'Enter') event.preventDefault();
                }}
                />
                <button className="btn btn-outline-success my-4" type="submit">Register</button>
            </form>
          </div>
      </div>
    );
  }
}

export default Owner;