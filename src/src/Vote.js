import React, { Component } from 'react';

class Vote extends Component {

  render() {
    return (
      <div className="card container">
          <h1 className="text-center py-4">Voters Page</h1>
          <h6 className="card-header text-center py-4">Your Account address :<strong>{this.props.account}</strong></h6>
          <div className="card-body px-lg-5">
            <table className="table">
              <thead>
                <tr><th scope="col">#</th><th scope="col">Name of the candidate</th><th scope="col">No of Votes to the candidate</th></tr></thead>
              <tbody>
                {this.props.candidates.map((candidate)=>(
                  <tr key={candidate.id.toString()}><th>{candidate.id.toString()}</th><td>{candidate.name}</td><td>{candidate.voteCount.toString()}</td></tr>
                ))}
              </tbody>
            </table>
            <hr/>
            <form
              onSubmit={(event)=>{
                  event.preventDefault();
                  const id=this.id.value;
                  this.props.vote(id);
              }} 
              className="text-center">
              <div className="form-group">
                <label><strong>Select Candidate</strong></label>
                <select className="form-control" ref={(input) => { this.id = input }}>
                   {this.props.candidates.map((candidate)=>(
                    <option key={candidate.id.toString()} value={candidate.id.toString()}>{candidate.name}</option>
                   ))}
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Vote</button>
            </form>
          </div>
      </div>
    );
  }
}

export default Vote;