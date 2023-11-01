export default async function handler(req, res) {
    if (req.method === "POST") {
        const URL = `https://pokeapi.co/api/v2/pokemon/`;
        const { pokemon1, pokemon2 } = req.body;

        const response1 = await fetch(URL + pokemon1);
        const response2 = await fetch(URL + pokemon2);
        try {
            const data1 = await response1.json();
            const data2 = await response2.json();

            const baseStat1 = data1.stats[0].base_stat;
            const baseStat2 = data2.stats[0].base_stat;
            if (baseStat1 === baseStat2) {
                res.status(200).json( { winner: "tie" } );
            } else {
                res.status(200).json({ winner: (baseStat1 > baseStat2 ? data1.name : data2.name) });
            }
        } catch (e) {
            res.status(400).json({ error: "no such pokemon exist" });
        }
    }
}