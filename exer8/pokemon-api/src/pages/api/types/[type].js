export default async function handler(req, res) {
    if (req.method === "GET") {
        const URL = `https://pokeapi.co/api/v2/type/`;
        const { type } = req.query;

        const response = await fetch(URL + type);
        try {
            const data = await response.json();
            const pokeList = data.pokemon.map((entry) => entry.pokemon.name);

            res.status(200).json({ pokemon: pokeList })
        } catch (e) {
            res.status(400).json({ error: "no pokemon of this type exist"});
        }

    }
}