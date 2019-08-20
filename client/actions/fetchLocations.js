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