import React from "react";
import { SliderBox } from 'react-native-image-slider-box';
import { View, StyleSheet, } from "react-native";
import {ViewPropTypes} from 'deprecated-react-native-prop-types'

const Slider = () => {
    const slides = [
        require('../image/phone1.jpg'),
        require('../image/phone2.jpg'),
        require('../image/phone3.jpg'),
    ]
    return (
        <View style = {styles.container}>
            <SliderBox images = {slides}
            dotColor = {'blue'}
            ImageComponentStyle = {{borderRadius:15, width:"90%"}}
            autoplay
            circleLoop />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center'
    }
})

export default Slider;