import updateTicketByUser from "../../../server/mongodb/actions/updateTicketByUser";
import Ticket from "../../../server/mongodb/models/Ticket";
import User from "../../../server/mongodb/models/User";

export default async function handler(req, res) {
    if (req.method === "PATCH") {
        try {
            const { userId } = req.body;
            const userExists = await User.findById(userId);
            if (!userExists) {
                return res.status(400).send("User Not Found");
            }

            const { ticketId } = req.body;
            const ticketExists = await Ticket.findById(ticketId);
            if (!ticketExists) {
                return res.status(400).send("Ticket Not Found");
            }

            const result = await updateTicketByUser(req.body);
            return res.status(200).send("Success");
        } catch (e) {
            return res.status(500).send("Failed");
        }
    }
}