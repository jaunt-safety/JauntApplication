import { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, useWindowDimensions } from "react-native"
import Logo from '../../../assets/images/logo.png';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { SERVER_URL } from "../../constants";

const Verification = ({ navigation, route }) => {
    const { userData } = route.params;
    const [code, setCode] = useState('XXX');
    const [actualCode, setActualCode] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const {height} = useWindowDimensions();

    useEffect(()=>{
        setActualCode(userData?.VerificationCode)
    },[])

    const onRegisterPressed = () =>{
        if(code === 'XXX' || code === ''){
            setErrorMessage('Please enter the code');
            return;
        }
        else if (String(code)===String(actualCode)){
            const studentData = {
                name: userData?.name,
                email: userData?.email,
                password: userData?.password,
                phoneno: userData?.phoneno,
                fathername: userData?.fathername,
                mothername: userData?.mothername
            }
            fetch(`${SERVER_URL}/signup`,{
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(studentData)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.message === 'User Registered Succesfully'){
                    alert(data.message);
                    navigation.navigate('SignIn')
                }
            })
        }
        else if (code != actualCode){
            setErrorMessage('Incorrect code');
            return;
        }
    }

    return(
        <View style={styles.mainview}>
            <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} />
            {errorMessage &&  (<Text style={styles.errorMessage}>{errorMessage}</Text>)}
            <Text>Please enter the verification code</Text>
            <CustomInput placeholder="Verification Code" value={code} setValue={setCode}/>
            <CustomButton text="Register" onPress={onRegisterPressed} />
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

export default Verification;