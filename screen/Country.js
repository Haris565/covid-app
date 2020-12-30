import React from 'react'
import { StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Left,Button,Body,Title } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';

const Country = ({navigation, countries}) => {
    return (
      
        <Container>
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
        <Content>
          <Card>
              {countries.map((item)=>{
                  return (<CardItem key={item} style={{borderBottomColor:'#2d9b81', borderBottomWidth:2,}  }>
                        <Left>
                            <TouchableOpacity  onPress={()=>{navigation.navigate('detail' , {
                            countryName : item,
                            })}}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        </Left>
                   </CardItem>)
              })}
          {/* <FlatList
                data={countries}
                renderItem={({item})=> {
                    return ( );
                }}
                keyExtractor={item => item}
            /> */}
          
           </Card>
        </Content>
      </Container>
        

    )
}

export default Country

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
