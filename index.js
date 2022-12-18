if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require("express");
const userDB = require("./models/userDB");
const PORT = process.env.PORT || 8080;
const breaker = "===============================================================";

// SETUP
// =======================================================================
const app = express();
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}!`);
    console.log(breaker);
})

app.use(express.urlencoded({extended: true}));


// ROUTING
// ========================================================================

// this is for the client browser
app.get("/userCall/:state", async (req, resp)=>{
    const {state} = req.params;
    const realState = (state == 'True');
    const userState = await userDB.findOne();
    console.log(userState);

    userState.DryingInProgress = realState;
    await userState.save();

    const newUserState = await userDB.findOne();
    console.log(newUserState);
    resp.header("Access-Control-Allow-Origin", "*");
    resp.status(200).send("db modified! got it!");
});


// this is for the arduino client
app.get("/arduinoCall", async(req, resp)=>{
    const userState = await userDB.findOne();
    const isDryingInProgress = userState.DryingInProgress;

    resp.header("Access-Control-Allow-Origin", "*");
    resp.status(200).send(isDryingInProgress);
})
