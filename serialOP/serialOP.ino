/*Arduino file to handle serial and control devices.*/

void setup() {
  Serial.begin(9600);
  pinMode(11,OUTPUT); /*Ground Floor Light*/
  pinMode(12, OUTPUT); /*First Floor Light*/
  pinMode(6, OUTPUT); /*Fan*/
  
}

void loop() {
  if(Serial.available()){
    switch(Serial.read()){
      case '6': digitalWrite(11,LOW);
                break;
      case '7': digitalWrite(11, HIGH);
                break;
      case '8': digitalWrite(12,LOW);
                break;
      case '9': digitalWrite(12, HIGH);
                break;
      case '0': digitalWrite(6, 0);
                break;
      case '1': digitalWrite(6, 32);
                break;
      case '2': digitalWrite(6, 64);
                break;
      case '3': digitalWrite(6, 96);
                break;
      case '4': digitalWrite(6, 128);
                break;
      case '5': digitalWrite(6, 255);
                break;
      default: break;
    }
  }

}
