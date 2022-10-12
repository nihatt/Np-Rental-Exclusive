import { useState } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import { Appbar, BottomNavigation, Button } from 'react-native-paper';
import AppBar from '../components/appHeader';
import BlogPost from '../components/blogPost';
import { useFonts } from 'expo-font';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { FAB, Portal, Provider } from 'react-native-paper';
import BottomButton from '../components/bottomButton';
import { TimeDatePicker, Modes } from "react-native-time-date-picker";
import moment from 'moment';
import InfoModal from '../components/infoModal';
import { Provider as PaperProvider } from 'react-native-paper';
import CitiesCard from '../components/citiesCard';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import WhyUsCard from '../components/whyUsCard';
import ServicesCard from '../components/servicesCard';


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
function HomeScreen() {
    const now = new moment().valueOf();
    const [infoModalvisible, infoModalsetVisible] = useState(false);
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
    const renderItem = ({ item }) => (
        <CitiesCard></CitiesCard>
    );

    return (
        <PaperProvider>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <AppBar infoVisible={() => infoModalsetVisible(true)}></AppBar>
                <ScrollView>
                    <InfoModal visible={infoModalvisible} hideDialog={() => infoModalsetVisible(false)}></InfoModal>
                    <BlogPost></BlogPost>
                    <View style={{ height: responsiveScreenHeight(35), marginTop: responsiveScreenHeight(1), justifyContent: 'space-evenly' }}>
                        <View>
                            <Text style={{ fontSize: 32, fontFamily: 'Kalam-Regular' }}> En Popüler Şehirler</Text>
                        </View>
                        <View>
                            <FlatList
                                numColumns={2}
                                columnWrapperStyle={{ justifyContent: 'space-around', paddingBottom: responsiveScreenHeight(1) }}
                                data={DATA}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </View>
                    <View style={{ height: responsiveScreenHeight(45),paddingVertical:20}}>
                        <View style={{paddingVertical:responsiveScreenHeight(2)}}>
                            <Text style={{ fontSize: 32, fontFamily: 'Kalam-Regular' }}> Mülk Özel Hizmetlerimiz</Text>
                        </View>
                        <View>
                            <ServicesCard></ServicesCard>
                        </View>
                    </View>
                    <View style={{ height: responsiveScreenHeight(50), justifyContent: 'space-between' }}>
                        <View style={{ paddingTop: 20 }}>
                            <Text style={{ fontSize: 30, fontFamily: 'TitanOne-Regular', textAlign: 'center' }}>Neden mi NpRental ? </Text>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} horizontal={true} style={{ height: responsiveScreenHeight(40) }}>
                            <WhyUsCard name={"clean-hands"} text={"Çünkü evler sürekli temizlenir"}></WhyUsCard>
                            <WhyUsCard name={"home-repair-service"} text={"Çünkü arızalar anında tamir edilir"}></WhyUsCard>
                            <WhyUsCard name={"payments"} text={"Çünkü paranız bizimle güvende"}></WhyUsCard>
                            <WhyUsCard name={"contact-support"} text={"Çünkü 7/24 destek bulursunuz"}></WhyUsCard>
                        </ScrollView>
                    </View>
                </ScrollView>
                <BottomButton></BottomButton>
            </View>
        </PaperProvider>
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
