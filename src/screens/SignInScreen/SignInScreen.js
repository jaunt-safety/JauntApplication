import React, {useState} from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions, ActivityIndicator} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { SERVER_URL } from "../../constants";
import ErrorPanel from "../../components/ErrorPanel";

const SignInScreen = ({navigation}) =>{
    const {height} = useWindowDimensions();
    const [errorMessage, setErrorMessage] = useState();
    const [studentData, setStudentData] = useState({
        name: '',
        email: '',
    })
    const [loading, setLoading] = useState(false);
    const onSignInPressed = () =>{
        if(studentData.email === '' || studentData.password === '' ){
            setErrorMessage('All fields are mandatory')
        }
        else{
            setLoading(true)
            fetch(`${SERVER_URL}/signin`, {
                    method: 'POST',
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(studentData)
                }).then(res => res.json()).then( data => {
                    setLoading(false)
                    if(data.error){
                        setErrorMessage(data.error);
                   }
                   else{
                        navigation.navigate('Home')
                   }
                })
        }
    }
    const onForgotPasswordPressed = () =>{
       navigation.navigate("MailIdScreen")
    }
    const onSignUp = () =>{
       navigation.navigate("Signup")
    }
    return (
        <View style={styles.mainview}>
            {loading ? (
                <View style={{alignItems : 'center,', justifyContent: 'center', height: '100%'}}>
                    <ActivityIndicator size="large" color="white" />
                </View>
            ) : (
             <>   
                <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} />
                {errorMessage &&  <ErrorPanel message={errorMessage}/>}
                <CustomInput placeholder="Emailid" setValue={(text)=> setStudentData({...studentData, email: text })} setErrorMessage={setErrorMessage}/>
                <CustomInput placeholder="Password" setValue={(text)=> setStudentData({...studentData, password: text })} secureTextEntry setErrorMessage={setErrorMessage} />
                <CustomButton text="Sign In" onPress={onSignInPressed} />
                <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="textButton" />
                <CustomButton text="Don't have an account? Sign up" onPress={onSignUp} type="textButton" />
            </>
            )}
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
        backgroundColor: 'rgb(100,198,102)',
    },
    errorMessage:{
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 10
    }
})

export default SignInScreen