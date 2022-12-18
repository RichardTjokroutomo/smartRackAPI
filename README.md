# smartRackAPI

to Eastest:

- this server will be the intermediary between the web app and the arduino.

- this API has 2 endpoints: 
  1) /userCall/:state
  2) /arduinoCall

- you will be working with the /arduinoCall path. Here are some details:
  1) the root URL is https://smartrackapi.adaptable.app (if you want to call the API on your browser, use https://smartrackapi.adaptable.app/arduinoCall)
  2) listen on port 80
  3) request method is GET
  4) path is /arduinoCall

- the server will give the following response in JSON format:
  {"isDryingInProgress": STATE}

- STATE is either true or false. If true, program the arduino to extend the clothes rack (because the user told the web app to start drying the clothes). If false,   then program the arduino to retract the clothes rack.

- program the arduino to periodically make HTTP request to the server to ask for the STATE.

- how's 8051? You love retro eh? :)

