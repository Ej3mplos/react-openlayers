//import React from 'react';
//import { connect } from 'react-redux';
//
//import { showLocationDetails } from './../General/Store/LocationDetails'
//import { updateUserPos } from './../General/Store/UserPosition'
//import { LocationMarker } from './LocationMarker'
//import { applyFilters } from './../LocationsFilter/FilterAppAction'
//
//
//
///** 
// * This component render the map and locations stored as markers.
// * 
// * @author Ricardo Bermúdez Bermúdez
// * @since  Oct 10th, 2019.
// * 
// * @param   {array}  p.locations   Locations array.
// * @param   {object} p.google      Google background data to generate map.
// * @returns {React.Component<Map>} Google maps container.
// */
//class MapContainer extends React.Component {
//
//  updateUserPosition(c) {
//   this.props.updateUserPos({
//     coords: {
//       latitude: c.latLng.lat(),
//       longitude: c.latLng.lng(),
//     }
//   });
//  }
//
//  render() {
//    let {
//      locations, filters, userPosition, google, showLocationDetails
//    } = this.props;
//
//    return <Map
//     styles={mapStyles}
//     className="map"
//      maxZoom={16}
//      minZoom={11}
//      disableDefaultUI={true} 
//      google={google}
//      zoom={12}
//
//      initialCenter={userPosition}
//      >
//        <Marker
//          draggable={true}
//          onDragend={(...a)=>this.updateUserPosition(a[2])}
//          title='Su ubicación'
//          name={'Su ubicación'}
//          position={userPosition}/>
//        {applyFilters(locations, filters, userPosition).map(
//          location => LocationMarker(location, google, showLocationDetails)
//        )}
//    </Map>
//    };
//}
//
///**
// * This styles quit other places to show correctly the locations of commerces.
// * See the GitHug comment to see the solution.
// * 
// * @link https://github.com/tomchentw/react-google-maps/issues/749
// */
//const mapStyles = [
//  {
//    featureType: "poi",
//    elementType: "labels.icon",
//    stylers: [ { visibility: "off" } ]
//  }
//];
//
///**
// * With this wrapper Google API bind the "google" object. 
// */
//const MapWrapper = GoogleApiWrapper({apiKey})(MapContainer);
//
///**
// * Function to map state storage to props over a component.
// * To more information see the Redux documentation.
// * 
// * @link https://es.redux.js.org/docs/basico/uso-con-react.html 
// */
//const mapState = ({
//  locations, filters, userPosition
//}) => ({locations, filters, userPosition });
//
//export default connect(mapState, {showLocationDetails, updateUserPos})(MapWrapper);