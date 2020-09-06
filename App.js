import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Create from './src/screens/Create';
import Update from './src/screens/Update';
import login from './src/screens/login';
import signUp from './src/screens/Signup';
import Signup from './src/screens/Signup';

const Stack = createStackNavigator();

export default function App() {

  const [user,setUser]=useState(null);


  
  return (
    <NavigationContainer>
    <View style={{flex:1}}>
    <Stack.Navigator>
       {user ? (
        <> <Stack.Screen name="Home" component={Home}/>
           <Stack.Screen name="Create" component={Create}/>
           <Stack.Screen name="Update" component={Update}/>
        </>

       )  :  (
        <> 
          <Stack.Screen name="Login" component={login} options={{headerShown:false}}/>
          <Stack.Screen name="Signup" component={Signup}/>
        </>
       )}
      
     </Stack.Navigator>
    </View>
   
    
 
     

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    justifyContent:"center",
    alignItems:"center"
  }

})
