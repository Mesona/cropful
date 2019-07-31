import React from 'react';

export class NewHarvest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      harvest_type: "",
      ripe: "",
      lat: this.props.location.lat(),
      lng: this.props.location.lng(),
      harvest_selection: "",
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
    this.props.createHarvest(this.state);
  }

  updateRipe(status) {
    this.state.ripe = status;
  }

  render() {
    let fruit = ["Apple", "Orange", "Fig", "Passion Fruit", "Blackberry", "Raspberry", "Cranberry", "Strawberry", "Blueberry", "Lemon", "Lime", "Grapefruit", "Cherry", "Plumb", "Apricot", "Pear", "Peach"]
    let herb = ["Sage", "Lavender", "Dill", "Fennel", "Thyme", "Bay", "Basil"]

    return(
      <div>
        Add new harvest!

        <form className="new-harvest-form"  onSubmit={(e) => this.handleSubmit(e)}>
          <label onClick={e => e.stopPropagation()} >
            <section className="harvest-type">
              <span>Harvest Type: </span>
            </section>
            <input
              type="radio"
              value={this.state.harvest_selection}
              name="harvest-type"
              onClick={() => this.updateRipe(true)}
            />Fruit
            <input
              type="radio"
              value={this.state.harvest_selection}
              name="harvest-type"
              onClick={() => this.updateRipe(false)}
            />Herb
            <input
              type="radio"
              value={this.state.harvest_selection}
              name="harvest-type"
              onClick={() => this.updateRipe(false)}
            />Other
            <br></br>
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

          {/* TODO:
          Figure out why the submit button is placed so incorrectly */}
          <input type="submit" className="form-button"></input>
        </form>
      </div>
    )
  }

}

export default NewHarvest;