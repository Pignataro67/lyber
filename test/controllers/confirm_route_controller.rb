class ConfirmRouteController < ApplicationController
  require uri
  
    def get_coordinates
      location = params[:location]
      res = RestClient::Request.execute(
      method: :get,
      url: "https://maps.googleapis.com/maps/api/geocode/json?address=#{location}&key=#{ENV['GOOGLE_PLACES_KEY']}",
      )
      render json: res
    end
  
    def mapbox
      key = ENV['MAPBOX']
      render json: key
    end
end