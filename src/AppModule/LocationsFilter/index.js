import React from 'react';
import { connect } from 'react-redux';

import FilterMenu from './FilterMenu';
import { update } from '../General/Store/Locations';
import * as FilterService from './FilterService';


/**
 * This class represents the Locations Filter Component and manage the state
 * of location markers.
 * 
 * @author Ricardo Bermúdez Bermúdez
 * @since  Oct 9th, 2019.
 * @extends React.Component
 */
class LocationsFilter extends React.Component {

  /**
   * Recover all commerce locations to show to user.
   */
  componentDidMount() {
    let { update } = this.props;
    setTimeout(
      ()=>
        FilterService
        .getLocations()
        .then(locations => update(locations))
    , 1000)
  }
  
  /**
   * Render the filter menu view.
   */
  render = () => 
    <FilterMenu
      swipeUp={this.props.swipeUp}
      swipeDown={this.props.swipeDown}/>
} 

export default connect(null, {update})(LocationsFilter)