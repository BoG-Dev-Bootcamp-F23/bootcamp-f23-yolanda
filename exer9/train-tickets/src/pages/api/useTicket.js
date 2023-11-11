import deleteTicket from "../../../server/mongodb/actions/deleteTicket";
import Ticket from "../../../server/mongodb/models/Ticket";

export default async function lookUpTickets(req, res) {
    if (req.method === "DELETE") {
        try {
            const { ticketId } = req.body;
            const ticketExists = await Ticket.findById(ticketId);
            if (!ticketExists) {
                return res.status(400).send("Ticket Not Found");
            }

            const result = await deleteTicket(req.query);
            return res.status(200).send("Success");
        } catch (e) {
            return res.status(500).send("Failed");
        }
    }
}