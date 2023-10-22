import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FlatList, SafeAreaView,Text,Image, View, StyleSheet, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import CartScreen from './CartScreen';
import PayScreen from './PayScreen';
import ProfileScreen from './ProfileScreen';
import Slider from '../../Home/Slider';
import ProductCardView from '../../Home/ProductCardView';


const Tab = createBottomTabNavigator()

function MainScreen () {
  const products = [1,2,3,4]
    return (
        <SafeAreaView style = {{ flex:1,alignItems:'center',justifyContent:'center'}}>
            <View style = {styles.searchBar}>
             <TextInput style = { styles.searchInput } placeholder='Nhap san pham ban muon tim...' ></TextInput>
             <Image source={require('../../image/search.png')} style = {{height:"35%", width:'10%'}} />
            </View>
            <ScrollView>
              <Slider/>
            </ScrollView>
            <View style = {styles.listItem}>
              <FlatList 
                data = {products}
                renderItem = {() => <ProductCardView/>}
                horizontal
                contentContainerStyle={{columnGap:100}}
              />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  searchBar: {
    width:'100%',
    height:'20%',
    alignItems : 'center',
    justifyContent:'space-evenly',
    flexDirection:'row'
  },
  searchInput: {
    borderWidth:1,
    width:'70%',
    height:'30%',
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
  },
  listItem: {
    width:'90%',
    height:'50%'
  }
})

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