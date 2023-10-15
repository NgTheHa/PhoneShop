import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, Dimensions } from 'react-native';

const windownWidth = Dimensions.get('window').width;
const windownHeight = Dimensions.get('window').height;

const CheckEmailScreen = ({navigation, route}) => {
    return (
        <SafeAreaView style = {styles.container}>
            <Image style = {styles.img} source={require('../../image/picture.png')} />
            <View style = {styles.content}>
            <Text style = {styles.title}>Check your Email</Text>
            <Text style={styles.detail}>we have sent you a reset password link on ypur registered email address</Text>
            <View style={{alignSelf: 'center'}}>
                <Pressable style={styles.loginButton}>
                    <Text style={styles.labelButton}>Recover Password</Text>
                </Pressable>
            </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        height: windownHeight,
        flex : 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        height: windownHeight*0.4,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        marginVertical: 20,
    },
    detail: {
        color: "#B7B7B7",
        fontWeight: '500',
        marginBottom: 20,
    },
    loginButton: {
        width: windownWidth*0.8,
        height: 50,
        alignItems: 'center',
        backgroundColor: 'blue',
        justifyContent: 'center',
        borderRadius: 5
    },
    labelButton: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600'
    }
});

export default CheckEmailScreen;