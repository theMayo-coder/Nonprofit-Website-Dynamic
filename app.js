// make the required imports
const http = require('http');
const fs = require('fs');
const express = require('express');
const { dirname } = require('path');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Event = require('./models/event'); 
const session = require('express-session');
const flash = require('connect-flash');

//configure environment variables
if(process.nextTick.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const PORT = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION;

//set mongoose
mongoose.set('strictQuery', false);

function counter() {
    count++;
    console.log(count);
}

//create app and parser
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//configure the app
app.set('view engine', 'ejs');
app.use('/assets',  express.static('assets'));
app.use(session({
    secret:'somesecretkey-temple',
    saveUninitialized: true,
    resave: true
}));
app.use(flash());

//make each route

app.get(["/", "/home"], function(req, res) {
    res.render("index2");
});

app.get("/about-us", function(req, res) {
    res.render("about_us2");
});

app.get("/temple-services", function(req, res) {
    res.render("temple_services2");
});

app.get("/priests", function(req, res) {
    res.render("priests2");
});

app.get("/events", async function(req, res) {
    try {
        //sort list
        const eventsList = await Event.find().sort({date: 1});
        
        //render sorted list
        res.render("events", {events: eventsList});
    } catch(e) {
        console.log(e.message);

        //render no events if an error is found
        res.render("events", {events: []});
    }
});

//test route to get one of the event models
app.get("/get-model", function(req, res) {
    const event = new Event({
        day: 5,
        month: 4,
        year: 2024,
        description: "hey this is it"
    });

    res.send(event);
});

app.get("/add-events", async function(req, res) {

    // await Event.find().sort({date: 1}).then(result => {
    //     console.log(result);
    // });

    console.log("in the get req");
    try {
        const eventsList = await Event.find().sort({date: 1});
        console.log(eventsList);
        
        res.render("add_events", {events: eventsList, errors: req.flash("error"), successes: req.flash("success")});
    } catch(e) {
        console.log(e.message);
        res.render("add_events", {events: [], errors: req.flash("error"), successes: req.flash("success")});
    }
});

//handle post requests to add events
app.post("/add-events", urlencodedParser, async function (req, res) {

    console.log("in the post req");
    //grab information from the user 
    body = req.body;

    //get the year month and day as numbers
    const year = parseInt(body.year, 10);
    const month = parseInt(body.month, 10);
    const day = parseInt(body.day, 10);

    //create a date object
    const newDate = new Date(year, month-1, day);

    //check if date was valid
    if (newDate.getFullYear() === year && newDate.getDate() === day && newDate.getMonth() === (month-1)) {

        try {
            //create an Event
            const event = new Event({
                date: newDate,
                description: body.description
            });
            await event.save(); 

            //flash success message
            req.flash("success", "Added Event Successfully!");
        } catch (err) {
            req.flash("error", err.message);
        }

    } else {
        //flash error message
        req.flash("error", "Please Enter a Valid Date");
    }

    //re-render the page with the new events
    res.redirect('/add-events');
});

//handle delete requests to add events
app.delete("/add-events/:description", urlencodedParser, async function(req, res) {
    
    console.log("called delete req");
    //get description
    const deleting = decodeURIComponent(req.params.description);
    const spaced = deleting.replace(/-/g, " ");

    console.log(spaced);

    await Event.deleteOne({description: spaced});
    res.send("success");

});

//function to start app by connecting to mongo and start listening on a port
const start = async() => {
    mongoose.connect(CONNECTION).then(() => {
        console.log("Mongodb connected")
        app.listen(PORT, () => {
            console.log("app listening on port " + PORT);
        });
    }).catch((err) => {
        console.log(err);
    });
}

//call start
start();