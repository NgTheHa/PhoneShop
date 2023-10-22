import StartScreen from './src/Screens/StartScreen';
import LoginScreen from './src/Screens/LoginScreen';
import ChangePasswordScreen from './src/Screens/ChangePasswordScreen';
import CheckEmailScreen from './src/Screens/CheckEmailScreen';
//import { RegisterScreen } from './src/Screens/RegisterScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from './src/Utils/ScreenNames';
import RegisterScreenDone from './src/Screens/RegisterScreenDone';
import MyTabs from './src/Screens/MainScreen';
import ProductScreen from './src/Screens/ProductScreen';
import ProductCardView from './Home/ProductCardView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name={ScreenNames.Start}
          component={StartScreen}
          options={{headerShown: false}}
        />
         
  
        <Stack.Screen
          name={ScreenNames.Login}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenNames.ChangePassword}
          component={ChangePasswordScreen}
          //options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenNames.CheckEmail}
          component={CheckEmailScreen}
          options={{headerShown: false}}
        />
        
        <Stack.Screen
          name={ScreenNames.RegisterAcc}
          component={RegisterScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={ScreenNames.RegisterSD}
          component={RegisterScreenDone}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name={ScreenNames.Main}
          component={MyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenNames.CardView}
          component={ProductCardView}
          options={{headerShown: false}}
        />
        
        <Stack.Screen
          name={ScreenNames.Detail}
          component={ProductScreen}
          options={{headerShown: false}}
        />
        
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}