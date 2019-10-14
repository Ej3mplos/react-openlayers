import {fromLonLat}  from 'ol/proj';
import Feature       from 'ol/Feature';
import Point         from 'ol/geom/Point';
import {Icon, Style} from 'ol/style';

import { showLocationDetails } from './../Store/LocationDetails';
import store from './../Store'


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
 * Build a new Icon Feature to show in OL Markers Layer, in other words,
 * create a new marker.
 * 
 * @author  Ricardo Bermudez Bermudez
 * @since   Oct 4th, 2019.
 * @extends {ol/Feature}
 */
export class Marker extends Feature {

    /**
     * Constructor of marker.
     * 
     * @param {number}     lat   Latitude. 
     * @param {number}     lng   Longitude.
     * @param {Function}   click Function will run when user press marker.
     * @this  {ol/Feature} New vector feature (Marker).
     */
    constructor({lat, lng, iconLink, idStore}  ) {
      super();
      this.setGeometry(new Point(fromLonLat([lng, lat])));
      this.setStyle(new Style({
        image: new Icon({
          anchor: [28, 28],
          anchorXUnits: 'pixels',
          anchorYUnits: 'pixels',
          src: iconLink,
        })
      }));
      this.on('click', () => store.dispatch(showLocationDetails(idStore)));
    } 
}


