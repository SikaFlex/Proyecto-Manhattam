export const fetchData = async(endpoint) => {
    try{
        //hace la query a la api
        const response = await fetch (`https://jsonplaceholder.typicode.com/${endpoint}`)
        //la espera y la convierte en un json
        const data =  await response.json()
        
      return{
        //devuelve data y cambia el estado de isloading a falso.
        data,
        isLoading: false
      }
   
    }catch(error){
        console.error(error)
    }
}
