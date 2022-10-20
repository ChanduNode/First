import React, { Component } from 'react'

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">WELCOME to react...</h1>
      <h4> EC2 test passed</h4>
      <h4> CI test passed</h4>
       <h4> CD test passed</h4>
      <h6> deployment to another EC2 is done  </h6>
       
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
