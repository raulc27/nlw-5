import React from 'react';
import { StyleSheet, View } from 'react-native';

export function Header(){
    return(
        <View style={StyleSheet.container}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:20,
        backgroundColor: colors.red
    }
})