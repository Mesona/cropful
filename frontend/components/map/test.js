import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.clickTest = this.clickTest.bind(this);
  }

  clickTest() {
    console.log("test success?")
  }


  render () {

    return (
      <div className="Button">
        <span className="left" onClick={function() {alert("left")}}>Left</span>
        <span className="right" onClick={function() {alert("right")}}>Right</span>
        <span className="middle" onClick={function() {alert("middle")}}>Middle</span>
      </div>
      // <div>
      //   <button className="addRipe" onClick={() => console.log("this")}>
      //     +
      //   </button>
      //   <button className="removeRipe" onClick={() => console.log('that')}>
      //     -
      //   </button>
      // </div>
    )
  }

}

export default Test;