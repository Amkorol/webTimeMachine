import React,{useState} from 'react';
import {View, Button,Text, StyleSheet} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { WebView } from 'react-native-webview';

export default function DisplaySite({route,navigation}) {

    const [result, setResult] = useState(null);

    const _handlePressButtonAsync = async () => {
      let result = await WebBrowser.openBrowserAsync(route.params.archived_snapshots.closest.url);
      console.log(result);
      setResult(result);
    };
    return (
      <View style={styles.container}>
        <Button title="Open WebBrowser" onPress={_handlePressButtonAsync} />
        
        <WebView 
      style={styles.container}
      source={route.params.archived_snapshots.closest.url}/>

        <Text>{result && JSON.stringify(result)}</Text>
      </View>
    );

    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
        //  justifyContent: 'center',
        },
    })