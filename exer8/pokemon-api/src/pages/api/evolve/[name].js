export default async function handler(req, res) {
    if (req.method === "GET") {
        const SPECIES_URL = "https://pokeapi.co/api/v2/pokemon-species/";
        const { name } = req.query;

        const speciesResponse = await fetch(SPECIES_URL + name);
        try {
            const speciesData = await speciesResponse.json();
            const CHAIN_URL = speciesData.evolution_chain.url;

            const chainReponse = await fetch(CHAIN_URL);
            const chainData = await chainReponse.json();

            const nextEvolutions = chainData.chain.evolves_to;

            if (nextEvolutions.length !== 0) {
                res.status(200).json({ next: nextEvolutions[0].species.name });
            } else {
                res.status(200).json({ next: chainData.chain.species.name });
            }
        } catch (e) {
            res.status(400).json({ error: "no such pokemon exists"});
        }
    }
}