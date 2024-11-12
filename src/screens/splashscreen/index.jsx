import {  StyleSheet,  View ,Text} from 'react-native';
import React from 'react';
const SplashScreen = () => {
  return (

    <View style={styles.Container}>
      <Text style={{fontSize:24,color:"white",fontWeight:"bold"}}>Calculate App</Text>
    </View>



  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#4CAF50"
  },
  Image: {
    width: 250,
    height:250,

  },
});
