import React, {useState} from "react";
import { View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";
import { NavigationContainer } from '@react-navigation/native';

export default function Detail({ item, deleteItem, setIsDone, setUnDone, navigation }) {

    return (
        <ComponentContainer name="Details">
            {item.key}
        </ComponentContainer>
    );
}