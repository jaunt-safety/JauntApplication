import React, {useState} from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { SERVER_URL } from "../../constants";

const ForgotPassword = ({ navigation, route }) =>{
    const {height} = useWindowDimensions();
    const { verificationCode, emailId } = route.params;
    const [confirmationCode, setConfirmationCode]= useState();
    const [newPassword , setNewPassword] = useState();
    const [newConfirmPassword , setNewConfirmPassword] = useState();
    const [errorMessage, setErrorMessage] = useState(null);
    const onConfirmPressed = () =>{
        if(String(confirmationCode) !== String(verificationCode)){
            setErrorMessage('Enter valid code')
        } else{
            if(newPassword !== newConfirmPassword){
                setErrorMessage('Password does not match');
                return;
            }else{
                const reqbody = {email: emailId, password: newPassword};
                fetch(`${SERVER_URL}/updatePassword`, {
                    method: 'POST',
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(reqbody)
                }).then(res => res.json()).then( data => {
                    if(data.error){
                        setErrorMessage(data.error);
                    }
                    else{
                        alert('password changed succesfully')
                        navigation.navigate('SignIn')
                    }
                })
            }
            
        }
    }
    const onSignIn = () =>{
        navigation.navigate('SignIn');
    }
    return (
        <View style={styles.mainview}>
            <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} />
            <Text style={styles.confirmationText}>A confirmation code has been sent to your mail id.</Text>
            {errorMessage &&  (<Text style={styles.errorMessage}>{errorMessage}</Text>)}
            <CustomInput placeholder="Enter your confirmation code" value={confirmationCode} setValue={setConfirmationCode} />
            <CustomInput placeholder="New Password" value={newPassword} setValue={setNewPassword} />
            <CustomInput placeholder="Confirm New Password" value={newConfirmPassword} setValue={setNewConfirmPassword} />
            <CustomButton text="Confirm" onPress={onConfirmPressed} />
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
        backgroundColor: 'rgb(100,198,102)',
    },
    confirmationText:{
        fontSize: 14,
        fontWeight: 'bold',
        padding: 4
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

export default ForgotPassword