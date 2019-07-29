import React from 'react';
import { render } from 'react-dom';

class Marker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      map: this.props.map,
      harvest: this.props.harvest,
    };

    // this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  componentDidMount() {
    // this.props.requestAllHarvests()
    //   .then((response) => this.setState({
    //     harvests: response.harvests,
    //   })
    // );
  }


  onMarkerClick(props, marker) {
    console.log("click registers")
  }


  render() {
    return (
      <div onClick={this.onMarkerClick}>
        {new window.google.maps.Marker({
          position: { lat: this.state.harvest.lat, lng: this.state.harvest.lng },
          map: this.state.map,
          key: this.state.harvest.id,
          // onClick: this.onMarkerClick()
          })
        }
      </div>
    );
  }
}

export default Marker;