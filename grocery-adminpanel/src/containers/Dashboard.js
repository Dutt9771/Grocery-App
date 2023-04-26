import { useEffect } from "react";
import Header from "../components/Layout/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";


export default function Dashboard({children}) {
    const [token,setToken]=useState(false)
    useEffect(() => {
        if(!sessionStorage.getItem('token')){
            setToken(false);
            navigate('/')
        }else{
            setToken(true);
        }
    },[])

  const navigate=useNavigate();


    return (
       <>
       <div>
        <Toaster />
      </div>
       {
        token?
           <Header children={children} />
           : null
       }
       </>
    );
}
