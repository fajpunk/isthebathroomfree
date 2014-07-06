require 'sinatra'
require 'sinatra-websocket'
require 'redis'
require 'haml'

DOOR_KEY = 'bathroom.door'
set :bind, '0.0.0.0'
set :redis, Redis.new
set :server, 'thin'
set :sockets, []

get '/' do
  if !request.websocket?
    @answer = case settings.redis.get(DOOR_KEY)
              when 'open'
                'Yes!'
              when 'closed'
                'No!'
              else 'Not sure...'
              end
    haml :index
  else
    request.websocket do |ws|
      ws.onopen do
        settings.sockets << ws
      end
      ws.onclose do
        warn("websocket closed")
        settings.sockets.delete(ws)
      end
    end
  end
end

get '/api/door_opened' do
  settings.redis.set(DOOR_KEY, 'open')
  settings.sockets.each do |ws|
    ws.send('Yes!')
  end
end

get '/api/door_closed' do
  settings.redis.set(DOOR_KEY, 'closed')
  settings.sockets.each do |ws|
    ws.send('No!')
  end
end