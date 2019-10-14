import React from 'react';
import { connect } from 'react-redux';
import { Swipeable } from 'react-swipeable';

import { showLocationDetails } from './../General/Store/LocationDetails'


function mapsSelector({lat,lng}) {
  
  if /* if we're on iOS, open in Apple Maps */
    ((navigator.platform.indexOf("iPhone") !== -1) || 
     (navigator.platform.indexOf("iPad") !== -1) || 
     (navigator.platform.indexOf("iPod") !== -1))
    {window.open(`maps://maps.google.com/maps?daddr=${lat},${lng}&amp;ll=`);}else /* else use Google */
    {window.open(`https://maps.google.com/maps?daddr=${lat},${lng}&amp;ll=`);}
}

export class DetailsCard extends React.Component {
  
  constructor (...props) {
    super(...props);
    this.state = {active: false}
    
  }

  renderDetails = ({locations, locationDetails}) => {
    if (locationDetails) {
      let location = locations.filter(l=>l.idStore === locationDetails)[0];
      
      return <React.Fragment>
        <img className="commerce-logo" alt={location.title} src={location.logoLink}/>
        <button className="button --main" onClick={()=>mapsSelector(location)}>
          Ir Ahora
        </button>
        <p className="text--content">{location.address}</p>
      </React.Fragment>
    }

    return null;
  }
  
  render = () => 
    <Swipeable onSwipedRight={()=>this.props.showLocationDetails(null)}>
      <div className={`location-details ${!this.props.locationDetails?'--inactive':''}`}>
        {this.renderDetails(this.props)}
      </div>  
    </Swipeable>;
}

const mapState =({
  locations, locationDetails
}) => ({locations, locationDetails});

export default connect(mapState,{showLocationDetails})(DetailsCard);