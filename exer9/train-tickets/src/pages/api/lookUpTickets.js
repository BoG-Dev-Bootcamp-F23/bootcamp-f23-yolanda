import readTicketsByUser from "../../../server/mongodb/actions/readTicketsByUser";

export default async function lookUpTickets(req, res) {
    if (req.method === "GET") {
        try {
            const result = await readTicketsByUser(req.query);
            return (result.length > 0 ? res.status(200).send(result) : res.status(400).send("User Not Found"));
        } catch (e) {
            return res.status(500).send("Failed");
        }
    }
}