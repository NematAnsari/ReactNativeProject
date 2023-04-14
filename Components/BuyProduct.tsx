import { Formik } from "formik";
import { useState } from "react";
import { initialValuesTypes } from "./Types";
import * as Yup from "yup";
import { order } from "../src/redux/slices/Counter";
import { useDispatch } from "react-redux";
import { View, Text, Pressable, TextInput, ScrollView, TouchableOpacity, Button, StyleSheet } from "react-native";
const BuyProduct = ({navigation}:any) => {

      const dispatch = useDispatch();
    const initialValues: initialValuesTypes = {
        name: "",
        email: "",
        contact: "",
        zipcode: "",
        city: "",
        landmark: "",
        address: ""
    }
    const [input, setInput] = useState([""]);
    const handleAdd = () => {
        const newInputs = [...input];
        newInputs.push("");

        setInput(newInputs);

    }

    const handleRemove = (index: any) => {
        const newInputs = [...input];
        newInputs.splice(index, 1);
        setInput(newInputs);
    }
    const handleChange = (text: any, index: any) => {
        const newInputs = [...input];
        newInputs[index] = text;
        setInput(newInputs);
        console.log(input)
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short Name").max(15, "Too Long Name").required("Name Field is Required"),
        email: Yup.string().email("Invalid Email").required("Email address Required"),
        contact: Yup.string().min(3, "Too Short").max(10, "Too Long").required("Number Required"),
        zipcode: Yup.string().min(3, "Too Short").max(6, "Too large").required("Required"),
        city: Yup.string().min(4, "Too Short City").max(15, "Too Long City").required("City Field is Required"),
        landmark: Yup.string().min(4, "Too Short landmark").max(15, "Too Long landmark").required("landmark Field is Required"),
        address: Yup.string().min(4, "Too Short address").max(50, "Too Long address").required("address Field is Required"),
    })
    const handleSubmits=(values:initialValuesTypes)=>{
               console.log(JSON.stringify(values));
               dispatch(order(values));
               navigation.navigate("OrderHistory");
    }
    

    return (
        <View style={{ flex: 1 }}>


            {/* Dynamic Button  */}

            {/* <View style={{marginBottom:10}}>
                {input.map((input, index) => <View key={index}>
                    <TextInput
                    style={{borderWidth:1,margin:10,borderRadius:20}}
                     value={input}
                     placeholder="Enter Someting"
                      onChangeText={text => handleChange(text, index)
                    
                    } 
                      />
                      <Button title="Remove" onPress={()=>handleRemove(index)}/>
                </View>)}
                      <Button title="Add" onPress={handleAdd}/>
            </View> */}
 
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={values=>{handleSubmits(values)}}
            >
                {({ handleBlur,handleChange,handleSubmit, errors, values, setFieldValue, touched, }) => (
                    <ScrollView>
                        <View style={styles.input}>
                            <TextInput placeholder="Enter Contact Person's Name"
                                keyboardType="default"
                                onBlur={handleBlur("name")}
                                onChangeText={handleChange("name")}
                                value={values.name}
                                style={styles.TextInput}
                            />

                        </View>
                              {touched.name && errors.name && (<Text style={{marginLeft:15,color:"red"}}>{"*"+errors.name}</Text>)}
                        <View style={styles.input}>
                            <TextInput style={styles.TextInput}
                                placeholder="Email Address"
                                keyboardType="email-address"
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}
                               value={values.email}

                            />
                        </View>
                        {touched.email && errors.email && (<Text style={{marginLeft:15,color:"red"}}>{"*"+errors.email}</Text>)}

                        <View style={styles.input}>
                            <TextInput style={styles.TextInput}
                             placeholder="Contact Number"
                              keyboardType="numeric" 
                              onChangeText={handleChange("contact")}
                              value={values.contact}

                               />
                        </View>
                        {touched.contact && errors.contact && (<Text style={{marginLeft:15,color:"red"}}>{"*"+errors.contact}</Text>)}

                        <View style={styles.input}>
                            <TextInput style={styles.TextInput}
                             placeholder="Zip code "
                              keyboardType="numeric" 
                              onBlur={handleBlur("zipcode")}
                               onChangeText={handleChange("zipcode")}
                               value={values.zipcode}

                                />
                        </View>
                        {touched.zipcode && errors.zipcode && (<Text style={{marginLeft:15,color:"red"}}>{"*"+errors.zipcode}</Text>)}

                        <View style={styles.input}>
                            <TextInput style={styles.TextInput} 
                            placeholder="City" 
                            keyboardType="default"
                             onBlur={handleBlur("city")}
                              onChangeText={handleChange("city")}
                              value={values.city}

                               />
                        </View>
                        {touched.city && errors.city && (<Text style={{marginLeft:15,color:"red"}}>{"*"+errors.city}</Text>)}

                        <View style={styles.input}>
                            <TextInput style={styles.TextInput}
                             keyboardType="default"
                              placeholder="House Number Street Village "
                               onBlur={handleBlur("address")} 
                               onChangeText={handleChange("address")}
                               value={values.address}

                                />
                        </View>
                        {touched.address && errors.address && (<Text style={{marginLeft:15,color:"red"}}>{"*"+errors.address}</Text>)}
                        <View style={styles.input}>
                            <TextInput style={styles.TextInput}
                             placeholder="Landmark"
                              keyboardType="default"
                               onBlur={handleBlur("landmark")}
                               onChangeText={handleChange("landmark")}
                               value={values.landmark}
                               
                                />
                        </View>

                        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                            <Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>Next to Payment </Text>
                        </TouchableOpacity>
                    </ScrollView>
                )}

            </Formik>

        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 20,
        margin: 13,
        borderColor: "green",
        backgroundColor: "white",
        marginBottom: 5,
    },
    TextInput: {
        color: "black",
        fontWeight: "bold",
        fontFamily: "tahoma"
    },
    btn: {
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 20,
        backgroundColor: "green",
        margin: 13,
        padding: 13,


    }
})

export default BuyProduct;