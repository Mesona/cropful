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
      harvests: this.props.harvests,
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
    this.closeInfoWindow = this.closeInfoWindow.bind(this);
    this.markerColor = this.markerColor.bind(this);
  }

  componentDidMount() {
    this.props.requestAllHarvests()
      .then((response) => this.setState({
        harvests: response.harvests,
      })
    );
  }

  renderInfoWindow(harvest) {
    render(<InfoWindow harvest={harvest} updateHarvest={this.props.updateHarvest} map={this.state.map} infoWindow={this.state.infoWindow} />, document.getElementById('infoWindow'))
  } 

  createInfoWindow(e, map, harvest) {

    if (this.state.infoWindow !== null) {
      this.closeInfoWindow();
    }

    const infoWindow = new window.google.maps.InfoWindow({
        content: '<div id="infoWindow" />',
        position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
    });

    infoWindow.addListener('domready', () => this.renderInfoWindow(harvest));

    infoWindow.addListener('closeclick', () => {
      this.closeInfoWindow();
    });


    map.addListener('drag', () => {
      this.closeInfoWindow();
    });

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

    infoWindow.addListener('closeclick', () => {
      this.toggleMarker();
    });

    infoWindow.addListener('domready', e => {
      render(<NewHarvest location={location} createHarvest={this.props.createHarvest} map={this.state.map} infoWindow={this.state.infoWindow}/>, document.getElementById('infoWindow'))
    });

    infoWindow.open(map);
  }

  toggleMarker(location) {
    const { infoWindow } = this.state;

    if (this.state.showNewHarvest === false && infoWindow === null) {

      this.setState({
        showNewHarvest: true,
      });

      this.addHarvest(location);

    } else if (this.state.showNewHarvest === false && infoWindow !== null) {

      this.closeInfoWindow();

    } else {
      
      this.closeInfoWindow();

      this.state.markers[0].setMap(null);
      this.state.markers.shift();

      this.setState({
        showNewHarvest: false,
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

  closeInfoWindow() {

    const { map, infoWindow } = this.state;

    if (infoWindow !== null) {
      
      infoWindow.close(map);
  
      this.setState({
        infoWindow: null,
      });

    }

  }

  markerColor(harvest) {
    let markerColor;
    switch (harvest.harvest_type.classification) {
      case "fruit":
        markerColor = {
          url: "http://maps.google.com/mapfiles/ms/icons/ltblue-dot.png"
        };
        break;
      case "flowers":
        markerColor = {
          url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
        };
        break;
      case "nut":
        markerColor = {
          url: "http://maps.google.com/mapfiles/ms/icons/orange-dot.png"
        };
      break;
      case "veggies":
        markerColor = {
          url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
        };
      break;
      case "unknown":
        markerColor = {
          url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
        };
    }

    // Extract the current month
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const now = new Date();
    const nowMonth = String(now).slice(4, 7);
    const monthIndex = monthNames.indexOf(nowMonth);

    if (harvest.seasonal_overwrite[monthIndex] === "oos") {
      markerColor = {
        url: "http://labs.google.com/ridefinder/images/mm_20_red.png"
      };
    }

    return markerColor;
  }

  // TODO:
  // Search feature for specific harvests

  render() {
    return (
      <div className="mapBorder">
        {Object.keys(this.state.harvests).length === 0 ? '' :
        <MapContainer
          id="myMap"
          options={{
            // center: { lat: 37.333942, lng: -121.923552},
            // 37.797796, -122.401036
            center: { lat: 37.797796, lng: -122.401036},
            zoom: 14
          }}

          onMapLoad={map => {
              {Object.keys(this.state.harvests).length === 0 ? '' : this.state.harvests.map( harvest => 
                new window.google.maps.Marker({
                  position: { lat: harvest.lat, lng: harvest.lng },
                  map: map,
                  key: harvest.id,
                  harvest: harvest,
                  icon: this.markerColor(harvest),
                  // icon: {
                  //   url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                  // },
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
      
        }
      </div>
    );
  }
}

export default Landing;