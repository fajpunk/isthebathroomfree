int door_sensor = D0;
int indicator = D4;
int door_reading = 0;
int new_door_reading;
byte api[] = {192, 168, 0, 110};

TCPClient client;

void setup() {
  Serial.begin(9600);

  pinMode(door_sensor, INPUT_PULLDOWN);
  pinMode(indicator, OUTPUT);
  digitalWrite(indicator, LOW);
}


void loop() {
  new_door_reading = digitalRead(door_sensor);
  if (door_reading != new_door_reading) {
    door_reading = new_door_reading;
    digitalWrite(indicator, door_reading);  
    if (door_reading == HIGH) {
      send_event("door_closed");
    } else {
      send_event("door_opened");
    }
  }
}

void send_event(String event) {
  Serial.println("Sending ");

  if (client.connect(api, 5000)) {
    Serial.println(event);
    Serial.println("Connected to api");

    client.print("GET /api/");
    client.print(event);
    client.println(" HTTP/1.1");
    client.println("User-Agent: sparkcore");
    client.println("Host: 192.168.0.110:5000");
    client.println("Accept: */*");
    client.println("Connection: close");
    client.println();
    
    // Wait for the response
    while(true) {
      if (client.available() != 0) {
        break;
      }
    }
    client.stop();
    Serial.println("Closed connection");
  } else {
    Serial.println("Couldn't connect to api");
  }
}
