import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import type { RootState } from "../src/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../src/redux/slices/Counter";

const Product = ({navigation}:any) => {
    const count = useSelector((state: RootState) => state.CounterReducer.count);
    const dispatchProduct = useDispatch();
    const proudcts = [
        {
            id: 1,
            title: "iPhone 9",
            price: 549,
            qty: 0,
            images: "https://i.dummyjson.com/data/products/1/1.jpg",
        },
        {
            id: 2,
            title: "iPhone X",
            price: 899,
            qty: 0,
            images:
                "https://i.dummyjson.com/data/products/2/1.jpg",

        },
        {
            id: 3,
            title: "Samsung Universe 9",
            price: 1249,
            qty: 0,
            images:
                "https://i.dummyjson.com/data/products/3/1.jpg"

        },
        {
            id: 4,
            title: "OPPOF19",
            price: 280,
            qty: 0,
             images:
                "https://i.dummyjson.com/data/products/4/1.jpg",

        },
        {
            id: 5,
            title: "Huawei P30",
            price: 499,
            qty: 0,
            images:
                "https://i.dummyjson.com/data/products/5/1.jpg",

        }
    ]
    const addtoCarts=(item:any)=>{

                 dispatchProduct(addToCart(item));

    }

    return (

        <View style={{ flex: 1 }}>

            <View 
                  style={{ 
                    width: "100%", 
                    height: 60, 
                    flexDirection: "row", 
                    alignItems: "center", 
                    paddingLeft: 20, 
                
                    backgroundColor: "#fff",
                     elevation: 1 }}>

                <Text style={{ color: "#000", fontSize: 16, fontWeight: '700' }}>
                    Redux Tool Kit</Text>

            <TouchableOpacity onPress={()=>navigation.navigate("Cart")}>
                <Text style={{
            
                    alignItems:"flex-end",
                    marginLeft:200
                     ,borderWidth:2,
                     borderColor:"black",
                     borderRadius:30,
                     width:40,
                     backgroundColor:"black",
                     color:"white",
                     
                     

                     
                     }}> {count} </Text>
            </TouchableOpacity >
            </View>

            <FlatList data={proudcts} renderItem={({ item }) => {
                return (
                    <View style={{ 
                        width: '92%',
                         height: 120,
                         borderWidth:1,
                          backgroundColor: "#fff",
                     marginTop: 10,
                      borderRadius: 10,
                       elevation: 1, 

                       alignSelf: "center",
                       flexDirection:"row",
                       margin:10
                       }}>

                        <Image source={{ uri: item.images }} style={{ width: "30%", height: 100, borderRadius: 10 }} />
                        <View style={{padding:10}}>
                            <Text style={{fontSize:18,fontWeight:"600",color:'#000',}}>{item.title}</Text>
                            <Text style={{fontSize:18,fontWeight:"600",color:'green',}}>{'₹'+item.price}</Text>
                              <TouchableOpacity onPress={()=>addtoCarts(item)} style={{
                                backgroundColor:"green",
                                alignItems:"center",
                                borderRadius:10,
                                height:27,
                                justifyContent:"center",
                                paddingRight:10,
                                paddingLeft:10
                                }}>

                               <Text style={{color:"white"}}>Add to Cart </Text>
                            </TouchableOpacity>
                         </View>
                       
                    </View>
                )

            }} />

        </View>

    )
}

export default Product;