import React from 'react';
import { StyleSheet, Text, View, Platform , Image} from 'react-native';
import { Button } from 'native-base';
import myBackground from './assets/landing.jpg'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Image style={styles.imageStyle} source={myBackground} />
        <Button><Text>Submit</Text></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.os === 'android' ? 25 : 50,
  },
  imageStyle:{
    width: '100%'
  }
});
