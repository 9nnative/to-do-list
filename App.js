import AddInput from "./Components/AddInput";
import Main from "./Components/Main";
import Empty from "./Components/Empty";
import Header from "./Components/Header";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView, FlatList } from 'react-native';
import Swipeout from 'react-native-swipeout';
import * as Font from "expo-font";
import styled from 'styled-components';
import Toast from 'react-native-toast-message';


const getFonts = () =>
Font.loadAsync({
  "RobotoRegular": require("./assets/Roboto/Roboto-Regular.ttf"),
  "RobotoBold": require("./assets/Roboto/Roboto-Bold.ttf"),
});




export default function App() {
  // const renderItem = ({ item }) => <Item title={item.title} />;
  
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [data, setData] = useState([]);

  const submitHandler = (value) => {
    Toast.show({
      type: 'success',
      text1: 'Succès',
      text2: 'Tâche créée ! ✅'
    });
    setData((prevTodo) => {
      return [
        {
          value: value,
          state: 0,
          key: Math.random().toString(),
        },
        ...prevTodo,
      ];
    });
  };

  const deleteItem = (key) => {
    Toast.show({
      type: 'success',
      text1: 'Succès',
      text2: 'Tâche supprimée ! ✅'
    });
    setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };

  const setIsDone = (item, key) => {
    setData((prevTodo) => {
      return [
        {
          value: item.value,
          state: 1,
          key: item.key,
        },
        ...prevTodo.filter((todo) => todo.key != key),
      ];
    });
  }

  function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }


  const setUnDone = (item, key) => {
    setData((prevTodo) => {
      return [
        {
          value: item.value,
          state: 0,
          key: item.key,
        },
        ...prevTodo.filter((todo) => todo.key != key),
      ];
    });
  }

  if (fontsLoaded) {
  return (
    <ComponentContainer>
    <View>
      <StatusBar barStyle="light-content" backgroundColor="midnightblue" />
    </View>
    <Toast />
      <FlatList
        data={data}
        ListHeaderComponent={() => <Header />}
        ListEmptyComponent={() => <Empty />}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Main item={item} deleteItem={deleteItem} setIsDone={setIsDone} setUnDone={setUnDone}
         />}
      />
      
      <View>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
          <AddInput style={styles.textInput} submitHandler={submitHandler} />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  </ComponentContainer>
  );
}else {
  return (
    <AppLoading
      startAsync={getFonts}
      onFinish={() => {
        setFontsLoaded(true);
      }}
      onError={console.warn}
    />
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});

const ComponentContainer = styled.View`
  background-color: midnightblue;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


