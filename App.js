import React,{useEffect, useState} from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  WorldStats from './screen/WorldStats';
import Country from "./screen/Country";
import Favorite  from "./screen/Favorite";
import CountryDetail from './screen/CountryDetail'
import axios from 'axios';
import {Ionicons} from '@expo/vector-icons'
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default function App() {
  const [world, setworld] = useState([])
  const [ready, setready] = useState(false)
  const [country, setcountry] = useState()
  
  // useEffect(async () => {
  //   await Font.loadAsync({
  //     Roboto: require('native-base/Fonts/Roboto.ttf'),
  //     Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  //     ...Ionicons.font,
  //   });
  //   setready(true);
  
  // }, [])


  // const options = {
  //   method: 'GET',
  //   url: 'https://covid-19-data.p.rapidapi.com/totals',
  //   headers: {
  //   'x-rapidapi-key': '1bd2b7bdbemsh6c876cb4419ba46p163b92jsnd9c35ee49748',
  //   'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
  //   }
  // };

  // useEffect(() => {
  //   axios.request(options).then(function (response) {
  //     setworld(response.data);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // }, [])


  const options = {
    method: 'GET',
    url: 'https://world-population.p.rapidapi.com/allcountriesname',
    headers: {
      'x-rapidapi-key': '1bd2b7bdbemsh6c876cb4419ba46p163b92jsnd9c35ee49748',
      'x-rapidapi-host': 'world-population.p.rapidapi.com'
    }
  };
  useEffect(() => {
    axios.request(options).then(function (response) {
      setcountry(response.data.body.countries);
    }).catch(function (error) {
      console.error(error);
    });
  }, [])
  
  const StackNavi =({navigation})=>{
    return(
    <Stack.Navigator>
      <Stack.Screen name="Country" 
      component={(props)=><Country {...props} countries={country}/>}
      />
      <Stack.Screen name="detail" 
      component={CountryDetail}
      />
    </Stack.Navigator>
    )}
  


  // if (!ready) {
  //   return (
  //     <AppLoading/>
  //   );
  // }
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerType={'slide'}
        overlayColor="transparent"
        drawerContentOptions={{
          activeTintColor: '#16a080',
        }}
      >
        <Drawer.Screen name="World" component={(props)=><WorldStats {...props} data={world}/>} />
        <Drawer.Screen name="Country" component={StackNavi} />
        <Drawer.Screen name="Favorite" component={Favorite} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
