function _fetchLocations(input) {
  return fetch(`RailsApi/search_locations/${input}`)
  .then(res => res.json())
  .then(locations => locations.predictions)
}
  
function _getLatLong(location) {
  return fetch(`RailsApi/confirm_route/convert_lat_long/${location}`)
  .then(res => res.json())
  .then(addressInfo => addressInfo.results[0].geometry.location)
}
  
function _convertPickupLatLong(location) {
  return (dispatch) => {
    dispatch({type: 'CONVERTING_PICKUP_LAT_LONG'})
    return _getLatLong(location).then(({ lat, long }) => dispatch({type: 'RETRIEVE_PICKUP_LAT_LONG', pickupLat: lat, pickupLong: long}))
  }
}

function _convertDropoffLatLong(location) {
  return (dispatch) => {
    dispatch({type: 'CONVERTING_DROPOFF_LAT_LONG'})
    return _getLatLong(location).then(({ lat, long }) => dispatch({type: 'RETRIEVE_DROPOFF_LAT_LONG', dropoffLat: lat, dropoffLong: long}))
  }
}
  
export function fetchPickupLocation(input) {
  console.log(input)
    return (dispatch) => {
      dispatch({ type: 'FETCHING_SUGGESTED_PICKUP_LOCATIONS' });
      _fetchLocations(input).then(suggestedPickupLocations => 
      dispatch({ type: 'DISPLAY_PICKUP_LOCATIONS', suggestedPickupLocations }));
  };
}
  
export function fetchDropOff(input) {
  console.log(input)
    return (dispatch) => {
      dispatch({ type: 'FETCHING_SUGGESTED_DROPOFFS' });
       _fetchLocation(input).then(suggestedDropOffs => 
      dispatch({ type: 'DISPLAY_DROPOFFS', suggestedDropoffs }));
  };
}