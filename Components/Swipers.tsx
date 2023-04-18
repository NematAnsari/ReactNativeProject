
import {  ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'

import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

    const Swipers =()=>{
        const pagination=(index:any,total:any,context:any)=>{
            return <Text>{index+1  +'/'+total}</Text>
            
        }
    return (
      <Swiper style={styles.wrapper} showsButtons={true} showsPagination={true} renderPagination={pagination}
      
      >
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={[styles.slide3,{}]}>
          <Text style={styles.text}>And simple</Text>
          {/* <Image source={{uri:"https://i.dummyjson.com/data/products/1/1.jpg"}}/> */}
        </View>
      </Swiper>
    )
  }
  export default Swipers;

/*
showButtons={true} display toggle button 
autoplay={true} swiper move automatically
loop={false} disable continous loop mode 
index={0}; default 0 set the swiper first 
horizontal : true :it swipe from left to right : false : bottom to top
onIndexChanged={()=>console.log(....)} on Swiper move from one to another
width and height can set 
containerStyle={{styling}}
loadMinimalLoader={<ActivityIndicator/>>}


/pagination : 
showPagination={true}
renderPagination={()=>pagination(index,total,context)=>return {<text>{index+1+"/"+total</text>}}

dot={<View style={{width:10,height:10,backgroundColor:"red",borderRadius:5,margin:4}}
 activeDot={<View style={{width:10,height:10,borderRadius:5, backgroundColor:"green"}}></View>}
dotColor='orange'
dotStyle={{backgroundColor:"blue"}}
activeDotColor="string"
activeDotStyle="object"

autoplay={true} 
autoplayTimeout={0.4}
autoplayDirection={false}
*/

// buttonWrapperStyle={{backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', top: 0, left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center'}}
//       nextButton={<View style={{width:200}}></View>}
//       prevButton={<Text style={{backgroundColor:"red"}}></Text>}





// -------------------------
// import { Text,View } from "react-native";

// const Swipers =()=>{
//     return(
//         <View>
//             <Text> Hello </Text>
//         </View>
//     )
// }

// export default Swipers;