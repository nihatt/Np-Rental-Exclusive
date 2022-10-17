import * as React from 'react';
import { View, Text, Image } from 'react-native';
import AppBar from '../components/appHeader';
import { Picker } from '@react-native-picker/picker';
import { TextInput } from 'react-native-paper';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import { RadioButton } from 'react-native-paper';
import { colors } from 'react-native-swiper-flatlist/src/themes';


function DetailScreen() {
  global.myVar = [];
  myVar.push("2")
  myVar.push("5")
  myVar.push("2")
  var citiesArray = ["İstanbul", "Bartın", "Malatya", "İzmir"];
  var roomArray = ["2+1", "3+1", "1+1", "4+1"];
  const [selectedLanguage, setSelectedLanguage] = React.useState();
  const [selectedRoom, setselectedRoom] = React.useState();
  const [text, setText] = React.useState("");
  const [value, setValue] = React.useState('first');
  return (
    <View>
      <AppBar></AppBar>
      <View style={{  height: responsiveScreenHeight(35),borderRadius:50,backgroundColor:colors.white }}>
        <View style={{height: responsiveScreenHeight(23)}}>
          <Image
            resizeMode='stretch'
            borderRadius={30}
            style={{flex:1}}
            source={{
              uri: 'https://www.bankrate.com/2022/08/04093343/Buying-a-house-with-an-LLC.jpg?auto=webp&optimize=high&crop=16:9',
            }}
          />
        </View>
        <View style={{justifyContent:'space-evenly',flex:1}}>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Text style={{fontSize:30}}>200.000$</Text>

        </View>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
          <Text>İstanbul</Text>
        </View>
      </View>
      </View>
    </View>
  );
}

export default DetailScreen;