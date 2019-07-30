import React from 'react';

export class NewHarvest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      harvest_type: "",
      ripe: "",
      lat: this.props.location.lat(),
      lng: this.props.location.lng(),
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRipe = this.updateRipe.bind(this);

  }

  handleInput (field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.stopPropagation();
    console.log('submitted!')
    console.log(this.state)
    alert(this.state)
  }

  updateRipe(status) {
    this.state.ripe = status;
    console.log(this.state)
  }

  render() {
    return(
      <div>
        Add new harvest!

        <form className="new-harvest-form"  onSubmit={(e) => this.handleSubmit(e)}>
          <label onClick={e => e.stopPropagation()} >
            <section className="harvest-type">
              <span>Harvest Type: </span>
            </section>
            <input
              type="text"
              value={this.state.harvest_type}
              onChange={this.handleInput('harvest_type')}
            />
          </label>

          <label onClick={e => e.stopPropagation()} >
            <section className="ripe">
              <span>Ripe? </span>
            </section>
            <input
              type="radio"
              value={this.state.ripe}
              name="ripe"
              onClick={() => this.updateRipe(true)}
            />Ripe
            <input
              type="radio"
              value={this.state.ripe}
              name="ripe"
              onClick={() => this.updateRipe(false)}
            />Not Ripe
          </label>

          <input type="submit" className="form-button"></input>
        </form>
      </div>
    )
  }

}

export default NewHarvest;