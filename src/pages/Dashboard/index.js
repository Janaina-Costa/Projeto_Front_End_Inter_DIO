import Text from "../../components/Text"
import { useEffect, useState } from "react"
import api from "../../services/api"


const Dashboard = () =>{
    const [pokemon, setPokemon] = useState([])


    useEffect(()=>{
       const getItems = async()=>{
          const {data} =  await api.get('/pokemon')
          
          const resp = await Promise.all(data.results.map((item)=>api.get(item.url)))
          console.log(resp)
          
          const format = resp.map((req)=>req.data)
          setPokemon(format)
          console.log('format',format);

       }
       getItems()
    },[])

    console.log('Pokemon', pokemon);

    return(
        <div>
            <Text as= 'h1' >Dashboard</Text>
            <Text >Descrição</Text>

            {
               pokemon.length> 0 && pokemon.map((item)=>(
                    <div key={item.id}>
                        {item.name}
                        <img src={item.sprites.front_default} alt={item.name} />
                        
                    </div>
               ))
            }
        </div>
    )
}

export default Dashboard