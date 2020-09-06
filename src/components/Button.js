import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Button({icon,title,backgroundColor,onPress}) {
    return (
       <TouchableOpacity onPress={onPress} style={[styles.container,{backgroundColor}]}>
       <Image source={icon}/>
       <Text style={styles.btnText}>{title}</Text>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height:50,
        flexDirection:"row",
        alignItems:"center",
        
        borderRadius:50,
        paddingHorizontal:25,
        justifyContent:'center',
        marginTop:30

    },
    btnText:{
        fontSize:16,
        fontWeight:"500",
        
        color:"white",
        // marginLeft:8,
    }
})
