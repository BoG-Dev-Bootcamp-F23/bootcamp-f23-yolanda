import connectDB from "..";
import Ticket from "../models/Ticket";

export default async function readTicketsByUser(data) {
    try {
        await connectDB();
        const { userId } = data;
        return await Ticket.find({ userId: userId });
    } catch (e) {
        console.log(e);
        throw new Error("Unable to read ticket. Invalid data or database issue.");
    }
}