
/** 
 * This method is use to retrieve all locations to show to user from server.
 * 
 * @author Ricardo Bermúdez Bermúdez
 * @since  Oct 10th, 2019.
 */
export const getLocations = () => 
  fetch('assets/locations.json')
  .then(res => res.json());