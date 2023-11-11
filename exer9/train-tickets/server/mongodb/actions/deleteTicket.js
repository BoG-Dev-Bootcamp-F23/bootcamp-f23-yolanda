import connectDB from "..";
import Ticket from "../models/Ticket";

export default async function deleteTicket(data) {
    try {
        await connectDB();
        const { ticketId } = data;
        return await Ticket.findByIdAndDelete(ticketId);
    } catch (e) {
        console.log(e);
        throw new Error("Unable to delete ticket. Invalid data or database issue.");
    }
}