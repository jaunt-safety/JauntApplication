import React from "react";
import {View, Text, Pressable, StyleSheet, Image, TextInput} from 'react-native';
import user from '../../../assets/images/user.png';
import back from '../../../assets/images/left.png'

const PhotoScreen = ({navigation}) =>{
    const onBackPressed = () => {
        navigation.navigate('UserScreen')
    }
    return (
        <View style={styles.mainview}>
            <View style={styles.userView}>
              <Pressable onPress={onBackPressed}>
                <View style={{marginTop :40}}>
                    <Image source={back} style={styles.backIcon}/>
                </View>
              </Pressable>
              <View style={styles.photosView}>
                <View style={{alignContent: 'center', alignItems: 'center', marginTop: 30}}>
                    <Image source={user} style={styles.userImage}/>
                    <Text style={styles.textStyle}>Father</Text>
                    <Text>Ravi</Text>
                </View>
                <View style={{alignContent: 'center', alignItems: 'center', marginTop: 60}}>
                    <Image source={user} style={styles.userImage}/>
                    <Text>Mother</Text>
                    <Text>Vani</Text>
                </View>
              </View>
            </View>
        </View>
        )
}

const styles = StyleSheet.create({
    mainview:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'rgb(100,198,102)',
    },
    userImage:{
        height: 200,
        width: 200,
    },
    userView:{
        padding:20,
        height: '40%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    photosView:{
        height: '100%'
    },
    input:{
        color:'black',
        marginTop: 15
    },
    backIcon:{
        width: 30,
        height:30,
        display: 'flex',
        alignItems: 'flex-start'
    },
    textStyle:{
        fontSize: 18,
        fontWeight: '500'
    }
})

export default PhotoScreen;

