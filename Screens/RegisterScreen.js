import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Pressable, Dimensions, ScrollView,TouchableOpacity } from 'react-native';
import ScreenNames from '../utils/ScreenNames';

const windownWidth = Dimensions.get('window').width;
const windownHeight = Dimensions.get('window').height;

const RegisterScreen = ({navigation, route}) => {

    const [Name, setName] = useState("");
    const [isValidName, setIsValidName] = useState(false);
    const [NameError, setNameError] = useState('');

    const [SDT, setSDT] = useState("");
    const [isValidSDT, setIsValidSDT] = useState(false);
    const [SDTError, setSDTError] = useState('');

    const [Email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [EmailError, setEmailError] = useState('');

    const [Pass, setPass] = useState("");
    const [isValidPass, setIsValidPass] = useState(false);
    const [PassError, setPassError] = useState('');

    const verifyName = (value) => {
        if (value.trim() === '' || value.trim() === null) {
            setNameError("Không được để trống");
            return false;
        }
        else if (value.trim().length < 25) {
            setNameError("Tối thiểu 25 ký tự");
            return false;
        }
        else {
            setNameError("");
            return true;
        }
    }

    const verifySDT = (value) => {
        if (value.trim() === '' || value.trim() === null) {
            setSDTError("Không được để trống");
            return false;
        }
        else if (value.trim().length < 8) {
            setSDTError("Tối thiểu 13 ký tự");
            return false;
        }
        else {
            setSDTError("");
            return true;
        }
    }

    const verifyPass = (value) => {
        if (value.trim() === '' || value.trim() === null) {
            setPassError("Không được để trống");
            return false;
        }
        else {
            setPassError("");
            return true;
        }
    }

    const verifyEmail = (value) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (value.trim() === '' || value.trim() === null) {
            setEmailError("Không được để trống");
            return false;
        }
        else if (!emailRegex.test(value)) {
            setEmailError("Email không hợp lệ");
            return false;
        }
        else {
            setEmailError("");
            return true;
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.brand}>
                <Image source={require('../../image/logo.png')} />
                <Text style={styles.title}>Nhóm 9</Text>
            </View>

            <View sytle={styles.registerForm}>

                <View>
                    <Text style={styles.labelInput}>Họ tên</Text>
                    <TextInput style = {styles.textInput} placeholder='Nguyễn Văn A'
                    onChangeText={(value) => {
                            setName(value);
                            const isValid = verifyName(value);
                            isValid ? setIsValidName(true) : setIsValidName(false);
                        }}
                        value={Name}></TextInput>
                </View>
                <Text>{isValidName ? '' : NameError}</Text>

                <View>
                    <Text style={styles.labelInput}>SDT</Text>
                    <TextInput style = {styles.textInput} placeholder='123456789'
                    onChangeText={(value) => {
                            setSDT(value);
                            const isValid = verifySDT(value);
                            isValid ? setIsValidSDT(true) : setIsValidSDT(false);
                        }}
                        value={SDT}></TextInput>
                </View>

                <View>
                    <Text style={styles.labelInput}>EMAIL ID</Text>
                    <TextInput style = {styles.textInput} placeholder='user@gmail.com'
                    onChangeText={(value) => {
                            setEmail(value);
                            const isValid = verifyEmail(value);
                            isValid ? setIsValidEmail(true) : setIsValidEmail(false);
                        }}
                        value={Email}></TextInput>
                </View>
                <Text>{isValidEmail ? '' : EmailError}</Text>

                <View  style = {styles.input}>
                    <Text style={styles.labelInput}>PASSWORD</Text>
                    <TextInput style = {styles.textInput} placeholder='.......' secureTextEntry={true}
                    onChangeText={(value) => {
                            setPass(value);
                            const isValid = verifyPass(value);
                            isValid ? setIsValidPass(true) : setIsValidPass(false);
                        }}
                        value={Pass}></TextInput>
                </View>

                <View  style = {styles.input}>
                    <Text style={styles.labelInput}>REPASSWORD</Text>
                    <TextInput style = {styles.textInput} placeholder='.......' secureTextEntry={true}
                    onChangeText={(value) => {
                            setPass(value);
                            const isValid = verifyPass(value);
                            isValid ? setIsValidPass(true) : setIsValidPass(false);
                        }}
                        value={Pass}></TextInput>
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