/**
 * Represent the coordinates of Mexico City (Alameda central).
 * 
 * @since Oct 10th, 2019.
 * @const
 * @type {Object}
 */
const UserPosition = {lat: 19.4357385, lng: -99.1439732};


export const reducer = (
  userPosition = UserPosition, {type, data}
) => 
  type==='UPDATE_USER_POSITION'? data
  :userPosition;

export const updateUserPos = pos => ({
  type: 'UPDATE_USER_POSITION', data: {
      lat: pos.coords.latitude,
      lng: pos.coords.longitude
  }
});
