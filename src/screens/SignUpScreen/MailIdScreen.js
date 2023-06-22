import { Image, StyleSheet, View, Text, useWindowDimensions } from "react-native";
import Logo from '../../../assets/images/logo.png';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import { SERVER_URL } from "../../constants";

const MailIdScreen = ({navigation}) =>{
    const {height} = useWindowDimensions();
    const [emailId, setEmailId]= useState();
    const [errorMessage, setErrorMessage] = useState('');
    const sendVerfication = () =>{
        if(emailId === ''){
            setErrorMessage('Please enter emaild');
            return;
        }
        else{
            const emailBody = {email : emailId}
            fetch(`${SERVER_URL}/sendVerificationCode`, {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(emailBody)
            }).then(res => res.json()).then(data => {
                if(data.error){
                    setErrorMessage('Invalid credentilas');
               }
               else{
                    alert(data.message);
                    navigation.navigate('ForgotScreen', { verificationCode : data.verification, emailId: emailId })
               }
            })
        }
    }
    return(
        <View style={styles.mainview}>
            <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} />
            {errorMessage &&  
                (<Text style={styles.errorMessage}>{errorMessage}</Text>
            )}
            <Text style={styles.confirmationText}>Enter your mail id.</Text>
            <CustomInput placeholder="Email Id" value={emailId} setValue={setEmailId} />
            <CustomButton text="Send Verification Code" onPress={sendVerfication} />
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
    }
})

export default MailIdScreen;