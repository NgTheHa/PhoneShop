import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SafeAreaView,Text,Image, View, StyleSheet, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import CartScreen from './CartScreen';
import PayScreen from './PayScreen';
import ProfileScreen from './ProfileScreen';
import Slider from '../../Home/Slider';
import ProductCardView from '../../Home/ProductCardView';
import ScreenNames from '../Utils/ScreenNames';
import ShipProduct from './ShipProduct';


const Tab = createBottomTabNavigator()

function MainScreen ({navigation}) {
  const products = [1,2,3,4]
  return (
      <SafeAreaView style = {{ flex:1, marginTop: 25}}>
          <View style = {styles.searchBar}>
            <View style = {styles.searchBar1}>
              <View></View>
              <View>
                <TouchableOpacity
                onPress={() =>
                {navigation.navigate('Tôi')}}
                ><Image source={require('../../image/icons8-user-50.png')} style = {{width:50,height:50, }} /></TouchableOpacity>
              </View>
            </View>
            <View style = {styles.searchBar2}>
              <Text style = {{fontSize: 25, fontWeight: 'bold' }}>Xin chào, Quang Hiệp</Text>
            </View>
            <View style = {{flex : 1 }}>
              <View style = {{flex: 1,marginHorizontal: 20, borderRadius: 50, backgroundColor: '#E2BCB7', marginBottom: 30, flexDirection: 'row'}}>
                <View style = {{width: '85%', height:'100%', alignItems: 'center',justifyContent:'center' }}><TextInput style = {{}} placeholder='Tìm kiếm ......'/></View>
                <View><Image source={require('../../image/search.png')} style = {{width:50,height:50, }} /></View>
              </View>
            </View>
          </View>
          <View style = {styles.newItem}>
            <View style = {styles.newItem1}><Text style = {{fontSize: 20}}>SẢN PHẨM MỚI THÁNG MƯỜI MỘT</Text></View>
            <View style = {styles.newItem2}><Image source={require('../../image/5042156_cover.png')} style = {{width:250,height:140 }} /></View>
            <View style = {styles.newItem3}>
              <View><Image source={require('../../image/phone01.png')} style = {{width:170,height:170 }} /></View>
              <View>
                <TouchableOpacity
                  onPress = {() =>
                  {navigation.navigate(ScreenNames.Detail)}}
              ><Image source={require('../../image/phone03.png')} style = {{width:170,height:170 }} /></TouchableOpacity></View>
           </View>
            <View style = {styles.newItem4}>
              <TouchableOpacity
                onPress = {() =>
                {navigation.navigate(ScreenNames.ListProduct)}}
              ><Text style = {{fontSize: 20, }}>MUA NGAY</Text></TouchableOpacity>
            </View>
          </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  searchBar:{
    flex: 1,
    backgroundColor: '#FFEFE0'
  },
  searchBar1:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  searchBar2:{
    flex: 1,
    paddingLeft: 25
  },
  newItem:{
    flex: 2,
    backgroundColor: '#E2BCB7'
  },
  newItem1: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft: 30
  },
  newItem2: {
    flex: 2,
    paddingHorizontal: 65  
  },
  newItem3: {
    flex: 3,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  newItem4: {
    flex: 1,
    backgroundColor: '#FFEFE0',
    marginHorizontal: 100,
    marginBottom: 10,
    borderRadius: 20,
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: 47
  },
})

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Trang chính" component={MainScreen} options={{tabBarIcon: () => (<Image source={require('../../image/homeicon.png')} style = {{width:30,height:30}} />)}} />
      <Tab.Screen name="Giỏ" component={CartScreen} options={{tabBarIcon: () => (<Image source={require('../../image/carticon.png')} style = {{width:30,height:30}} />)}}/>
      <Tab.Screen name="Ship" component={ShipProduct} options={{tabBarIcon: () => (<Image source={require('../../image/ship.png')} style = {{width:55,height:35}} />)}}/>
      <Tab.Screen name="Tôi" component={ProfileScreen} options={{tabBarIcon: () => (<Image source={require('../../image/profileicon.jpg')} style = {{width:30,height:30}} />)}}/>
      
    </Tab.Navigator>
  );
}
export default MyTabs;