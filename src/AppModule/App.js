import React from 'react';
import { connect } from 'react-redux';


import LocationsFilter from './LocationsFilter'
import DetailsCard     from './LocationDetails/DetailsCard';
import { updateUserPos } from './General/Store/UserPosition'
import OLMapComponent from './General/OpenLayersMap/OLMapComponent';


/**
 * Represents the main application component.
 * 
 * @author  Ricardo Bermúdez Bermúdez
 * @since   Oct 4th, 2019.
 * @since   Oct 9th, 2019. Redefine as function component.
 */
class App extends React.Component{

  constructor(...props) {
    super(...props);
    this.state = {layoutDown: false}
  }

  swipeActions = () => ({
    swipeUp:   () => this.setState({layoutDown: false}),
    swipeDown: () => this.setState({layoutDown: true}),
  })

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.props.updateUserPos);
    } else {
      console.log( "Geolocation is not supported by this browser.");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render = () => 
    <React.Fragment>
      <OLMapComponent markers={[]}/>
      <div className={`layout ${this.state.layoutDown?'--down':''}`}>
        <LocationsFilter {...this.swipeActions()}/>
        <DetailsCard/>
      </div>
    </React.Fragment>;
}

export default connect(null, {updateUserPos})(App);