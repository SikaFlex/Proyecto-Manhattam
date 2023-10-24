import { useEffect, useState } from "react"
import { Card } from "./Card"


export const ComprasPage = () => {
    
    const [productos, setproductos] = useState([])

    const fetchProductos = async () =>{
        try {
            
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setproductos(data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
      fetchProductos()
    
      return () => {
        
      }
    }, [])
    

  return (
<>
{productos.map(producto =>( 
    <Card key={producto.id} productos={producto}></Card>
))}
</>

)
}
