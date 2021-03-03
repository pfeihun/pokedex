
export async function catchPokemon(url){
    return new Promise(( resolve ) => {
        fetch(url)
            .then()
            .then(result => result.json())
            .then(data => {
               resolve(data); 
            })
            .catch((error)=>{console.log(error)})
    })
}


export async function getPoke(url){
    return new Promise(( resolve) => {
       fetch(url)
       .then(result => result.json())
       .then(data => {
          resolve(data);
       })
       .catch((error)=>{console.log(error)})    
    })
}