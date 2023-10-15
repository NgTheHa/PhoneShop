import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import ScreenNames from '../utils/ScreenNames';
import { useEffect } from 'react';

const StartScreen = ({navigation, route}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate(ScreenNames.Login);
        }, 2000);
        return () => {
          clearTimeout(timer);
        };
      }, []);

    return (
        <SafeAreaView style = {styles.container}>
            <Image source={require('../../image/logo.png')} />
            <Text style = {styles.title}>Nhóm 9</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title : {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 15
    }

});

export default StartScreen;