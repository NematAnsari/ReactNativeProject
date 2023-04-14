import {View,Text, ScrollView} from "react-native"
import { useSelector } from "react-redux";
import { RootState } from "../src/redux/store";
const Order =()=>{

    const order = useSelector((state:RootState)=>state.CounterReducer.order);
    console.log("order",order);
    return(
       <ScrollView>
        <View>
          {order.map((orders)=><Text key={orders.name}>{orders.name}</Text>)}
        </View>
       </ScrollView>
    )
}
export default Order;