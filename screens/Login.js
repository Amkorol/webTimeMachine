import React, {useState} from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet,TouchableOpacity } from 'react-native';


export default function Login(props) {

    const [mail,setMail] = useState("");
    const [pass,setPass] = useState("");

    const checkLogin = () =>{
        if (mail!= "" && pass!=""){
            props.onLogin()};
        }
    
    

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>CONNEXION</Text>
        <TextInput  style={styles.input}
            placeholder="mail"
            onChangeText={setMail}
            value={mail}
         />
        <TextInput  style={styles.input}
            placeholder="mot de passe"
            onChangeText={setPass}
            value={pass}
            secureTextEntry={true}
        />
    <TouchableOpacity style={styles.loginButton} onPress ={checkLogin}>
        <Text style={styles.loginButtonText}>Se connecter</Text>
    </TouchableOpacity> 
    
   </SafeAreaView>
   )

 }

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: '#D35400',
        marginBottom: 20,
      },
      loginButton: {
        marginTop: 20,
        padding: 10,
        borderWidth: 2,
        borderColor: '#D35400',
        backgroundColor: 'transparent',
      },
      loginButtonText: {
        color: '#D35400',
      },

  });