import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Games from "../components/Games"

const Shop = (props) => {
    const [loaded, setLoaded] = useState(false)
    const [userGames,setGames] = useState([])

    useEffect(() => {
        listGames()
            // console.log(loaded)
            // console.log(games)
    },[])
    
    const listGames = () => {
        axios.get('http://localhost:8000/api/user/findone')
            .then(user =>{
                
                console.log(user.data.results.games);
                setGames(user.data.results.games)

                setLoaded(true);

            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <p>SHOP</p>
            <Link to="/"><p>X</p></Link>
            {/* {
                loaded &&
                userGames.map((item,i) =>{
                    return <Games key={i} name={item.name}/>
                })
            } */}
        </div>
    );
};

export default Shop;