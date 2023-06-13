import React, {useState} from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../assets/images/logo.png';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import facebook from '../../assets/images/facebook.png';
import google from '../../assets/images/google.png'

const ForgotPassword = () =>{
    const {height} = useWindowDimensions();
    const [emailId, setEmailId]= useState();
    const [password, setPassword] = useState();
    const [confirmationCode, setConfirmationCode]= useState();
    const [retypePassword, setRetypePassword] = useState();
    const onConfirmPressed = () =>{
        console.warn('Confirm');
    }
    const onResendPressed = () =>{
        console.warn('resend');
    }
    const onSignIn = () =>{
        console.warn('Sign in');
    }
    return (
    <View style={styles.mainview}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} />
        <Text>A confirmation code has been sent to your mail id.</Text>
        <CustomInput placeholder="Enter your confirmation code" value={confirmationCode} setValue={setConfirmationCode} />
        <CustomButton text="Confirm" onPress={onConfirmPressed} />
        <CustomButton text="Resend code" onPress={onResendPressed} style={{marginVertical:10}} />
        <CustomButton text="Back to Sign in" onPress={onSignIn} type="textButton" />
    </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        maxWidth:300,
        maxHeight:200,
        marginTop:60
    },
    mainview:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        padding: 20,
        
    }
})

export default ForgotPassword