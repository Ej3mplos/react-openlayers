import React      from 'react';

import store      from './../General/Store';


/**
 * The problem of how to control the state of marker follow the next links:
 * 
 * Similar issues:
 * https://github.com/fullstackreact/google-maps-react/issues/108
 * https://stackoverflow.com/questions/57367388/react-google-maps-marker-not-displaying-when-wrapped-inside-of-a-class-component
 * 
 * Default web api comment:
 * https://stackoverflow.com/questions/44729776/how-can-animation-be-added-to-markers-in-react-google-maps
 * 
 * Set animation with google-maps-react library:
 * https://stackoverflow.com/questions/5356930/set-animation-google-maps-marker
 * https://stackoverflow.com/questions/44729776/how-can-animation-be-added-to-markers-in-react-google-maps
 * 
 * React ref:
 * https://css-tricks.com/working-with-refs-in-react/#targetText=%23How%20to%20create%20a%20ref&targetText=You%20can%20create%20a%20ref,ref%20attribute%20on%20the%20element.&targetText=We%20can%20%22refer%22%20to%20the,current%20attribute%20of%20the%20ref.
 * 
 * Redux store suscribe:
 * https://es.redux.js.org/docs/basico/store.html
// */
//let markersReferences = {};
//let googleRef         = {};
//let lastLocation      = null;
//
//store.subscribe(() => {
//    let {locationDetails} = store.getState();
//    
//    if (locationDetails in markersReferences) {
//        if (lastLocation) lastLocation.marker.setAnimation(null);
//        lastLocation = markersReferences[locationDetails]
//        if (lastLocation) lastLocation.marker.setAnimation( googleRef.maps.Animation.BOUNCE);
//    } else {
//        if (lastLocation) lastLocation.marker.setAnimation(null);
//    }
//});

/**
 * Represent the commerce marker.
 * 
 * @author Ricardo Bermúdez Bermúdez
 * @since  Oct 10, 2019.
 * @returns {React.Component<Marker>}
// */
//export const LocationMarker = (
//  {idStore, lat, lng, iconLink}, google, showLocationDetails,
//) => {
//    googleRef = google;
//    
//    return <Marker
//      ref={e => markersReferences[idStore]=e}
//      key = {idStore}
//      position={{lat,lng}}
//      onClick={() => showLocationDetails(idStore)}
//      animation={googleRef.maps.Animation.DROP}
//      icon={{
//        url: iconLink,
//        anchor: new google.maps.Point(28,28),
//        scaledSize: new google.maps.Size(28,28)
//      }} />;
//}
