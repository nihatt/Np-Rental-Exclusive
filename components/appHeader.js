import * as React from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useFonts } from 'expo-font';



function AppBar() {
    const [fontsLoaded, setFontsLoaded] =React.useState(false)
    [fontsLoaded] = useFonts({
        "Comforter":require('../assets/fonts/ComforterBrush-Regular.ttf'),
        "Kalam-Light":require('../assets/fonts/Kalam-Light.ttf'),
        "Kalam-Regular":require('../assets/fonts/Kalam-Regular.ttf'),
        "Pacifico-Regular":require('../assets/fonts/Pacifico-Regular.ttf'),
        "Staatliches-Regular":require('../assets/fonts/Staatliches-Regular.ttf'),
        "TitanOne-Regular":require('../assets/fonts/TitanOne-Regular.ttf'),
        "Ultra-Regular":require('../assets/fonts/Ultra-Regular.ttf'),
        
    });
    return (
        <View>
            <Appbar.Header style={{ backgroundColor: 'purple' }}>
                <Appbar.Content style={{ alignItems:'center' }} title={<Text style={{ color: 'white',fontFamily:'Pacifico-Regular',fontSize:20,flex:1}}>NpRental Mobile</Text>} />
            </Appbar.Header>

        </View>
    );
}

export default AppBar;