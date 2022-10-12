import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
import DetailScreen from './pages/DetailScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import FavouritesScreen from './pages/FavouritesScreen';
import { useFonts } from 'expo-font';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';


const Tab = createBottomTabNavigator();

function App() {
  const [fontsLoadedApp, setFontsLoadedApp] =React.useState(false)
  async function loadFonts() {
    await Font.loadAsync({
      "Comforter":require('./assets/fonts/ComforterBrush-Regular.ttf'),
        "Kalam-Light":require('./assets/fonts/Kalam-Light.ttf'),
        "Kalam-Regular":require('./assets/fonts/Kalam-Regular.ttf'),
        "Pacifico-Regular":require('./assets/fonts/Pacifico-Regular.ttf'),
        "Staatliches-Regular":require('./assets/fonts/Staatliches-Regular.ttf'),
        "TitanOne-Regular":require('./assets/fonts/TitanOne-Regular.ttf'),
        "Ultra-Regular":require('./assets/fonts/Ultra-Regular.ttf'),
    });
    setFontsLoadedApp(false)
}

const [fontsLoaded] = useFonts({
  "Comforter":require('./assets/fonts/ComforterBrush-Regular.ttf'),
    "Kalam-Light":require('./assets/fonts/Kalam-Light.ttf'),
    "Kalam-Regular":require('./assets/fonts/Kalam-Regular.ttf'),
    "Pacifico-Regular":require('./assets/fonts/Pacifico-Regular.ttf'),
    "Staatliches-Regular":require('./assets/fonts/Staatliches-Regular.ttf'),
    "TitanOne-Regular":require('./assets/fonts/TitanOne-Regular.ttf'),
    "Ultra-Regular":require('./assets/fonts/Ultra-Regular.ttf'),
    
});
if (!fontsLoaded) {
    loadFonts
    return (
      <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center',height:800}}>
        <ActivityIndicator style={{alignSelf:'center'}} animating={true} color={MD2Colors.red800} />
        </View>
    )
    
}
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={{ headerShown: false,tabBarShowLabel:false }} >
        <Tab.Screen name="Home" options={{
          tabBarIcon: (tabInfo) => {
            return (
              <View style={{justifyContent:'flex-end'}}>
              <Ionicons

                name="md-home"
                size={32}
                color={tabInfo.focused ? "purple" : "#8e8e93"}
              />
              </View>
            );
          },
          
        }} component={HomeScreen} />
        <Tab.Screen name="Details" options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="md-search"
                size={30}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
          tabBarLabel: "Detaylı Arama"
        }} component={DetailScreen} />

<Tab.Screen name="Favourites" options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="md-heart"
                size={28}
                color={tabInfo.focused ? "red" : "#8e8e93"}
              />
            );
          },
          tabBarLabel: "Favoriler"
        }} component={FavouritesScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;