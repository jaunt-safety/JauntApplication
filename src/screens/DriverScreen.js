import React, {useState} from "react";
import {View, Image, Text, StyleSheet, Pressable, SafeAreaView} from 'react-native';
import driver from '../../assets/images/driver.png';
import { Button } from "./HelpScreen";

const DriverScreen = ({navigation}) =>{
    const callDriver=()=>{
        navigation.navigate('Home')
    }
    const callSchool=()=>{
        navigation.navigate('Home')
    }
    return(
        <SafeAreaView style={styles.mainview}>
            <Image source={driver} style={styles.InfoImage}/>
            <Text style={styles.InfoText}>Arjun Ramachadra</Text>
            <Text style={styles.schoolText}>Rockstar play school</Text>
            <View style={{width: '100%'}}>
                <Button text="Call Driver" onPress={callDriver} width={'95%'}/>
                <Button text="Call School" onPress={callSchool} width={'95%'}/>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    mainview: {
        backgroundColor: 'rgb(100,198,102)',
        height:'100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    InfoImage:{
        height: 300,
        width: 300
    },
    InfoText:{
        marginTop: 20,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 600,
        padding: 20
    },
    schoolText:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 40
    },
})

export default DriverScreen;