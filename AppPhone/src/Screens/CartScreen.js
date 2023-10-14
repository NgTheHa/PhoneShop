import React from 'react-native'
import {View,Text,Image,SafeAreaView, StyleSheet} from 'react-native'

const CartScreen = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <View>
                <Text>Da chay 1</Text>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default CartScreen;