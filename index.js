const baseURL = 'https://pokeapi.co/api/v2/pokemon'

const getPokemons = async () => {
    try {
        const response = await fetch(baseURL);
        const result = await response.json();

        console.log(result.results)
    } catch (error) {
        alert('Error', error)
    }
}

getPokemons()




const baseName = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod']

const pokemons = async () => { baseName.map(name => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            return json
        })
})
};

pokemons()




const promise_1 = fetch(`${baseURL}/1`).then(item => item.json());
const promise_2 = fetch(`${baseURL}/2`).then(item => item.json());
const promise_3 = fetch(`${baseURL}/3`).then(item => item.json());

const getPokemon = async () => {
    try {
        const responses = await Promise.allSettled([promise_1, promise_2, promise_3])

        const filteredResponse = responses.reduce((accumulator, {status, value}) => {
            if (status === 'fulfilled') {
                accumulator.push(value)
            }
            return accumulator
        }, [])
        console.log(filteredResponse)

    } catch (error) {
        console.log('Error', error.message)
    } 
}

getPokemon();








