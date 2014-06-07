require 'sinatra'
require 'redis'

DOOR_KEY = 'bathroom.door'
set :bind, '0.0.0.0'
set :redis, Redis.new

get '/' do
  val = settings.redis.get(DOOR_KEY)
  "The door is: #{val}"
end

get '/api/door_opened' do
  settings.redis.set(DOOR_KEY, 'open')
end

get '/api/door_closed' do
  settings.redis.set(DOOR_KEY, 'closed')
end
