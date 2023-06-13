import React, {useState} from "react";
import {View, Image, Text, StyleSheet, Pressable, SafeAreaView} from 'react-native';
import { Button } from "./HelpScreen";
import tracking from '../../assets/images/tracking-app.png';



const TrackScreen = ({navigation}) =>{
    const homeClicked = () =>{
        navigation.navigate('Home');
    }
    return(
        <SafeAreaView style={styles.mainview}>
            <Image source={tracking} style={styles.InfoImage}/>
            <View style={{width: '100%', marginTop: 40}}>
                <Button text="Return to Home Screen" width={'95%'} onPress={homeClicked}/>
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
        height: 400,
        width: 400
    },
})

export default TrackScreen;
