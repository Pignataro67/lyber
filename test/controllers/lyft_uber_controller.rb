class LyftUberController < ApplicationController

  def lyft_estimate
   start_lat = params[:start_lat]
   start_long = params[:start_long]
   drop_off_lat = params[:drop_off_lat]
   drop_off_long = params[:drop_off_long]
   res = RestClient::Request.execute(
     method: :post,
     url: "https://api.lyft.com/v1.2/requests/estimate",
     headers: {
       :Authorization => "Token #{ENV['LYFT_ESTIMATE']}",
       :content_type => :json,
       :accept => :json,
       :params => {startng_latitude: startLat, starting_longitude: startLong, drop_off_lat: dropOffLat, drop_off_long: dropOffLong}
     }
   )
   render json: res
  end
 
  def uber_estimate
    start_lat = params[:start_lat]
    start_long = params[:start_long]
    drop_off_lat = params[:drop_off_lat]
    drop_off_long = params[:drop_off_long]
    res = RestClient.get("https://api.uber.com/v1/cost?start_lat=#{startlat}&start_lng=#{start_long}&end_lat=#{drop_off_long}", headers={:Authorization => "bearer #{ENV['UBER_ESTIMATE']}"})
    render json: res
  end
end