import {useState} from "react";

export default function SideBar(key){
    const [sideBarText, setSideBartext] = useState("");
    try{
        if(key == "n1"){
            setSideBartext("hello this is node 1");
        }
    }catch(error){
        console.log(error)
    }

    return(
        <p>HellWorld</p>
    )
}