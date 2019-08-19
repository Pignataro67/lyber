export default function rootReducer(state = {
  isFetchingMapboxKey: false,
  mapBoxKey: '',
  isFetchingStartingLocation: false,
  isFetchingDropOff: false,
  suggestedPickupLocations: [],
  suggestedDropOff: [],
  isConvertingPickupLatLong: false,
  isConvertingDropoffLatLong: false,
    }, action) {
    switch(action.type){
      case "FETCHING_MAPBOX_KEY":
        return {...state, isFetchingMapboxKey: true}
      case "ADD_MAPBOX_KEY_TO_STATE":
        return {...state, isFetchingMapboxKey: false, mapBoxKey: action.key}
      case "FETCHING_SUGGESTED_PICKUP_LOCATIONS":
        return {...state, isFetchingPickupLocation: true, suggestedPickupLocations: []}
      case "DISPLAY_PICKUP_LOCATIONS":
        return {...state, isFetchingPickupLocation: false, suggestedPickupLocations: action.suggestedPickupLocations}
      case "FETCHING_SUGGESTED_DROPOFFS": 
        return {...state, isFetchingDropOff: true, suggestedDropOffs: []}
      case "DISPLAY_DROPOFFS":
        return {...state, isFetchingDropOff: false, suggestedDropOffs: action.suggestedDropOffs}
        default: 
        return state
    }
  }