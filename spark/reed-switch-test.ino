int door_sensor = D0;
int indicator = D4;
int door_reading = 0;
volatile unsigned long last_interrupt_time = 0;
volatile int door_flag= 0;


void setup() {
    pinMode(door_sensor, INPUT_PULLDOWN);
    pinMode(indicator, OUTPUT);
    digitalWrite(indicator, LOW);
    
    attachInterrupt(door_sensor, door_change, CHANGE);
}


void loop() {
    if (door_flag) {
        door_reading = digitalRead(door_sensor);
        digitalWrite(indicator, door_reading);  
        if (door_reading == HIGH) {
            Spark.publish("door-closed", NULL, 60, PRIVATE);
        } else {
            Spark.publish("door-opened", NULL, 60, PRIVATE);
        }
        door_flag = 0;
    }
}


void door_change() {
    unsigned long interrupt_time = millis();
    if (interrupt_time - last_interrupt_time > 1000) {
        door_flag = 1;
        last_interrupt_time = interrupt_time;
    }
}
