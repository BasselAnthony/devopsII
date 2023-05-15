const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5050;

app.use(cors());
app.use(bodyParser.json());


// Connect to MongoDB
mongoose.connect( 
  "mongodb://host.docker.internal:27017/task-management", 
  );
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
const { Ticket, DrawResult } = require("./models");

app.post("/tickets", (req, res) => {
  const ticket = new Ticket(req.body);

  ticket
    .save()
    .then((savedTicket) => {
      res
        .status(200)
        .json({ message: "User saved successfully", ticket: savedTicket });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error saving user", error: err });
    });
});

app.get('/drawResult', async (req, res) => {
  try {
    const drawResults = await DrawResult.find();
    res.status(200).json(drawResults);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/tickets', async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
