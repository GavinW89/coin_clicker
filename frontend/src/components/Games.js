import { useEffect } from "react";
import axios from "axios";

export default props => {
    const {name, level, output, multiplier} = props;

    return(
        <div>
            <h1>{name}</h1>
        </div>
    )
}