const express = require("express");
const router = express.Router();
const Ticket = require("../models/TicketSchema");

router.all("/", (req, res, next) => {
  next();
});

router.post("/", async (req, res) => {
  const { subject, sender, message } = req.body;

  if (!subject || !sender || !message) {
    return res
      .status(400)
      .json({ status: "error", message: "Missing required fields" });
  }

  const ticketObj = {
    clientId: "67a06af6305736674ce3ac81",
    subject,
    conversation: [{ sender, message }],
  };

  const result = await Ticket.create(ticketObj);

  return res.json({
    status: "success",
    message: "New Ticket has been created!",
    data: result,
  });
});

module.exports = router;
