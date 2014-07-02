int door_sensor = D0;
int buzzer = D1;
int sound_buzzer = 0;
int indicator = D4;
int door_reading = 0;
int new_door_reading;
byte api[] = {192, 168, 0, 2};

int buzzer_on(String blah);
int buzzer_off(String blah);

TCPClient client;

void setup() {
  Serial.begin(9600);

  pinMode(door_sensor, INPUT_PULLDOWN);
  pinMode(indicator, OUTPUT);
  pinMode(buzzer, OUTPUT);

  digitalWrite(indicator, LOW);
  digitalWrite(buzzer, LOW);

  Spark.function("buzzer_on", buzzer_on);
  Spark.function("buzzer_off", buzzer_off);
}


void loop() {
  new_door_reading = digitalRead(door_sensor);
  if (door_reading != new_door_reading) {
    door_reading = new_door_reading;
    digitalWrite(indicator, door_reading);  
    if (door_reading == HIGH) {
      send_event("door-closed");
    } else {
      send_event("door-opened");
    }
  }

  if (sound_buzzer == 1) {
    digitalWrite(buzzer, HIGH);
  } else {
    digitalWrite(buzzer, LOW);
  }
}

int buzzer_on(String blah) {
  sound_buzzer = 1;
  return 1;
}

int buzzer_off(String blah) {
  sound_buzzer = 0;
  return 1;
}

void send_event(String event) {
  Spark.publish(event, NULL, 60, PRIVATE);
}
