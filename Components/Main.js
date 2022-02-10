import React, {Component} from "react";
import { View, Text, Button } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Main({ item, deleteItem, setIsDone, setUnDone, showDetail }) {

  class Info extends React.Component {

    constructor(props) {
      super(props);
      this.state = {isHidden: true};
      this.onPress = this.onPress.bind(this);
    }

    onPress() {
      this.setState({isHidden: !this.state.isHidden})
    }

    render() {
      return (
        <View>
          {this.state.isHidden ? <Text>Test</Text> : null}
  
          <MaterialIcons
          title={this.state.isHidden ? "SHOW" : "HIDE"}         
          onPress={this.onPress}
                name="info" size={24} color="black" />
        </View>
      );
    }
  }


  return (

    <ComponentContainer>
      <ListContainer>
      {item.state == 1 ? 
        <CirlceContainer >
          <Entypo  onPress={() => setUnDone(item, item.key)} name="check" size={20} color="green" />
        </CirlceContainer>
        :
        <CirlceContainer >
            <Entypo  onPress={() => setIsDone(item, item.key)} name="circle" size={20} color="black" />
        </CirlceContainer> 
      }
        <View>
          <TextItem>{item.value}</TextItem>
          <TextDate>Rappel</TextDate>
          {item.state == 1 ? <TextDateGreen>Terminée</TextDateGreen>: null }
          {/* <TextDate> Rappel</TextDate> */}
        </View>
        <View> 
          <IconContainer >
            <Info></Info>
                <MaterialIcons onPress={() => deleteItem(item.key)} name="delete" size={24} color="red" />
            </IconContainer>
        </View>
      </ListContainer>
      
    </ComponentContainer>
  );
}

const Stack = createNativeStackNavigator();
  
const ListContainer = styled.TouchableOpacity`
  background-color: whitesmoke;
  height: auto;
  width: 350px;
  margin-bottom: 10px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const ComponentContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  height: auto;
  width: auto;
`;

const TextItem = styled.Text`
  color: black;
  width: 260px;
  height: auto;
  font-size: 20px;
  margin-top: 10px;
  margin-right: 20px;
  font-family: RobotoRegular;
`;

const TextDate = styled.Text`
  color: goldenrod;
  font-size: 15px;
  margin-right: 20px;
  font-family: RobotoRegular;
  border-radius: 10px;
  width: 100px;
`;


const TextDateGreen = styled.Text`
  color: green;
  font-size: 15px;
  margin-right: 20px;
  font-family: RobotoRegular;
  border-radius: 10px;
  width: 100px;
`;

const IconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  right: 10px;
  margin-top: 2%;
  height: 60px;
  border-radius: 10px;
`;

const CirlceContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 5px;
  margin-right: 6px;
`;