import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView,Text,Image } from 'react-native';
import CartScreen from './CartScreen';
import PayScreen from './PayScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator()

function MainScreen () {
    return (
        <SafeAreaView style = {{justifyContent:'center',alignItems:'center', flex:1}}>
            <Text> da chay </Text>
        </SafeAreaView>
    )
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={MainScreen} options={{tabBarIcon: () => (<Image source={require('../../image/homeicon.png')} style = {{width:30,height:30}} />)}} />
      <Tab.Screen name="Cart" component={CartScreen} options={{tabBarIcon: () => (<Image source={require('../../image/carticon.png')} style = {{width:30,height:30}} />)}}/>
      <Tab.Screen name="Pay" component={PayScreen} options={{tabBarIcon: () => (<Image source={require('../../image/payicon.png')} style = {{width:30,height:30}} />)}}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon: () => (<Image source={require('../../image/profileicon.jpg')} style = {{width:30,height:30}} />)}}/>
    </Tab.Navigator>
  );
}
export default MyTabs;