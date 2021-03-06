import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentification(){

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    const navigation = useNavigation();

  async  function handleSubmit(){

        if(!name)
            return Alert.alert('Me diz como chamar você  :)');
            
        await AsyncStorage.setItem('@plantmanager:user',name);
        navigation.navigate('Confirmation')
    }

    function handleInputBlur(){
        setIsFocused(false)
        setIsFilled(!!name);
    }

    function handleInputFocus(){
    setIsFocused(true)    
    }

    function handleInputChange(value:string){
        setIsFilled(!!value);
        setName(value);
    }


    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === 'ios' ? 'padding':'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View style={StyleSheet.content}>

                <View >
                <View style={StyleSheet.form}>
                    <Text style={styles.title} >
                        Como podemos {'\n'} chamar você?
                    </Text>
                    <Text style={styles.emoji}>
                        {isFilled ? '😀':'🙂'}
                    
                    </Text>

                    <TextInput style={
                        [
                        styles.input,
                    
               ( isFocused && isFilled) && {borderColor: colors.green}    
                        ]    
                } 
                    placeholder="digite seu nome"
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    onChangeText={handleInputChange}
                    >

                    </TextInput>
                    <View style={styles.footer}>
                    <Button title="Confirmar" onPress={handleSubmit} />
                   </View>
                    
                </View>
                </View>
            </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content:{
        flex:1,
        width:'100%'
    },
    form:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal: 54,
        alignItems: 'center'

    },
    emoji:{
        fontSize:44,
        textAlign: 'center'
    },
    input:{
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    title:{
        fontSize: 24,
        textAlign: 'center',
        color: colors.title,
        fontFamily: fonts.heading,
        marginTop: 20
    },
    footer:{
        marginTop:40,
        width:'100%',
        paddingHorizontal: 20
    }
})