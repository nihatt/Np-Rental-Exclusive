import * as React from 'react';
import { View, Text } from 'react-native';
import AppBar from '../components/appHeader';





function FavouritesScreen() {
  return (
<View>
<AppBar></AppBar>
    <Text>{global.myVar[0] + global.myVar[1]+global.myVar[2]}</Text>
</View>
  );
}

export default FavouritesScreen;