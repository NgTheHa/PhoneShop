import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Pressable, Dimensions, ScrollView,TouchableOpacity } from 'react-native';
import ScreenNames from '../utils/ScreenNames';

const windownWidth = Dimensions.get('window').width;
const windownHeight = Dimensions.get('window').height;

const LoginScreen = ({navigation, route}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.brand}>
                <Image source={require('../../image/logo.png')} />
                <Text style={styles.title}>Nhóm 9</Text>
            </View>

            <View>
                <View style={styles.LoginList}>
                    <Pressable style={styles.loginOption}>
                        <Image style={styles.icon} source={require('../../image/fb.jpg')}></Image>
                        <Text>Facebook</Text>
                    </Pressable>
                    <Pressable style={styles.loginOption}>
                        <Image style={styles.icon} source={require('../../image/google.png')} />
                        <Text>Google</Text>
                    </Pressable>
                </View>
                <View>
                    <Text style={{textAlign: 'center'}}>Or</Text>
                </View>
            </View>

            <View sytle={styles.loginForm}>
                <View>
                    <Text style={styles.labelInput}>EMAIL ID</Text>
                    <TextInput style = {styles.textInput} placeholder='user@gmail.com'></TextInput>
                </View>
                <View  style = {styles.input}>
                    <Text style={styles.labelInput}>PASSWORD</Text>
                    <TextInput style = {styles.textInput} placeholder='.......' secureTextEntry={true}></TextInput>
                </View>
                <Text style = {styles.changePassword} onPress={ () => {navigation.navigate(ScreenNames.ChangePassword)}}>forgot password?</Text>
            </View>

            <View>
                <Pressable style={styles.loginButton}>
                    <Text style={styles.labelButton}>Login</Text>
                </Pressable>
            </View>
            <View>
                <Text style = {{color: '#B7B7B7'}}>Dont Have An Account?
                <TouchableOpacity onPress={ () => {navigation.navigate(ScreenNames.RegisterAcc)}}>
                    <Text style = {{color: 'blue', fontWeight: 600}}>Register Now</Text>
                    </TouchableOpacity>
                    
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: windownWidth,
        height: windownHeight,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 40
    },
    brand: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 15,
    },
    LoginList: {
        width: windownWidth,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 20
    },
    loginOption: {
        width: 150,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10
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
    changePassword : {
        textAlign: 'right',
        color: 'blue',
        fontWeight: '600',
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

export default LoginScreen;