import React, { Component } from 'react';
import { API_KEY } from '../../apiKey';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      currentLongitude: this.props.options.center.lng,
      currentLatitude: this.props.options.center.lat,
      showNewHarvest: false,
      markers: [],
    };

    this.onScriptLoad = this.onScriptLoad.bind(this)
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);

    this.setState({
      map: map,
    });

    this.props.onMapLoad(map);
  }

  componentDidMount() {
    if (!window.google) {
      let s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=` + API_KEY;
      let x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      // Below is important. 
      // We cannot access google.maps until it's finished loading
      s.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }

  }

  render() {
    return (
      // <div style={{ width: 500, height: 500 }} id={this.props.id}>
      <div className="mapMap" id={this.props.id}>
      </div>
    );
  }
}

export default Map;