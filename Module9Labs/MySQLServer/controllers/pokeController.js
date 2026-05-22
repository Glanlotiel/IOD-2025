const axios = require("axios");

const getPokemon = async (name, res) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        res.send({ result: 200, data: response.data })
    } catch (err) {
        res.send ({ result: 500, error: err.message})
    }
}

module.exports = { getPokemon }