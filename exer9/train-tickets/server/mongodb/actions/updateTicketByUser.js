import connectDB from "..";
import Ticket from "../models/Ticket";

export default async function updateTicketByUser(data) {
    try {
        await connectDB();
        const { ticketId, userId } = data;
        await Ticket.findByIdAndUpdate(ticketId, { userId: userId });
    } catch (e) {
        console.log(e);
        throw new Error("Unable to update ticket. Invalid data or database issue.");
    }
}