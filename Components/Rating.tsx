import { useState } from "react";
import { Alert, StyleSheet, Text,View } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';


const Ratings=()=>{
      const [ratingss,setRagings]  = useState('');



      const completeRating=(rating:any)=>{
       setRagings(rating);
        // console.warn(rating);
  }

  const getFeedBack=()=>{
    Alert.alert(ratingss.toString());
    // console.log(ratingss)
  }
    return(
        <View>
            <Text>Rating Component </Text>
            {/* <AirbnbRating reviews={["Normal","Good","Bad","Better","Faboulous","Supermost","hilarious"]} 
            count={7}
            size={40}
            defaultRating={2}  
            selectedColor="red"     

           reviewColor="blue"
           reviewSize={30}
           showRating={true}
            isDisabled={false}
            // starContainerStyle={{backgroundColor:"green"}}
            // ratingContainerStyle={{backgroundColor:"orange"}}
            // starImage={require("../Components/assets/Icon.png")}
            onFinishRating={(rating)=>console.log(rating)}
            
            /> */}


            <Rating  showRating={true} 
            type="custom" 
            
            onFinishRating={completeRating}
            ratingCount={5}
            
            imageSize={60}
            startingValue={4}
        
            fractions={1}
            jumpValue={0.5}
            />
            <View style={{borderWidth:1,margin:40, padding:7,backgroundColor:"green",borderColor:"black",borderBottomWidth:5,borderTopWidth:5}}>
                <Text style={{textAlign:"center",color:"white"}} onPress={getFeedBack}>Give Feedback </Text>
            </View>
        </View>
    )
}

export default Ratings;