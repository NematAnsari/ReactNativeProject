import { View, Text, Button, ScrollView, TouchableOpacity, FlatList } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { countInc, countDec, addToCart } from "./src/redux/slices/Counter";
import type { RootState } from "./src/redux/store";
import type { AppDispatch } from "./src/redux/store";
import { ICounterState } from "./src/redux/slices/Counter";
import { fetchUserData } from "./src/redux/API/user";
import { useEffect } from "react";

const UI = () => {
    
    useEffect(() => {
       UserData();
        
    }, []);

    const UserData=async()=>{
        await Dispatch1(fetchUserData());
        
    }
    const Name = useSelector((state: RootState) => state.CounterReducer.Name);
    console.log(JSON.stringify(Name));
    const value = useSelector((state: RootState) => state.CounterReducer.count);
    const Dispatch = useDispatch();
    const Dispatch1 = useDispatch<any>();

    const disp = (item: any) => {
        console.log("item data:", item);

        const obj = {
            count: 5,
            Name: [],

        }
        Dispatch(addToCart(item))


    }
    return (
        <>
            <View>
                <Text>
                    UI Will dipslay
                </Text>
                <Text>{value}</Text>

                {/* <ScrollView> */}

                {/* {Name.length? Name.map((item:any,index:number)=>
                <View style={{flex:1,flexDirection:"row",marginLeft:4}}>
                    <Text key={index}>{item[index].title}</Text>
                    {/* <Text key={index}>{item[index].id}</Text> */}
                {/* <TouchableOpacity onPress={()=>disp(item[index])}><Text style={{borderWidth:1,borderColor:"red",padding:10,marginLeft:100}}>Add to Cart </Text></TouchableOpacity> */}
                {/* </View>)  :<View><Text></Text></View>} */}

                {/* </ScrollView> */}

                <FlatList data={Name} renderItem={({ item }) => {

                    return (
                        <View>
                            {/* <Text>{item.title}</Text>
                            <Text>{item.description}</Text>
                            <Text>{item.price}</Text> */}
                        </View>
                    )
                }} />




                <Button title="click me" onPress={disp} />
                {/* <Button title="click thunk" onPress={thunk} /> */}
            </View>
        </>
    )
}

export default UI;
