import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import AppBar from '../components/appHeader';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import { useFonts } from 'expo-font';




function CitiesCard() {
    const [fontsLoaded, setFontsLoaded] = React.useState(false)
    [fontsLoaded] = useFonts({
        "Comforter": require('../assets/fonts/ComforterBrush-Regular.ttf'),
        "Kalam-Light": require('../assets/fonts/Kalam-Light.ttf'),
        "Kalam-Regular": require('../assets/fonts/Kalam-Regular.ttf'),
        "Pacifico-Regular": require('../assets/fonts/Pacifico-Regular.ttf'),
        "Staatliches-Regular": require('../assets/fonts/Staatliches-Regular.ttf'),
        "TitanOne-Regular": require('../assets/fonts/TitanOne-Regular.ttf'),
        "Ultra-Regular": require('../assets/fonts/Ultra-Regular.ttf'),
    });

    const item = "https://franks-travelbox.com/wp-content/uploads/2020/07/tucc88rkei-istanbul-der-galataturm-wurde-einst-von-den-genuesen-als-teil-ihrer-stadtbefestigung-errichtet-und-ist-einer-der-schocc88nsten-aussichtspunkte-ucc88ber-istanbul-tucc88rkei-a.jpg"
    return (
        <View style={{ height: responsiveScreenHeight(8), width: responsiveScreenWidth(45), borderRadius: 50 }}>
            <ImageBackground blurRadius={5} imageStyle={{ borderRadius: 40 }} source={{ uri: item }} resizeMode="stretch" style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={styles.textWithShadow}>İstanbul</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    textWithShadow: {
        textShadowColor: 'rgba(0, 250, 100, 1)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 20,
        flexShrink: 1,
        alignSelf: 'center',
        color: 'white',
        fontFamily: 'Comforter',
        fontSize: 45,
    }
});

export default CitiesCard;