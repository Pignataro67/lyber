export default function rootReducer(state = {
  isFetchingMapboxKey: false,
  mapBoxKey: '',
  isFetchingStartingLocation: false,
  isFetchingDropOff: false,
  suggestedPickupLocations: [],
  suggestedDropOff: [],
  isConvertingPickupLatLong: false,
  isConvertingDropoffLatLong: false,
  pickupLat: '',
  pickupLong: '',
  dropoffLat: '',
  dropoffLong: '',
  isFetchingUberEstimate: false,
  isFetchingLyftEstimate: false,
  uberEstimates: '',
  lyftEstimates: '',
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
        case "CONVERTING_PICKUP_LAT_LONG":
        return {...state, isConvertingPickupLatLong: true}
      case "RETRIEVE_PICKUP_LAT_LONG":
        return {...state, isConvertingPickupLatLong: false, pickupLatLong: action.pickupLatLong}
      case "CONVERTING_DROPOFF_LAT_LONG":
        return {...state, isConvertingDropoffLatLong: true}
      case "RETRIEVE_DROPOFF_LAT_LONG":
        return {...state, isConvertingDropoffLatLong: false, dropoffLatLong: action.dropoffLatLong}
      case "RETURN_UBER_ESTIMATE":
        return {...state, isFetchingUberEstimate: true, uberEstimates: ''}
      case "ADD_UBER_ESTIMATE_TO_STATE":
        return {...state, isFetchingUberEstimate: false, uberestimates: action.estimates }
      case "FETCHING_LYFT_ESTIMATE":
        return {...state, isFetchingLyftEstimate: true, lyftEstimates: ''}
      case "ADD_LYFT_ESTIMATES_TO_STATE":
        return {...state, isFetchingLyftEstimate: false, lyftEstimates: action.estimates }
      default: 
        return state
    }
  }