import readTicketsByUser from "../../../server/mongodb/actions/readTicketsByUser";
import User from "../../../server/mongodb/models/User";

export default async function lookUpTickets(req, res) {
    if (req.method === "GET") {
        try {
            const { userId } = req.query;
            const userExists = await User.findById(userId);
            if (!userExists) {
                return res.status(400).send("User Not Found");
            }

            const result = await readTicketsByUser(req.query);
            return res.status(200).send(result);
        } catch (e) {
            return res.status(500).send("Failed");
        }
    }
}