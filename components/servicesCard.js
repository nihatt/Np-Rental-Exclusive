import * as React from 'react';
import { View, Text,Image,StyleSheet, ScrollView } from 'react-native';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import AppBar from '../components/appHeader';
import { useFonts } from 'expo-font';




function ServicesCard() {
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
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{width:responsiveScreenWidth(50),height:responsiveScreenHeight(40),marginHorizontal:30}}>
            <Image
            resizeMode='stretch'
            borderRadius={30}
                style={styles.tinyLogo}
                source={{
                    uri: 'https://expertphotography.b-cdn.net/wp-content/uploads/2018/03/female-photographers-2.jpg',
                }}
            />
            <Text style={{textAlign:'center',fontSize:24,fontFamily:'Kalam-Regular'}}>Profesyonel Fotoğraf Çekim Hizmeti</Text>
        </View>

        <View style={{width:responsiveScreenWidth(50),height:responsiveScreenHeight(40),marginHorizontal:15}}>
            <Image
            resizeMode='stretch'
            borderRadius={30}
                style={styles.tinyLogo}
                source={{
                    uri: 'https://rozgargyan.com/wp-content/uploads/2022/05/computer-teacher.jpg',
                }}
            />
            <Text style={{textAlign:'center',fontSize:24,fontFamily:'Kalam-Regular'}}>Mülk İlan Yönetimi Hizmeti</Text>
        </View>

        <View style={{width:responsiveScreenWidth(50),height:responsiveScreenHeight(40),marginHorizontal:15}}>
            <Image
            resizeMode='stretch'
            borderRadius={30}
                style={styles.tinyLogo}
                source={{
                    uri: 'https://static-b50e.kxcdn.com/wp-content/uploads/2016/08/live-renting-home-abroad-family.jpg',
                }}
            />
            <Text style={{textAlign:'center',fontSize:24,fontFamily:'Kalam-Regular'}}>Misafir Ve Kiracı İlişkileri </Text>
        </View>

        <View style={{width:responsiveScreenWidth(50),height:responsiveScreenHeight(40),marginHorizontal:15}}>
            <Image
            resizeMode='stretch'
            borderRadius={30}
                style={styles.tinyLogo}
                source={{
                    uri: 'http://cdn.home-designing.com/wp-content/uploads/2014/07/free-3-bedroom-house-plans.jpeg',
                }}
            />
            <Text style={{textAlign:'center',fontSize:24,fontFamily:'Kalam-Regular'}}>Profesyonel İç Dizayn Hizmeti</Text>
        </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({

    tinyLogo: {
      width: responsiveScreenWidth(50),
      height: responsiveScreenHeight(20),
      
    },

  });
export default ServicesCard;