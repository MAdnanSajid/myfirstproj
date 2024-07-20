import { useEffect, useState } from "react";


const Navbar = () => {

    const [value, setValues] = useState(10);

    const setValues1 = () =>{
        setValues(200);
    }
    
    return (
        <div>
            True Values {value}
            <button onClick={setValues1}>press me</button>
        </div>
    )
}

export default Navbar;