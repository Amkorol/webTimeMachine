import React, {useState,useEffect} from 'react';
import {View, Button,Platform, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function SearchSite({navigation}) {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [siteweb,setSiteWeb] = useState({});
    const [site, setSite] = useState("");
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };

    const timestamp = new Date(date).toISOString().replaceAll(/[\/-\s,:T]/g, "").split(".")[0];

    // useEffect(() => {
    //   getSite();
    // }, []);
   
   const getSite = async() => {
     try {
       const response = await fetch("http://archive.org/wayback/available?url="+site+"&timestamp="+timestamp);
       console.log(response);
       const data = await response.json();
       console.log(data);
       setSiteWeb(data);
       console.log(siteweb);
       // Don't do this
navigation.navigate('Afficher',data);
     }
     catch(e) {
       console.log(e);
     }
   }
   
    
    return (
    
<SafeAreaView style={styles.container}>
    <Text style={styles.text}>Entrez ardesse de site web</Text>
        <TextInput  style={styles.input}
            placeholder="site web"
            onChangeText={setSite}
            value={site}
         />
        <View>
          <Button onPress={showDatepicker} title="Choisissez la date!" />
        </View>
        
        
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        

    <TouchableOpacity style={styles.loginButton} onPress ={getSite}>

        <Text style={styles.loginButtonText}>Rechercher le site</Text>
    </TouchableOpacity> 

<Text>{siteweb.url}</Text>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //  alignItems: 'center',
     // justifyContent: 'center',
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





