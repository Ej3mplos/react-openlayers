
export const reducer = (
  state=(new Set()), {type, filterKey}
) =>
   type==='ADD_FILTER'    ? new Set([...state, filterKey])
  :type==='REMOVE_FILTER' ? state.delete(filterKey) && (new Set([...state]))
  :state;

export const addFilter    = filterKey => ({type:'ADD_FILTER', filterKey});
export const removeFilter = filterKey => ({type:'REMOVE_FILTER', filterKey});