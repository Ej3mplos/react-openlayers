
export const reducer = (
  locations=[], {type, data}
) => 
   type==='UPDATE_LOCATIONS'? data
  :type==='PUSH_LOCATION'   ? [...locations, data]
  :locations;

export const update = data => ({ type: 'UPDATE_LOCATIONS', data });
export const push   = data => ({ type: 'PUSH_LOCATION',    data });