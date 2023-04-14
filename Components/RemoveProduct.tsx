import { useState } from "react"
import { View, Text, Button, Modal } from "react-native"
import Cart from "./Cart";

const Modals=()=>{
    const [modalVisible,setModalVisible] = useState(true);
    return(
        <>
        
        <Cart/>
        </>
    )
}

export default Modals;