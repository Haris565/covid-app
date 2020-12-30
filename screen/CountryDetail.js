import React,{useEffect, useState} from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import {  Left, Body, Button, Title } from 'native-base';
import axios from "axios";
import { Item } from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const CountryDetail = ({navigation, route}) => {
    const [select, setselect] = useState()
    let id= route.params.countryName;

    const options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/country',
        params: {name: `${id}`},
        headers: {
          'x-rapidapi-key': '1bd2b7bdbemsh6c876cb4419ba46p163b92jsnd9c35ee49748',
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
        }
      };
    useEffect(() => {
        axios.request(options).then(function (response) {
            setselect(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: id
        });
      }, [navigation]);


      const dateCon = (date) => {
        let d = date.split("T")[0]
        return(d)
    }


      return (
        
            <Card style={{textAlign:'center' , justifyContent:'center' , alignItems:'center'}}>
                    <CardItem>
                        <Right>
                            <TouchableOpacity>
                                <FontAwesome name="star-o" size={24} color="#2d9b81" />
                            </TouchableOpacity>
                        </Right>
                    </CardItem> 
                    <CardItem>
                        <Left><FontAwesome name="dot-circle-o" size={24} color="#0d6efd" /></Left>
                        <Text style={{color:'#0d6efd'}}>confirmed cases</Text>
                        <Right>
                        <Text style={{color:'#0d6efd'}}>{select[0].confirmed}</Text>
                        </Right>
                    </CardItem> 
                   
                    <CardItem>
                        <Left><FontAwesome name="dot-circle-o" size={24} color="green" /></Left>
                        <Text style={{color:'green'}}>recovered</Text>
                        <Right>
                        <Text style={{color:'green'}}>{select[0].recovered}</Text>
                        </Right>
                    </CardItem> 
                    <CardItem>
                        <Left><FontAwesome name="dot-circle-o" size={24} color="red" /></Left>
                        <Text style={{color:'red'}}>critical</Text>
                        <Right>
                        <Text style={{color:'red'}}>{select[0].critical}</Text>
                        </Right>
                    </CardItem> 
                    <CardItem>
                        <Left ><FontAwesome name="dot-circle-o" size={24} color="black" /></Left>
                        <Text style={{color:'black'}}>deaths</Text>
                        <Right>
                        <Text style={{color:'black'}}>{select[0].deaths}</Text>
                        </Right>
                    </CardItem>  
                    <CardItem>
                        <Left><FontAwesome name="dot-circle-o" size={24} color="gray" /></Left>
                        <Text>Last Update</Text>
                        <Right>
                            <Text>{dateCon(select[0].lastUpdate)}</Text>
                        </Right>
                    </CardItem> 
            </Card>
   
           

        
    )
}

export default CountryDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    view:{
        width:'90%',
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{width:0 , height:2},
        shadowRadius:6,
        shadowOpacity:0.7,
        backgroundColor:'white',
        elevation: 9,
        padding: 20,
        borderRadius:5,
        height:350,
        backgroundColor:'#f5f5f5'
    },
})

