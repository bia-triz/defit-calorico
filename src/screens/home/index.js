//1 passo - importar o react
import React,{use, useState} from "react";

//2 passo - importar os componentes da tela
import {
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    View,
//    Alert,
    
} from 'react-native';

//3 Passo - criar a funçao que cria a tela
export default function Home(){
    return(
    <SafeAreaView>
        <Text>Défit Calórico</Text>

        <TextInput placeholder="Idade"/>

        <TextInput placeholder="Peso"/>

        <TextInput placeholder="Altura"/>
       

        <TouchableOpacity>Calcular</TouchableOpacity>

 