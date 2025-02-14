const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  clientId: {
    type: Schema.Types.ObjectId,
  },

  subject: { type: String, maxlength: 100, required: true, default: "" },
  openAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  status: {
    type: String,
    maxlength: 30,
    required: true,
    default: "Pending operator response",
  },

  conversation: [
    {
      sender: { type: String, maxlength: 50, required: true, default: "" },
      message: { type: String, maxlength: 100, required: true, default: "" },
      msgAt: { type: Date, required: true, default: Date.now() },
    },
  ],
});

module.exports = mongoose.model("Ticket", TicketSchema);
