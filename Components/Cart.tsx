import { View, Text, ScrollView, FlatList, Image, TouchableOpacity, Modal, Alert, Pressable, Button, StatusBar } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../src/redux/store";
import { removeToCart } from "../src/redux/slices/Counter";
import { useEffect, useState } from "react";


const Cart = ({ navigation }: any) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [deleteProduct, setDelete] = useState(false);

    const cartItem: any[] = useSelector((state: RootState) => state.CounterReducer.cartItem);
    const removeProudctDispatch = useDispatch();
    const [sum, setSum] = useState(0);

    useEffect(() => {
        var num = 0;
        for (let i = 0; i < cartItem.length; i++) {
            num = num + cartItem[i].price;
        }
        setSum(num);
    })


    const removeProduct = (item: any) => {

        setModalVisible(!modalVisible);


        if (deleteProduct) {

             removeProudctDispatch(removeToCart(item))
        }



    }
const increament=()=>{
    
}

    return (
        <View>
            <StatusBar animated={true} backgroundColor="green" showHideTransition="slide" barStyle="light-content" hidden={false} translucent={false} />


            <FlatList data={cartItem} renderItem={({ item }: any) => {
                return (
                    <>
                        <View>
                            <View style={{
                                width: '93%',
                                height: 175,
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                marginTop: 10,
                                borderRadius: 10,
                                elevation: 1,

                                alignSelf: "center",
                                flexDirection: "row",
                                margin: 10
                            }}>
                                <Image source={{ uri: item.images }} style={{ width: "30%", height: 100, borderRadius: 10 }} />
                                <View style={{ padding: 10,flexDirection:"row" }} >

                                    {/* <View style={{alignContent:"flex-end",flexDirection:"column"}}>
                                    <Text>Quty : {item.qty} 
                                    <TouchableOpacity onPress={increament}><Text style={{fontSize:60}}>-</Text></TouchableOpacity>
                                    <TouchableOpacity><Text style={{fontSize:60}}>+</Text></TouchableOpacity>
                                    </Text>
                                    </View> */}

                                    <View style={{}}>
                                    <Text style={{ fontSize: 18, fontWeight: "600", color: '#000', }}>{item.title}</Text>
                                        

                                    <Text style={{ fontSize: 18, fontWeight: "600", color: 'green', }}>{'₹' + item.price}</Text>
                                    <TouchableOpacity onPress={() => removeProduct(item)} style={{
                                        marginBottom: 10,
                                        backgroundColor: "green",
                                        alignItems: "center",
                                        borderRadius: 10,
                                        height: 27,
                                        justifyContent: "center",
                                        paddingRight: 10,
                                        paddingLeft: 10
                                    }}>

                                        <Text style={{ color: "white" }}>Remove </Text>



                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => navigation.navigate("Buy_Product")} style={{
                                        backgroundColor: "green",
                                        alignItems: "center",
                                        borderRadius: 10,
                                        height: 27,
                                        justifyContent: "center",
                                        paddingRight: 10,
                                        paddingLeft: 10,
                                        marginBottom: 10,
                                    }}>
                                        <Text style={{ color: "white" }}>Buy Now </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => navigation.navigate("Rating")} style={{
                                        backgroundColor: "green",
                                        alignItems: "center",
                                        
                                        borderRadius: 10,
                                        height: 27,
                                        justifyContent: "center",
                                        paddingRight: 10,
                                        paddingLeft: 10
                                    }}>
                                        <Text style={{ color: "white" }}>Rate Products</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                                        </View>
                    </>
                )
            }} />

            {modalVisible ? (<Modal
                transparent={true}
                visible={modalVisible}
            >
                <View style={{ backgroundColor: "black", flex: 1 }}>
                    <View style={{ backgroundColor: "#ffffff", margin: 50, padding: 40, borderRadius: 10, flex: 1 }}>
                        <Text>Do you want to Delete this Product </Text>


                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <Pressable onPress={() => { setDelete(true); setModalVisible(false) }} style={{ width: 100, borderRadius: 50, borderWidth: 1, justifyContent: "center", alignItems: "center", height: 30, marginTop: 200, backgroundColor: "red" }}>
                                <Text>Yes </Text>
                            </Pressable>

                            <Pressable onPress={() => { setDelete(false); setModalVisible(false) }} style={{ width: 100, borderRadius: 50, borderWidth: 1, justifyContent: "center", alignItems: "center", height: 30, marginTop: 200, backgroundColor: "green" }}>
                                <Text>NO</Text>
                            </Pressable>
                        </View>

                    </View>
                </View>

            </Modal>) : null}
            <ScrollView style={{ marginBottom: -100 }}>

                <View style={{
                    width: '92%',
                    height: 100,
                    borderWidth: 1,
                    backgroundColor: "#fff",
                    marginTop: 10,
                    borderRadius: 10,
                    elevation: 1,
                    alignSelf: "center",
                    flexDirection: "row",
                }}>

                    <Text style={{ fontSize: 18, fontWeight: "600", color: '#000', marginTop: 30, marginLeft: 10 }}>{'Total Amount : ₹' + sum} </Text>

                </View>
            </ScrollView>
        </View>



    )
}

export default Cart;

