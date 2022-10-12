import * as React from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Text } from 'react-native-paper';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";

const colors = [require('../assets/images/banner_1.jpg'), require('../assets/images/banner_2.jpg'), require('../assets/images/banner_3.jpg'), require('../assets/images/banner_4.jpg')]

function BlogPost() {
    return (
        <View style={{ height: responsiveScreenHeight(30), width: responsiveScreenWidth(100),  alignSelf: 'center' }}>
            <SwiperFlatList
                autoplay
                autoplayDelay={3}
                autoplayLoop
                index={2}
                renderAll={true}
                showPagination
                data={colors}
                renderItem={({ item }) => (
                    <View style={styles.child}>
                        <ImageBackground blurRadius={1} source={item} resizeMode="stretch" style={styles.image}>
                        </ImageBackground>
                    </View>
                )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white' },
    child: { height: responsiveScreenHeight(30), width: responsiveScreenWidth(100), justifyContent: 'center', borderRadius: 40 },
    text: { textAlign: 'center' },
    image: {
        flex: 1,

    },
});

export default BlogPost;