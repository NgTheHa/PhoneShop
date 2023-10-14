import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Pressable, Dimensions, ScrollView,TouchableOpacity } from 'react-native';
import ScreenNames from '../Utils/ScreenNames';

const windownWidth = Dimensions.get('window').width;
const windownHeight = Dimensions.get('window').height;

const RegisterScreen = ({navigation, route}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.brand}>
                <Image source={require('../../image/logo.png')} />
                <Text style={styles.title}>Nhóm 9</Text>
            </View>

            <View sytle={styles.registerForm}>

                <View>
                    <Text style={styles.labelInput}>Họ tên</Text>
                    <TextInput style = {styles.textInput} placeholder='Nguyễn Văn A'></TextInput>
                </View>

                <View>
                    <Text style={styles.labelInput}>SDT</Text>
                    <TextInput style = {styles.textInput} placeholder='123456789'></TextInput>
                </View>

                <View>
                    <Text style={styles.labelInput}>EMAIL ID</Text>
                    <TextInput style = {styles.textInput} placeholder='user@gmail.com'></TextInput>
                </View>

                <View  style = {styles.input}>
                    <Text style={styles.labelInput}>PASSWORD</Text>
                    <TextInput style = {styles.textInput} placeholder='.......' secureTextEntry={true}></TextInput>
                </View>

                <View  style = {styles.input}>
                    <Text style={styles.labelInput}>REPASSWORD</Text>
                    <TextInput style = {styles.textInput} placeholder='.......' secureTextEntry={true}></TextInput>
                </View>
                
            </View>

            <View style={{alignSelf: 'center'}}>
                <Pressable style={styles.registerButton} onPress={ () => {navigation.navigate(ScreenNames.RegisterSD)}}>
                    <Text style={styles.labelButton}>REGISTER</Text>
                </Pressable>
            </View>


            <View>
                <Text style = {{color: '#B7B7B7'}}>Have An Account?
                <TouchableOpacity onPress={ () => {navigation.navigate(ScreenNames.Login)}}>
                    <Text style = {{color: 'blue', fontWeight: 600}}>Login Now</Text>
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
    registerForm : {
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

    registerButton: {
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

export default RegisterScreen;

{/** const RegisterScreen = ({navigation}) => {

    return (
        <SafeAreaView>
            <View style = {styles.Box1}>
            <Image source={require('../../image/logo.png')}></Image>
            <Text style = {{fontSize: 30, fontWeight:'bold'} }> Nhóm 9</Text>
                
            </View>
            <View style = {styles.Box2}>

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    Box1: {
        width:'100%',
        height:'50%',
        justifyContent:'center',
        alignItems:'center'
    },
    Box2: {
        width:'100%',
        height:'20%',
        backgroundColor:'red',

    }
});

export default RegisterScreen;
*/}