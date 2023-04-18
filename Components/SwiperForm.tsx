import { ActivityIndicator, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRef, useState } from 'react'
import Swiper from 'react-native-swiper'
import { Formik } from 'formik'



const SwiperForm = () => {
    const [set,settest] = useState(true)
    const [last,setLast] = useState(false);
    const pagination=(index:any,total:any,context:any)=>{
               
               if(index===total-1){
                 setLast(true)
               }
               if(index===0){
                settest(true)
               }
        return (
            <View><Text></Text></View>
        )
    }

    const swiper = useRef<any>(null);
    const Next=()=>{
        
        swiper.current.scrollBy(1,true)
    }
    const Back =()=>{
swiper.current.scrollBy(-1,true);
    }

    return (
        <Formik
            initialValues={{ name: "", email: "", age: "" }}
            onSubmit={values => console.log(values)}>


            {({ handleBlur,handleChange,errors,values,touched,handleSubmit}) => (
                <Swiper  ref={swiper} style={styles.wrapper}    renderPagination={pagination} loop={false} showsPagination={false} >

                <View style={{ marginTop: 160 }}>
                    <TextInput onBlur={handleBlur("name")} onChangeText={handleChange("name")} placeholder='Enter Name' style={{ borderWidth: 1, borderRadius: 10, margin: 20 }} />
                    <Button title="Next"  onPress={Next}/>
                    <Button title='Back' disabled={set?true:false}/>
                </View>

                <View style={{ marginTop: 160 }}>
                
                    <TextInput placeholder='Enter Email' onChangeText={handleChange("email")}  style={{ borderWidth: 1, borderRadius: 10, margin: 20 }} />
                    <Button title="Next" onPress={Next} />
                    <Button title='Back' onPress={Back} />
                </View>

                <View style={{ marginTop: 160 }}>
                    
                    <TextInput placeholder='Enter Age' onChangeText={handleChange("age")} style={{ borderWidth: 1, borderRadius: 10, margin: 20 }} />
                    <Button title="Submit" onPress={handleSubmit} />
                    
                    <Button title='Back'  onPress={Back}/>
                </View>
            </Swiper>
                
            )}

            

        </Formik>
    )
}



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


export default SwiperForm;