import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMarker: {},
      selectedPlace: {},
      showingInfoWindow: false,
      harvests: null,
    };

    this.onMapClicked = this.onMapClicked.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onInfoWindowClose = this.onInfoWindowClose.bind(this);
  }


  onMapClicked() {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });

      // TODO
      // Show dropdown to add either harvest node or trade node
  }

  onMarkerClick(props, marker) {
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });
  }

  onInfoWindowClose() {
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });
  }

  componentDidMount() {
    this.props.requestAllHarvests()
      // .then(response => console.log(response.harvests))
      .then((response) => this.setState({
        harvests: response.harvests,
      })
    );
  }

  render () {

    if (!this.props.loaded) return <div>Loading...</div>;

    return (
      <Map 
        google={this.props.google}
        zoom={14}
        style={{ height: '75%', width: '75%', position: 'relative' }}
        onClick={this.onMapClicked}
        initialCenter={{
          lat: 37.299462,
          lng: -121.987637
        }}
        >

        {/* TODO Remove these when reference no longer needed */}
        {/* <Marker
          name="SOMA"
          onClick={this.onMarkerClick}
          position={{ lat: 37.778519, lng: -122.40564 }}
        />

        <Marker
          name="Dolores park"
          onClick={this.onMarkerClick}
          position={{ lat: 37.759703, lng: -122.428093 }}
        />

        <Marker name="Current location" onClick={this.onMarkerClick} /> */}

        {this.state.harvests === null ? '' : this.state.harvests.map( harvest => 
          <Marker
            name="Test"
            onClick={this.onMarkerClick}
            position={{ lat: harvest.lat, lng: harvest.lng }}
          />
        )}

        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>

        {/* <InfoWindow position={{ lat: 37.765703, lng: -122.42564 }} visible>
          <small>
            Click on any of the markers to display an additional info.
          </small>
        </InfoWindow> */}

      </Map>
    );

  }
};

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBRrhkrU7pa4BRmd3J7qhlX_ofoEGHy0LQ')
})(Landing)
