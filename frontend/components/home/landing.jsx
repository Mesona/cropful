import React from 'react';
import { render } from 'react-dom';
import MapContainer from '../map/map_container';
import InfoWindow from '../map/infoWindow';
import NewHarvest from '../map/newHarvest';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMarker: false,
      harvests: null,
      infoWindow: null,
      map: null,
      showNewHarvest: false,
      markers: [],
      currentLongitude: null,
      currentLatitude: null,
    };

    this.createInfoWindow = this.createInfoWindow.bind(this);
    this.renderInfoWindow = this.renderInfoWindow.bind(this);
    this.addHarvest = this.addHarvest.bind(this);
    this.toggleMarker = this.toggleMarker.bind(this);
    this.getStartingCoords = this.getStartingCoords.bind(this);
    this.recenterMap = this.recenterMap.bind(this);
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
    if (this.state.infoWindow !== null) {
      this.state.infoWindow.close(map);
      this.setState({
        infoWindow: null,
      });
    }

    const infoWindow = new window.google.maps.InfoWindow({
        content: '<div id="infoWindow" />',
        position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
    });

    infoWindow.addListener('domready', e => this.renderInfoWindow(harvest));


    map.addListener('drag', e => {
      infoWindow.close(map);
    });

    this.props.storeInfoWindow(infoWindow);

    this.setState({
      infoWindow: infoWindow,
    });

    infoWindow.open(map);

  }

  addHarvest(location) {
    
    const { markers, map } = this.state;

    const infoWindow = new window.google.maps.InfoWindow({
      content: '<div id="infoWindow" />',
      position: { lat: location.lat(), lng: location.lng() }
    });

    var marker = new google.maps.Marker({
      position: location,
      map: map
    });

    markers.push(marker);

    this.setState({
      markers: markers,
      infoWindow: infoWindow,
    });

    infoWindow.addListener('domready', e => {
      render(<NewHarvest location={location} createHarvest={this.props.createHarvest}/>, document.getElementById('infoWindow'))
    });

    infoWindow.open(map);
  }

  toggleMarker(location) {
    const { infoWindow, map } = this.state;

    if (this.state.showNewHarvest === false && infoWindow === null) {

      this.setState({
        showNewHarvest: true,
      });

      this.addHarvest(location);

    } else if (this.state.showNewHarvest === false && infoWindow !== null) {

      infoWindow.close(map);

      this.setState({
        infoWindow: null,
      });

    } else {
      
      infoWindow.close(this.state.map);
      this.state.markers[0].setMap(null);
      this.state.markers.shift();

      this.setState({
        showNewHarvest: false,
        infoWindow: null,
      });
    }
  }

  getStartingCoords() {
    navigator.geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {

        this.setState({
          currentLongitude: position.coords.longitude,
          currentLatitude: position.coords.latitude,
        });

        this.recenterMap();
      }
    );
  }

  recenterMap() {
    const map = this.state.map;

    if (map) {
        let center = new window.google.maps.LatLng(this.state.currentLatitude, this.state.currentLongitude);
        map.panTo(center);
    }

  }

  render() {
    return (
      <div>
        <MapContainer
          id="myMap"
          options={{
            center: { lat: 37.333942, lng: -121.923552},
            zoom: 14
          }}

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
                this.toggleMarker(e.latLng);
              });

              this.setState({
                map: map,
              })

              this.getStartingCoords()
          }}
        />
      </div>
    );
  }
}

export default Landing;