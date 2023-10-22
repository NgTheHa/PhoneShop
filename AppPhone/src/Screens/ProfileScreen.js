import React, { StatusBar, TouchableOpacity } from 'react-native'
import {View,Text,Image,SafeAreaView, StyleSheet} from 'react-native'

const ProfileScreen = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.cover}>
                <StatusBar backgroundColor={'gray'}/>
            </View>
            <View style = {styles.menu}>
                <TouchableOpacity>
                    <View>
                        <Text> Thong tin </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style = {styles.menu}>
                <TouchableOpacity>
                    <View>
                        <Text> Bao mat </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style = {styles.menu}>
                <TouchableOpacity>
                    <View>
                        <Text> Lich su </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style = {styles.menu}>
                <TouchableOpacity>
                    <View>
                        <Text> Dang xuat </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    cover: {
        height:290,
        width:'100%',
        resizeMode:'cover'
    },
    menu: {
        marginTop:30,
        width:"100%",
        height:40,
        borderWidth:1,
        alignItems:'flex-start',
        justifyContent:'center'
    }
})
export default ProfileScreen;