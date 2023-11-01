export default async function handler(req, res) {
    if (req.method === "GET") {
        const URL = `https://pokeapi.co/api/v2/pokemon/`;
        const { name } = req.query;

        const response = await fetch(URL + name);
        try {
            const data = await response.json();
            const pokeName = data.name;
            const pokeSprite = data.sprites.front_default;
            const pokeTypes = data.types.map((entry) => entry.type.name);

            res.status(200).json({ name: pokeName, sprite: pokeSprite, types: pokeTypes })
        } catch (e) {
            res.status(400).json({ error: "no such pokemon exists"});
        }
    }
}