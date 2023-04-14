import {View,Text, ScrollView} from "react-native"
import { useSelector } from "react-redux";
import { RootState } from "../src/redux/store";
const Order =()=>{

    const order = useSelector((state:RootState)=>state.CounterReducer.order);
    console.log("order",order);
    return(
       <ScrollView>
        <View>
          {order.map((orders)=>
          <View>

          <Text key={orders.name}>{orders.name}</Text>
          <Text key={orders.price}>{orders.price}</Text>
          </View>
          
          )}
        </View>
       </ScrollView>
    )
}
export default Order;