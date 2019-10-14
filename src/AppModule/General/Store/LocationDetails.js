
export const reducer = (
  state=null, {type, idLocation}
) =>
   type==='SHOW_PIN' ? idLocation
  :state;

export const showLocationDetails = idLocation => ({type: 'SHOW_PIN', idLocation})