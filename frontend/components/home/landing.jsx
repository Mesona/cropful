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
      currentLatitude: 0,
      currentLongitude: 0,
    };

    this.onMapClicked = this.onMapClicked.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onInfoWindowClose = this.onInfoWindowClose.bind(this);
    this.getStartingCoords = this.getStartingCoords.bind(this);
    this.recenterMap = this.recenterMap.bind(this);
  }


  onMapClicked() {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });

      // TODO
      // Show dropdown to add either harvest node or trade node
      console.log("!!!!!")
      console.log(this.props)
      console.log("!!!!!")
      console.log(this.state)
      console.log("!!!!!")
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
      .then((response) => this.setState({
        harvests: response.harvests,
      })
    );

    this.getStartingCoords();
    this.recenterMap();
  }

  recenterMap() {
    const map = this.map;
    const google = this.props.google;
    const maps = google.maps;

    if (map) {
        let center = new maps.LatLng(this.state.currentLatitude, this.state.currentLongitude)
        map.panTo(center);
    }
  }
  
  getStartingCoords() {
    console.log("This is here")
    navigator.geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        this.setState({
          currentLongitude: position.coords.longitude,
          currentLatitude: position.coords.latitude,
        });
      }
    );
  }

  render () {

    if (!this.props.loaded) return <div>Loading...</div>;
    const monthNames = ["December", "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November"];

    return (
      <Map 
        google={this.props.google}
        zoom={14}
        style={{ height: '75%', width: '75%', position: 'relative' }}
        onClick={this.onMapClicked}
        center={{
          lat: this.state.currentLatitude,
          lng: this.state.currentLongitude
        }}
        >

        {this.state.harvests === null ? '' : this.state.harvests.map( harvest => 
          <Marker
            key={harvest.id}
            name={harvest.harvest_type}
            ripe={harvest.ripe}
            updated_at=
            {
              monthNames[(harvest.updated_at.slice(5,7) % 12)].slice(0, 3) + ' '
              + harvest.updated_at.slice(8, 10) + ' '
              + harvest.updated_at.slice(0, 4)
            }
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
            <h1>Ripe: {this.state.selectedPlace.ripe}</h1>
            <h1>Last Updated: {this.state.selectedPlace.updated_at}</h1>
          </div>
        </InfoWindow>

      </Map>
    );

  }
};

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBRrhkrU7pa4BRmd3J7qhlX_ofoEGHy0LQ')
})(Landing)
