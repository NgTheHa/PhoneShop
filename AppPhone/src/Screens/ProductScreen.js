import React from "react";
import { StyleSheet, View,Text,Image } from "react-native";

const ProductScreen = () => {
    return (
        <View style = {styles.container}>
           <View style = {styles.upperRow}>
                <Text> hehe </Text>
           </View>
           <Image source={require('../../image/logo.png')} style = {{aspectRatio:1}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    upperRow: {
        marginHorizontal:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:10,
        width:20,
        zIndex:999
    }
}
)

export default ProductScreen;