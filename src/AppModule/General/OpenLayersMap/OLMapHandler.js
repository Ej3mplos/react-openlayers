import Map           from 'ol/Map';
import View          from 'ol/View';
import XYZ           from 'ol/source/XYZ';
import TileLayer     from 'ol/layer/Tile';
import {fromLonLat}  from 'ol/proj';


/**
 * Use this class to generate a handler of  OLMap instance.
 * 
 * @author  Ricardo Bermúdez Bermúdez
 * @since   Oct 4th, 2019.
 * @extends ol/Map
 */
export class OLMapHandler extends Map {

  /**
   * Use this function to generate a new OL Map instance.
   * 
   * @param   {DOMNode}       target DOM element reference to render map inside.
   * @param   {Array<number>} center Center of the map [lat, lng].
   */
  constructor (target, center=[-99.1439732, 19.4357385]) {  
    let view = new View({
      center: fromLonLat(center), zoom: 15, maxZoom: 16, minZoom: 11
    });
    let source = new XYZ({
      url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    });
    let layers = [new TileLayer({source})];
      
    super({target, view, layers, controls:[]});

    this.on('click', e => this.clickHandler(e));
  }

  /**
   * This method is use to handle the click event over map. First detect all
   * features that match with click position and after select the last feature
   * in the list.
   * 
   * @param   {Event} event 
   * @returns {void}
   */
  clickHandler = e => {
    let clickFn = this.forEachFeatureAtPixel(e.pixel, f=>f.listeners_.click[0] );
    if (typeof(clickFn)==='function') {
      clickFn()
    }
  }
}