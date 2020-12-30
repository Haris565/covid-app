import React, { useState , useEffect} from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import {  Left, Body, Button, Title } from 'native-base';
import { StyleSheet, FlatList} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const WorldStats = ({navigation, data}) => {
    const dateCon = (date) => {
        let d = date.split("T")[0]
        return(d)
    }
    return (
        <Container >
             <Header transparent noShadow style={{backgroundColor: '#2d9b81',}}>
                <Left>
                    <Button transparent onPress={()=>navigation.toggleDrawer()}>
                        <Ionicons name='menu' size={36} color='white' />
                    </Button>
                </Left>
                <Body>
                    <Title style={{color:"white"}}>Covid</Title>
                </Body>
              </Header>
            <Content >
                <Card>
                    {/* <CardItem>
                        <Left><FontAwesome name="dot-circle-o" size={24} color="#0d6efd" /></Left>
                        <Text style={{color:'#0d6efd'}}>confirmed cases</Text>
                        <Right>
                        <Text style={{color:'#0d6efd'}}>{data[0].confirmed}</Text>
                        </Right>
                    </CardItem> 
                   
                    <CardItem>
                        <Left><FontAwesome name="dot-circle-o" size={24} color="green" /></Left>
                        <Text style={{color:'green'}}>recovered</Text>
                        <Right>
                        <Text style={{color:'green'}}>{data[0].recovered}</Text>
                        </Right>
                    </CardItem> 
                    <CardItem>
                        <Left><FontAwesome name="dot-circle-o" size={24} color="red" /></Left>
                        <Text style={{color:'red'}}>critical</Text>
                        <Right>
                        <Text style={{color:'red'}}>{data[0].critical}</Text>
                        </Right>
                    </CardItem> 
                    <CardItem>
                        <Left ><FontAwesome name="dot-circle-o" size={24} color="black" /></Left>
                        <Text style={{color:'black'}}>deaths</Text>
                        <Right>
                        <Text style={{color:'black'}}>{data[0].deaths}</Text>
                        </Right>
                    </CardItem>  
                    <CardItem>
                        <Left><FontAwesome name="dot-circle-o" size={24} color="black" /></Left>
                        <Text>Last Update</Text>
                        <Right>
                            <Text>{dateCon(data[0].lastUpdate)}</Text>
                        </Right>
                    </CardItem>  */}
                </Card>
            </Content>
      </Container>
    )
}

export default WorldStats

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
