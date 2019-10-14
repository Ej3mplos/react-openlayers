import VectorLayer   from 'ol/layer/Vector';
import VectorSource  from 'ol/source/Vector';

import { Marker }    from './Marker';


/**
 * This class represents the markers on Open Layer Map. This class is a
 * VectorLayer subclass use to show markers as a map layer.
 * 
 * @author  Ricardo Bermúdez Bermúdez
 * @since   Oct 4th, 2019.
 * @extends VectorLayer
 */
export class MarkersLayer extends VectorLayer {
  
  setMarkers(markers){
    this.setSource( new VectorSource({
      features: markers.map(p => new Marker(p))
    }) );
  }
}