import React from 'react-native'
import {View,Text,Image,SafeAreaView, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'

const CartScreen = ({navigation}) => {
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.cartContent}>
                <View style = {{width: '20%', height: '100%', marginTop: 20}}>
                <TouchableOpacity
                onPress={() =>
                {navigation.goBack()}}
                ><Image source={require('../../image/back.png')} style = {{width:50,height:50,marginTop: 18, borderRadius: 50 }} /></TouchableOpacity>
                </View>
                <View style = {{width: '80%', height: '100%'}}><Text style = {{fontSize: 30, marginTop: 40 }}>Giỏ hàng</Text></View>
            </View>
            <ScrollView style = {styles.cartProduct}>
                <View style = {styles.product}>
                    <View style = {{width: 130, height: 135, marginTop: 15}}>
                        <Image source={require('../../image/iphone3.png')} style = {{width:'100%',height:'100%'}} />
                    </View>
                    <View style = {{width: 292, height: 135}}>
                        <View style = {{width: 292, height: 45, paddingLeft: 220}}><Image source={require('../../image/delete.png')} style = {{width:30,height:'100%'}} /></View>
                        <View style = {{width: 292, height: 45, paddingLeft: 5}}><Text style = {styles.textProduct}>iPhone 15 Pro 128GB</Text></View>
                        <View style = {{width: 292, height: 45, paddingLeft: 10}}><Text style = {styles.textProduct}>28.000.000đ</Text></View>
                    </View>
                </View>
                <View style = {styles.product}>
                    <View style = {{width: 130, height: 135, marginTop: 15}}>
                        <Image source={require('../../image/iphone1.png')} style = {{width:'100%',height:'100%'}} />
                    </View>
                    <View style = {{width: 292, height: 135}}>
                        <View style = {{width: 292, height: 45, paddingLeft: 220}}><Image source={require('../../image/delete.png')} style = {{width:30,height:'100%'}} /></View>
                        <View style = {{width: 292, height: 45, paddingLeft: 5}}><Text style = {styles.textProduct}>iPhone 15 Pro Max 512GB</Text></View>
                        <View style = {{width: 292, height: 45, paddingLeft: 10}}><Text style = {styles.textProduct}>40.000.000đ</Text></View>
                    </View>
                </View>
                <View style = {styles.product}>
                    <View style = {{width: 130, height: 135, marginTop: 15}}>
                        <Image source={require('../../image/iphone1.png')} style = {{width:'100%',height:'100%'}} />
                    </View>
                    <View style = {{width: 292, height: 135}}>
                        <View style = {{width: 292, height: 45, paddingLeft: 220}}><Image source={require('../../image/delete.png')} style = {{width:30,height:'100%'}} /></View>
                        <View style = {{width: 292, height: 45, paddingLeft: 5}}><Text style = {styles.textProduct}>iPhone 15 Pro Max 256GB</Text></View>
                        <View style = {{width: 292, height: 45, paddingLeft: 10}}><Text style = {styles.textProduct}>34.000.000đ</Text></View>
                    </View>
                </View>
                <View style = {styles.product}>
                    <View style = {{width: 130, height: 135, marginTop: 15}}>
                        <Image source={require('../../image/phone03.png')} style = {{width:'100%',height:'100%'}} />
                    </View>
                    <View style = {{width: 292, height: 135}}>
                        <View style = {{width: 292, height: 45, paddingLeft: 220}}><Image source={require('../../image/delete.png')} style = {{width:30,height:'100%'}} /></View>
                        <View style = {{width: 292, height: 45, paddingLeft: 5}}><Text style = {styles.textProduct}>Galaxy S23 Ultra 512GB</Text></View>
                        <View style = {{width: 292, height: 45, paddingLeft: 10}}><Text style = {styles.textProduct}>44.000.000đ</Text></View>
                    </View>
                </View>
                <View style = {styles.product}>
                    <View style = {{width: 130, height: 135, marginTop: 15}}>
                        <Image source={require('../../image/iphone4.png')} style = {{width:'100%',height:'100%'}} />
                    </View>
                    <View style = {{width: 292, height: 135}}>
                        <View style = {{width: 292, height: 45, paddingLeft: 220}}><Image source={require('../../image/delete.png')} style = {{width:30,height:'100%'}} /></View>
                        <View style = {{width: 292, height: 45, paddingLeft: 5}}><Text style = {styles.textProduct}>iPhone 15 Plus 128GB</Text></View>
                        <View style = {{width: 292, height: 45, paddingLeft: 10}}><Text style = {styles.textProduct}>25.000.000đ</Text></View>
                    </View>
                </View>
                
                
            </ScrollView>
            <View style = {styles.total}>
                <View style = {{alignItems: 'center', justifyContent : 'center', marginLeft: 10}}><Text style = {styles.text}>Total</Text></View>
                <View style = {{alignItems: 'center', justifyContent : 'center', marginRight: 10}}><Text style = {styles.text}>171.000.000đ</Text></View>
            </View>
            <View style = {styles.payNow}>
              <TouchableOpacity
                onPress = {() =>
                {navigation.navigate('Thanh Toán')}}
              ><Text style = {{fontSize: 20, color: 'blue'}}>Pay Now</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#E2BCB7'
    },
    cartContent :{
        width: '100%',
        height: '12%',
        backgroundColor: '#FFEFE0',
        flexDirection: 'row',
        
    },
    cartProduct :{
        width : '100%',
        height: '50%',
        marginTop: 10,
    },
    product: {
        width: '100%',
        height: 135,
        backgroundColor: '#EAD1CE',
        flexDirection: 'row'
    },
    total: {
        width : '100%',
        height: '6%',
        backgroundColor: '#EAD1CE',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    payNow: {
        width : '50%',
        height: '10%',
        backgroundColor: '#FFEFE0',
        marginHorizontal: 100,
        marginBottom: 10,
        borderRadius: 20,
        alignContent: 'center',
        justifyContent: 'center',
        paddingLeft: 55,
        marginTop: 30
        
    },
    text : {
        fontSize: 20,
        color: 'red'
    },
    textProduct : {
        fontSize: 20,
        
    },
})
export default CartScreen;