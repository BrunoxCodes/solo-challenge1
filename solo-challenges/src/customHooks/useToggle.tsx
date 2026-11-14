import { useState } from "react";

export default function useToggle() {
    const [toggled,setToggled] = useState(true)

    const handleToggle = () =>{
        setToggled(prev => !prev)
    }

    return{toggled,handleToggle}
};