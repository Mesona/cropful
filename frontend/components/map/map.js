import React, { Component } from 'react';
import { render } from 'react-dom'
import { API_KEY } from '../../apiKey';
import NewHarvest from './newHarvest';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      currentLongitude: this.props.options.center.lng,
      currentLatitude: this.props.options.center.lat,
      showNewHarvest: false,
      markers: [],
      infoWindow: this.props.infoWindow,
    }

    this.onScriptLoad = this.onScriptLoad.bind(this)
    this.getStartingCoords = this.getStartingCoords.bind(this);
    this.recenterMap = this.recenterMap.bind(this);
    this.addHarvest = this.addHarvest.bind(this);
    this.toggleMarker = this.toggleMarker.bind(this);
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);

    this.setState({
      map: map,
    });

    map.addListener('click', (e) => {
      this.toggleMarker(e.latLng);
    });

    this.props.storeInfoWindow(null)

    this.props.storeMap(map);
    this.props.onMapLoad(map);
    this.recenterMap();
  }

  getStartingCoords() {
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

  recenterMap() {
    const map = this.state.map;

    if (map) {
        let center = new window.google.maps.LatLng(this.state.currentLatitude, this.state.currentLongitude);
        map.panTo(center);
    }

  }

  addHarvest(location) {
    
    const { map, markers } = this.state;

    const infoWindow = new window.google.maps.InfoWindow({
      content: '<div id="infoWindow" />',
      position: { lat: location.lat(), lng: location.lng() }
    });

    // this.setState({
    //   infoWindow: infoWindow,
    // })

    this.props.storeInfoWindow(infoWindow);

    var marker = new google.maps.Marker({
      position: location,
      map: map
    });

    markers.push(marker)

    this.setState({
      markers: markers
    })

    infoWindow.addListener('domready', e => {
      render(<NewHarvest location={location} createHarvest={this.props.createHarvest}/>, document.getElementById('infoWindow'))
    });

    infoWindow.open(map);
  }

  toggleMarker(location) {
    const { infoWindow } = this.props;
    const { map } = this.state;

    // this.props.storeInfoWindow('testInfoWindowText')
    // let test = this.props.requestInfoWindow();
    // console.log(test)

    // this.setState({
    //   infoWindow: this.props.requestInfoWindow(),
    // });

    // console.log("From the state: " + this.state.infoWindow)
    console.log('this.state: ' + map);
    console.log("this.props.infoWindow: " + infoWindow)
    console.log("this.state.infoWindow: " + this.state.infoWindow)
    console.log("this.state.showNewHarvest: " + this.state.showNewHarvest)

    if (this.state.showNewHarvest === false && infoWindow === null) {
      this.setState({
        showNewHarvest: true,
      });
      this.addHarvest(location);
    } else if (this.state.showNewHarvest === false && infoWindow !== null) {
      infoWindow.close(map);
      this.props.storeInfoWindow(null);
    } else {
      this.setState({
        showNewHarvest: false,
      });

      infoWindow.close(this.state.map)
      // this.state.currentInfoWindow.close(this.state.map)
      this.state.markers[0].setMap(null);
      this.state.markers.shift();
    }
  }

  componentDidMount() {
    if (!window.google) {
      let s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=` + API_KEY;
      let x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      // Below is important. 
      //We cannot access google.maps until it's finished loading
      this.getStartingCoords();
      s.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }

  }

  render() {
    return (
      <div style={{ width: 500, height: 500 }} id={this.props.id}>
      </div>
    );
  }
}

export default Map;