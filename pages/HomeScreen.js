import { useState } from 'react';
import { View, Text, ScrollView,FlatList,StyleSheet } from 'react-native';
import { Appbar, BottomNavigation } from 'react-native-paper';
import AppBar from '../components/appHeader';
import BlogPost from '../components/blogPost';
import { useFonts } from 'expo-font';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { FAB, Portal, Provider } from 'react-native-paper';
import BottomButton from '../components/bottomButton';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

function HomeScreen() {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );
    const [state, setState] = useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;

    const [fontsLoaded, setFontsLoaded] = useState(false)
    [fontsLoaded] = useFonts({
        "Comforter": require('../assets/fonts/ComforterBrush-Regular.ttf'),
        "Kalam-Light": require('../assets/fonts/Kalam-Light.ttf'),
        "Kalam-Regular": require('../assets/fonts/Kalam-Regular.ttf'),
        "Pacifico-Regular": require('../assets/fonts/Pacifico-Regular.ttf'),
        "Staatliches-Regular": require('../assets/fonts/Staatliches-Regular.ttf'),
        "TitanOne-Regular": require('../assets/fonts/TitanOne-Regular.ttf'),
        "Ultra-Regular": require('../assets/fonts/Ultra-Regular.ttf'),

    });

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <AppBar></AppBar>

            <ScrollView>
                <BlogPost></BlogPost>

                <View style={{width:400}}>
                <FlatList
                    
                    numColumns={2}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                </View>
            </ScrollView>
            <BottomButton></BottomButton>

        </View>
    );
}
const styles = StyleSheet.create({

    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
    
    },
    title: {
      fontSize: 32,
    },
  });

export default HomeScreen;
