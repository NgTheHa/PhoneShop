import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, TextInput, Pressable } from 'react-native';
import ScreenNames from '../utils/ScreenNames';

const windownWidth = Dimensions.get('window').width;
const windownHeight = Dimensions.get('window').height;

const ChangePasswordScreen = ({navigation, route}) => {
    return (
        <SafeAreaView style = {styles.container}>
            <View>

            </View>

            <View style={styles.content}>
            
            <View>
                <Text style={styles.title}>Forgot password</Text>
                <Text style={styles.detail}>Please enter your registered email or mobile to reset your Password.</Text>
            </View>

            <View sytle={styles.loginForm}>
                <View>
                    <Text style={styles.labelInput}>EMAIL/Mobile number</Text>
                    <TextInput style = {styles.textInput} placeholder='user@gmail.com'></TextInput>
                </View>
            </View>

            <View style={{alignSelf: 'center'}}>
                <Pressable style={styles.loginButton} onPress={ () => {navigation.navigate(ScreenNames.CheckEmail)}}>
                    <Text style={styles.labelButton}>Recover Password</Text>
                </Pressable>
            </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    content: {
        wodth: windownWidth,
        height: windownHeight*0.6,
        justifyContent: 'space-evenly',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        marginVertical: 20,
    },
    detail: {
        color: "#B7B7B7",
        fontWeight: '500'
    },
    loginForm : {
        width: windownWidth*0.8,
    },
    labelInput : {
        color: "#B7B7B7"
    },
    textInput: {
        width: windownWidth*0.8,
        marginBottom: 20,
        borderBottomWidth: 1, 
        borderBottomColor: '#B7B7B7',
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

export default ChangePasswordScreen;