import updateTicketByUser from "../../../server/mongodb/actions/updateTicketByUser";
import User from "../../../server/mongodb/models/User";

export default async function handler(req, res) {
    if (req.method === "PATCH") {
        try {
            const { userId } = req.body;
            const userExists = await User.findById(userId);
            if (userExists == null) {
                return res.status(400).send("User Not Found");
            }
            const result = await updateTicketByUser(req.body);
            return (result ? res.status(200).send("Success"): res.status(400).send("Ticket Not Found"));
        } catch (e) {
            return res.status(500).send("Failed");
        }
    }
}