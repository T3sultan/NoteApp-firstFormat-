import React, { useState } from 'react'
import { StyleSheet, Text, View, Image,Alert, ActivityIndicator } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Button from '../components/Button';
import {firebase} from '../firebase/config.js'

export default function login({navigation}) {
    const [email, setEmail]=useState(null);
    const [password, setPassword]=useState(null);
    const [loading,setLoading]=useState(false)
    const login=()=>{
        if(!email || !password){
            return Alert.alert("Error","You need to fill up all condition",[{text:"Ok",onPress:()=>{

            }}])
        }
        setLoading(true);


        firebase.auth().signInWithEmailAndPassword(email,password).then((res)=>{
            console.log("res",res);
            setLoading(false);
            navigation.navigate("Home")
        })
        .catch((error)=>{
            console.log("err",error);
            alert(error);
            setLoading(false) 
        })
        
    };
    return (
        <View style={{flex:1,backgroundColor:"#fff"}}>
           <View style={{alignSelf:"center",margin:150}}>
               <Image source={require("../../assets/favicon.png")}/>
           </View>
           <View style={styles.form}>
               <TextInput onChangeText={(text)=>setEmail(text)} placeholder="Email" style={styles.input} autoCapitalize="none"/>
               <TextInput onChangeText={(text)=>setPassword(text)} placeholder="Password" style={styles.input} />

               {loading ? (<ActivityIndicator/>):(
                <Button onPress={login} title="LOGIN" backgroundColor="blue"/>)
               }

               
           </View>
           <View style={styles.signUpView}>

               <TouchableOpacity onPress={()=>navigation.navigate("Signup")}
               style={{padding:20}}>
                   <Text style={{fontSize:16}}>
                       Don't have an account?<Text style={{color:"blue",fontWeight:"bold"}}>Sign up</Text>
                   </Text>
               </TouchableOpacity>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        marginHorizontal:40,
        marginTop:40
    },
    input:{
        height:40,
        borderColor:"#ddd",
        borderEndWidth:1,
        marginBottom:20
    },
    signUpView:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"

    }
   
})
