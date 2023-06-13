import React, {useState} from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../assets/images/logo.png';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import facebook from '../../assets/images/facebook.png';
import google from '../../assets/images/google.png'

const SignupScreen = ({navigation}) =>{
    const {height} = useWindowDimensions();
    const [emailId, setEmailId]= useState();
    const [password, setPassword] = useState();
    const [name, setName]= useState();
    const [retypePassword, setRetypePassword] = useState();
    const onRegisterPressed = () =>{
        console.warn('Sign in');
    }
    const onSignInGoogle = () =>{
        console.warn('Google');
    }
    const onSignInFacebook = () =>{
        console.warn('Facebook');
    }
    const onSignIn = () =>{
        navigation.navigate("SignIn")
    }
    return (
    <View style={styles.mainview}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} />
        <CustomInput placeholder="Name" value={name} setValue={setName} />
        <CustomInput placeholder="Emailid" value={emailId} setValue={setEmailId} />
        <CustomInput placeholder="Password" value={password} setValue={setRetypePassword} secureTextEntry />
        <CustomInput placeholder="Retype Password" value={retypePassword} setValue={setPassword} secureTextEntry />
        <CustomButton text="Register" onPress={onRegisterPressed} />
        <CustomButton text="Sign In With Google" onPress={onSignInGoogle} style={{marginVertical:60}} icon={google} />
        <CustomButton text="Sign In With Facebook" onPress={onSignInFacebook} icon={facebook} />
        <CustomButton text="Don't have an account? Sign in" onPress={onSignIn} type="textButton" />
    </View>)
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
        backgroundColor: 'rgb(100,198,102)',
    }
})

export default SignupScreen