import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Pressable, Dimensions, ScrollView,TouchableOpacity } from 'react-native';
import ScreenNames from '../Utils/ScreenNames';
import { AxiosConfig } from '../../Axios/AxiosConfig';
import {useState} from 'react'
import axios from "axios"

const windownWidth = Dimensions.get('window').width;
const windownHeight = Dimensions.get('window').height;

const RegisterScreen = ({navigation, route}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rePasswordError, setRePasswordError] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidRePassword, setIsValidRePassword] = useState(false);

    const handleRegister = async () => {
        const checkEmail = ValidationEmail(email);
        const checkPassword = ValidationPassword(password);
        const checkRePassword = ValidationPassword(rePassword);
        const checkRePasswordNotMatch = ValidationRePassword(password, rePassword);
    
        let hasError = false; 
    
        if (checkEmail !== null) {
          setEmailError(checkEmail);
          setIsValidEmail(true);
          hasError = true;
        }
        if (checkPassword !== null) {
          setPasswordError(checkPassword);
          setIsValidPassword(true);
          hasError = true;
        }
        if (checkRePassword !== null) {
          setRePasswordError(checkRePassword);
          setIsValidRePassword(true);
          hasError = true;
        }
        if (checkRePasswordNotMatch !== null) {
          setRePasswordError(checkRePasswordNotMatch);
          setIsValidRePassword(true);
          hasError = true;
        }
    
        const result = await register(email, password);
        if (result != null) {
          hasError = true;
          console.log(result);
        }
        else {
          hasError = false;
          console.log(result);
        }
    
        if (hasError == true) {
          // Nếu không có lỗi, thực hiện đăng kí thành công
          setEmailError("");
          setIsValidEmail(false);
          setPasswordError("");
          setIsValidPassword(false);
          setRePasswordError("");
          setIsValidRePassword(false);
          alert("Đăng kí thành công");
          navigation.replace(ScreenNames.Login)
        }
        else {
          alert("Đăng kí không thành công");
        }
      };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.brand}>
                <Image source={require('../../image/logo.png')} />
                <Text style={styles.title}>Nhóm 9</Text>
            </View>

            <View sytle={styles.registerForm}>

                <View>
                    <Text style={styles.labelInput}>Họ</Text>
                    <TextInput style = {styles.textInput} placeholder='Nguyễn ...'></TextInput>
                </View>

                <View>
                    <Text style={styles.labelInput}>Tên</Text>
                    <TextInput style = {styles.textInput} placeholder='A B C...'></TextInput>
                </View>

                <View>
                    <Text style={styles.labelInput}>EMAIL ID</Text>
                    <TextInput style = {styles.textInput} placeholder='user@gmail.com'
                    value={email}
                onChangeText={(value) => {
                setEmail(value);
                if (email !== "") {
                  setEmailError("");
                  setIsValidEmail(false);}}} ></TextInput>
                </View>

                <View  style = {styles.input}>
                    <Text style={styles.labelInput}>PASSWORD</Text>
                    <TextInput style = {styles.textInput} placeholder='.......' secureTextEntry={true}
                    value={password}
              onChangeText={(value) => {
                setPassword(value);
                if (password !== "") {
                  setPasswordError("");
                  setIsValidPassword(false);
                }
              }}></TextInput>
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