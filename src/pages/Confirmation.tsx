import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation(){
    const navigation = useNavigation();

    function handleMoveOn(){
        navigation.navigate('PlantSelect');
    }

    return(
        <SafeAreaView style={styles.container}>

            <View style={StyleSheet.content}>

                <Text style={styles.title}>Prontinho</Text>

                <Text style={StyleSheet.emoji}>🙂</Text>

                <Text style={StyleSheet.subtitle}>
                    Agora vamos começar a cuidar das suas 
                    plantinhas com muito cuidado.
                </Text>
            </View>

            <View style={ styles.footer } >

            <Button title="Começar" onPress={handleMoveOn} />
            </View>
 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title:{
        fontSize:22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight:38,
        marginTop:15

    },
    subtitle:{
        fontFamily: fonts.text,
        textAlign:'center',
        fontSize:17,
        paddingVertical:10,
        color:colors.heading,
    },
    emoji:{
        fontSize:78
    },
    footer:{
        width:'100%',
        
        paddingHorizontal:50,
    },
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        padding:30
        

    }
})