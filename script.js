// let a = prompt("Enter First Number")
// let b = prompt("Enter Second Number")

// let sum = parseInt(a) + parseInt(b)

// if (isNaN(a) || isNaN(b)) {
//     throw SyntaxError ("Sorry this is not allowed")
// }

// try {
// console.log(`The sum is ${sum*x}`)
// }

// catch(error) {
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)
// }

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then((res)=>{
//     if(!res.ok) {
//         throw new Error ("could not fetch resource") ;
//     }
//     return res.json()
// })
// .then((data)=> {
//     console.log(data.name)
//     console.log(data.weight)
//     console.log(data.id)
// })
// .catch((error) => console.log(error))


const btn = document.getElementById("btn")
btn.addEventListener ("click", ()=>{
    fetchData();
})

async function fetchData () {
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase()
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!response.ok){
            throw new Error ("Could not fetch resource")
        }
        const data = await response.json()
        const pokemonSprite = data.sprites.front_default

        const img = document.getElementById("pokemonSprite")
        img.src = pokemonSprite
        img.style.display = "block"
    }
    catch (error) {
        console.log(error)
    }
}

// fetchData("pikachu")
// fetchData("typhlosion")
// fetchData("spongebob")