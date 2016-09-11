var five = require("johnny-five"), board, potentiometer, potentiometer2;

board = new five.Board();


board.on("ready", function() {

     /* main servo */
     var servo = new five.Servo(10);

     /* secondary servo */
     var servo2 = new five.Servo(9);

     var led8 = new five.Led(8);

     // Create a new `potentiometer` hardware instance.
     potentiometer = new five.Sensor({
          pin: "A2",
          freq: 25
     });

     potentiometer2 = new five.Sensor({
          pin: "A3",
          freq: 25
     });

     // Inject the `sensor` hardware into
     // the Repl instance's context;
     // allows direct command line access
     board.repl.inject({
          servo: servo,
          pot: potentiometer,
          led8: led8
     });

     board.repl.inject({
          servo2: servo2,
          pot2: potentiometer2
     });

     // "data" get the current reading from the potentiometer
     potentiometer.on("data", function() {
          // console.log(this.value, this.raw);
          if ((this.value/1023*180) >= 90) {
               led8.on();
               // led8.blink(this.value/500);
          } else {
               led8.off();
          }
          servo.to(this.value/1023*180);
          // led8.on();
     });

     potentiometer2.on("data", function() {
          // console.log(this.value, this.raw);
          servo2.to(this.value/1023*180);
          // led8.off();
     });
});
