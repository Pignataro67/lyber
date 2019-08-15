Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/search_destination/:input', to: 'search#search_destination'
  get '/confirm_route/convert_coords/:location', to: 'confirm_route#get_coords'
  get '/confirm_route/mapbox', to: 'confirm_route#mapbox'
  get '/lyft_uber', to: 'lyft_uber#uber_estimate'
end
