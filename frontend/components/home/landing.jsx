import React from 'react';
import { render } from 'react-dom';
import MapContainer from '../map/map_container';
import InfoWindow from '../map/infoWindow';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMarker: false,
      harvests: null,
      infoWindow: null,
      map: null,
    };

    this.createInfoWindow = this.createInfoWindow.bind(this);
    this.renderInfoWindow = this.renderInfoWindow.bind(this);
  }

  componentDidMount() {
    // TODO:
    // Harvests aren't loading when the map is first rendered, after logging in
    this.props.requestAllHarvests()
      .then((response) => this.setState({
        harvests: response.harvests,
      })
    );
  }

  renderInfoWindow(harvest) {
    render(<InfoWindow harvest={harvest} updateHarvest={this.props.updateHarvest} />, document.getElementById('infoWindow'))
  } 

  createInfoWindow(e, map, harvest) {
    const infoWindow = new window.google.maps.InfoWindow({
        content: '<div id="infoWindow" />',
        position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
    })

    infoWindow.addListener('domready', e => this.renderInfoWindow(harvest));


    map.addListener('drag', e => {
      infoWindow.close(map);
    })

    this.props.storeInfoWindow(infoWindow)

    infoWindow.open(map);


    // this.setState({
    //   map: map,
    //   infoWindow: infoWindow,
    // });

  }

  render() {
    return (
      <div>
        <MapContainer
          id="myMap"
          options={{
            center: { lat: 37.299773, lng: -121.982679 },
            zoom: 14
          }}

          infoWindow={this.state.infoWindow}

          onMapLoad={map => {
              {this.state.harvests === null ? '' : this.state.harvests.map( harvest => 
                new window.google.maps.Marker({
                  position: { lat: harvest.lat, lng: harvest.lng },
                  map: map,
                  key: harvest.id,
                  harvest: harvest,
                }).addListener('click', e => {
                  this.createInfoWindow(e, map, harvest)
                })
              )}
              map.addListener('click', (e) => {
                console.log("State check: " + this.state.infoWindow);
              });

              this.props.storeMap(map);
          }}
        />
      </div>
    );
  }
}

export default Landing;