import * as React from 'react';
import { View,  StyleSheet, Image, ImageBackground } from 'react-native';
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

const colors = ['https://www.kamupersoneli.net/wp-content/uploads/2022/06/devlet-kurumu-241-bin-tlye-kadar-faizsiz-konut-kredisi.jpg', 'https://i2.milimaj.com/i/milliyet/75/0x0/6052657245d2a07788d03657.jpg', 'https://rentprogress.com/content/dam/progress-residential/testimonial-photos/progress-rental-house.webOptimized.jpg', 'https://c.ilkbyte.com/user/upload/2019/01/14/p0g845ypfvsxn2y2.png'];

function BlogPost() {
    return (
        <View style={{  height: responsiveScreenHeight(30), width: responsiveScreenWidth(100),borderRadius:40,alignSelf:'center' }}>
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
                        <ImageBackground  blurRadius={1} source={{ uri: item }} resizeMode="stretch" style={styles.image}>
              
                        </ImageBackground>
                    </View>
                )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white' },
    child: {height:responsiveScreenHeight(30), width: responsiveScreenWidth(100), justifyContent: 'center', borderRadius: 40 },
    text: { textAlign: 'center' },
    image: {
        flex: 1,
        
    },
});

export default BlogPost;