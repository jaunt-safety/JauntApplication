import React, {useState} from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, KeyboardAvoidingView, ActivityIndicator} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import Constants from "expo-constants";
import { SERVER_URL } from "../../constants";
import ErrorPanel from "../../components/ErrorPanel";
const { manifest } = Constants;

const SignupScreen = ({navigation}) =>{
    const {height} = useWindowDimensions();
    const [studentData, setStudentData] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: '', 
        phoneno:'',
        fathername: '',
        mothername: ''
    })
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const checkIfAllFieldsAreValid = (studentData) =>{
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const nameRegex = /^[a-zA-Z]+$/;
        if (!emailRegex.test(studentData.email)) {
            setErrorMessage('Enter valid email address')
            return false;
        }
        else if (!nameRegex.test(studentData.name) || !nameRegex.test(studentData.fathername) || !nameRegex.test(studentData.mothername) ) {
            setErrorMessage('Enter only characters for names')
            return false;
        }
        else{
            setErrorMessage(null);
            return true;
        }
    }
    const onRegisterPressed = () =>{
        if(!checkIfAllFieldsAreValid(studentData))
            return;
        if(studentData.name === '' || studentData.email === '' || studentData.password === '' || studentData.cpassword === '' || studentData.phoneno === '' || studentData.fathername === '' || studentData.mothername === ''){
            setErrorMessage('All fields are mandatory')
        }
        else{
            if(studentData.password != studentData.cpassword){
                setErrorMessage('Password doesnt match');
                return;
            }
            else{
                setLoading(true);
                fetch(`${SERVER_URL}/verifyUser`, {
                    method: 'POST',
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(studentData)
                }).then(res => res.json()).then(
                    data => {
                       setLoading(false)
                       if(data.error){
                            setErrorMessage(data.error);
                       }
                       else{
                            alert(data.message);
                            navigation.navigate('Verification', { userData : data.studentData })
                       }
                    }
                );
            }
        }
    }
    const onSignIn = () =>{
        navigation.navigate("SignIn")
    }
    return (
    <KeyboardAvoidingView style={styles.mainview} behavior="padding" keyboardVerticalOffset={10}>
        {loading ? 
        (   <View style={{alignContent : 'center', justifyContent: 'center', height: '100%'}}>
                <ActivityIndicator size="large" color="white" />
            </View>
        ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} />
            {errorMessage &&  <ErrorPanel message={errorMessage}/>}
            <CustomInput placeholder="Name" setValue={(text)=> setStudentData({...studentData, name: text })} setErrorMessage={setErrorMessage} />
            <CustomInput placeholder="Emailid" setValue={(text)=> setStudentData({...studentData, email: text })} setErrorMessage={setErrorMessage}/>
            <CustomInput placeholder="Password"  setValue={(text)=> setStudentData({...studentData, password: text })} secureTextEntry setErrorMessage={setErrorMessage} />
            <CustomInput placeholder="Confirm Password" setValue={(text)=> setStudentData({...studentData, cpassword: text })} secureTextEntry setErrorMessage={setErrorMessage} />
            <CustomInput placeholder="phoneno" setValue={(text)=> setStudentData({...studentData, phoneno: text })} setErrorMessage={setErrorMessage} keyboardType="number-pad" />
            <CustomInput placeholder="Father name" setValue={(text)=> setStudentData({...studentData, fathername: text.trim() })} setErrorMessage={setErrorMessage} />
            <CustomInput placeholder="Mother name" setValue={(text)=> setStudentData({...studentData, mothername: text })} setErrorMessage={setErrorMessage} />
            <CustomButton text="Register" onPress={onRegisterPressed} />
            <CustomButton text="Already have an account? Sign in" onPress={onSignIn} type="textButton" />
        </ScrollView>
        )}
    </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    logo:{
        maxWidth:300,
        maxHeight:200,
        marginTop:60,
        alignSelf: 'center'
    },
    mainview:{
        width: '100%',
        height: '100%',
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

export default SignupScreen