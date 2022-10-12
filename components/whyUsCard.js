import * as React from 'react';
import { View, Text,Image } from 'react-native';
import AppBar from '../components/appHeader';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { useFonts } from 'expo-font';

function WhyUsCard(props) {


   const [fontsLoaded] = useFonts({
        "Comforter": require('../assets/fonts/ComforterBrush-Regular.ttf'),
        "Kalam-Light": require('../assets/fonts/Kalam-Light.ttf'),
        "Kalam-Regular": require('../assets/fonts/Kalam-Regular.ttf'),
        "Pacifico-Regular": require('../assets/fonts/Pacifico-Regular.ttf'),
        "Staatliches-Regular": require('../assets/fonts/Staatliches-Regular.ttf'),
        "TitanOne-Regular": require('../assets/fonts/TitanOne-Regular.ttf'),
        "Ultra-Regular": require('../assets/fonts/Ultra-Regular.ttf'),
    });
  return (
<View style={{width:responsiveScreenWidth(60),height:responsiveScreenHeight(40),justifyContent:'space-around',alignSelf:'center',backgroundColor:'grey',marginHorizontal:10,borderRadius:20}}>
    <View style={{alignSelf:'center'}}>
    <MaterialIcons name={props.name} size={128} color="black" />
    </View>
    
    <View>
        <Text style={{fontSize:32,textAlign:'center',fontFamily:'Staatliches-Regular'}}>{props.text}</Text>
    </View>
</View>
  );
}

export default WhyUsCard;