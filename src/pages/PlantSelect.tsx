import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { EnvironmentButton } from '../components/EnvironmentButton';
import { Header } from '../components/Header';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function PlantSelect(){
    return(
        <View style={styles.container}>

            <View style={styles.header} >
            <Header/>

            <Text style={styles.title} >Em qual ambiente</Text>
            <Text style={styles.subtitle} >você quer colocar sua planta</Text>
            </View>


            <View>
                <FlatList 
                    data={[1,2,4,5]}
                    renderItem={({item})=>(
                        <EnvironmentButton 
                        title="cozinha"
                        active 
                        />
                    )}
                    contentContainerStyle={styles.environmentList}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>


           

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.background
    },
    title:{
        fontSize:17,
        color: colors.heading,
        fontFamily:fonts.heading,
        lineHeight:20,
        marginTop:15
    },
    subtitle:{
        fontFamily: fonts.text,
        fontSize:17,
        lineHeight:20,
        color:colors.heading

    },
    header:{
        paddingHorizontal:30
    },
    environmentList:{
        height:40,
        justifyContent:'center',
        paddingBottom:5,
        marginLeft:32,
        marginVertical:32
    }
})