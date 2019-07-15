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
    console.log("!!!!!")
    console.log(props)
    console.log("!!!!!")
    console.log(marker)
    console.log(this.state.harvests)
    console.log("!!!!!")
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
        initialCenter={{
          lat: 37.299462,
          lng: -121.987637
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
