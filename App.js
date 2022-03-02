import React,{useState} from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import SearchSite from "./screens/SearchSite";
import DisplaySite from "./screens/DisplaySite";
import Page3 from "./screens/Page3";
import Login from "./screens/Login";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();



export default function App() {

  const [stateLogin, setStateLogin] = useState(false);

  console.log(stateLogin)
 
  const login=() =>{
   console.log(stateLogin)
 
    setStateLogin(true);
  }
   
    if (stateLogin === false) {
     console.log(stateLogin)
 
      return <Login onLogin={login} />
    }




  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
          initialRouteName="SearchSite"
          screenOptions={{
            tabBarActiveTintColor: '#222CD8'}}>

        <Tab.Screen name="Recherche" component={SearchSite}
         options={{
          tabBarLabel: 'Recherche',
          tabBarIcon: ({color, size }) => (
        //<MaterialCommunityIcons name="home" color={color} size={size}  />
          <AntDesign name="search1" size={size} color={color} />
          )
    }} />
        <Tab.Screen name="Afficher" component={DisplaySite}
         options={{
          tabBarLabel: 'Afficher',
          tabBarIcon: ({color, size }) => (
        //<MaterialCommunityIcons name="home" color={color} size={size}  />
          <Entypo name="browser" size={size} color={color} />
          )
    }} />   

        <Tab.Screen name="Reglages" component={Page3}
         options={{
          tabBarLabel: 'Reglages',
          tabBarIcon: ({color, size }) => (
        //<MaterialCommunityIcons name="home" color={color} size={size}  />
          <AntDesign name="setting" size={size} color={color} />
          )
    }} />
      
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
