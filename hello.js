var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led13 = new five.Led(13);
  var led12 = new five.Led(12);
  var led11 = new five.Led(11);
  var led10 = new five.Led(10);
  var led9 = new five.Led(9);
  var led8 = new five.Led(8);
  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  this.repl.inject({
    led13: led13,
    led12: led12,
    led11: led11,
    led10: led10,
    led9: led9,
    led8: led8
  });

  led12.blink(500);
  led13.blink(250);
  led11.blink(125);
  led10.blink(64);
  led9.blink(32);
  // led8.blink(16);

  led8.strobe(500, function(){
       le
 });
});
