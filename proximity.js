var five = require("johnny-five"), potentiometer, potentiometer2, isClose;
var board = new five.Board();

board.on("ready", function() {
     isClose = false;
     var proximity = new five.Proximity({
          controller: "HCSR04",
          pin: 7
     });
     var led8 = new five.Led(8);
     var led6 = new five.Led(5);
     /* main servo */
     var servo = new five.Servo(10);

     /* secondary servo */
     var servo2 = new five.Servo(9);
     //arm -> servor & servo2, arm.punch-> servor.to(180) & servo2.to(0)
     // Direct Constructor
     // var continuous = new five.Servo.Continuous(6);
     // // Create a new `potentiometer` hardware instance.
     potentiometer = new five.Sensor({
          pin: "A2",
          freq: 25
     });

     potentiometer2 = new five.Sensor({
          pin: "A3",
          freq: 25
     });
     var i = 0;
     rate = 0;


     proximity.on("data", function() {
          // console.log("Proximity: ");
          // console.log("  cm  : ", this.cm);
          // console.log("  in  : ", this.in);
          // console.log("-----------------");
          if(this.cm <= 25){
               // continuous.cw(1);
               led8.on();
               led6.off();
          } else{
               // continuous.ccw(1);
               led8.off();
               led6.on();
               // continuous.stop();
          }
          // if(!isClose){
          //      led6.off();
          // }else{
          //      led6.strobe();
          // }
     });

     this.repl.inject({

     });
     // "data" get the current reading from the potentiometer
     potentiometer.on("data", function() {
          // console.log(this.value, this.raw);
          if ((this.value/1023*180) >= 90) {
               // led8.on();
               // led8.blink(this.value/500);
          } else {
               // led8.off();
          }
          servo.to(this.value/1023*180);
          // led8.on();
     });

     function adjust(){

     }
     potentiometer2.on("data", function() {
          // console.log(this.value, this.raw);
          servo2.to(this.value/1023*180);
          // led8.off();
     });

     // proximity.on("change", function() {
     //      // console.log("The obstruction has moved.");
     // });
});
