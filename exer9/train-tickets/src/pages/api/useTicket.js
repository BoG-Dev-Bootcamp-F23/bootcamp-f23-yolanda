import deleteTicket from "../../../server/mongodb/actions/deleteTicket";

export default async function lookUpTickets(req, res) {
    if (req.method === "DELETE") {
        try {
            const result = await deleteTicket(req.query);
            return (result ? res.status(200).send("Success"): res.status(400).send("Ticket Not Found"));
        } catch (e) {
            return res.status(500).send("Failed");
        }
    }
}