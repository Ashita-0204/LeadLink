const express = require("express");
const router = express.Router();
const Ticket = require("../models/TicketSchema");
const { redirect } = require("react-router-dom");
const mongoose = require("mongoose");

router.all("/", (req, res, next) => {
  next();
});

//create
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

router.get("/", async (req, res) => {
  try {
    const result = await Ticket.find(); // Fetch all tickets

    return res.json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

router.get("/:ticketId", async (req, res) => {
  try {
    const result = await Ticket.find(); // Fetch all tickets

    return res.json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

router.put("/:ticketId", async (req, res) => {
  try {
    const { message, sender } = req.body;
    const { ticketId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(ticketId)) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid Ticket ID format" });
    }

    if (!message || !sender) {
      return res
        .status(400)
        .json({ status: "error", message: "Message and sender are required" });
    }

    const result = await Ticket.findByIdAndUpdate(
      ticketId,
      { $push: { conversation: { sender, message } } },
      { new: true }
    );

    if (!result) {
      return res
        .status(404)
        .json({ status: "error", message: "Ticket not found" });
    }

    return res.json({
      status: "success",
      message: "Ticket updated successfully",
      data: result,
    });
  } catch (error) {
    console.error(" Error updating ticket:", error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

router.patch("/:ticketId/close", async (req, res) => {
  try {
    const { ticketId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(ticketId)) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid Ticket ID format" });
    }

    const result = await Ticket.findByIdAndUpdate(
      ticketId,
      { status: "Closed" },
      { new: true }
    );

    if (!result) {
      return res
        .status(404)
        .json({ status: "error", message: "Ticket not found" });
    }

    return res.json({
      status: "success",
      message: "Ticket closed successfully",
      data: result,
    });
  } catch (error) {
    console.error(" Error closing ticket:", error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

router.delete("/:ticketId", async (req, res) => {
  try {
    const { ticketId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(ticketId)) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid Ticket ID format" });
    }

    const result = await Ticket.findByIdAndDelete(ticketId);

    if (!result) {
      return res
        .status(404)
        .json({ status: "error", message: "Ticket not found" });
    }

    return res.json({
      status: "success",
      message: "Ticket deleted successfully",
      deletedTicket: result,
    });
  } catch (error) {
    console.error("Error deleting ticket:", error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

module.exports = router;
