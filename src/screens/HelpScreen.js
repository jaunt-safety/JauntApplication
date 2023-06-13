import React, {useState} from "react";
import {View, Image, Text, StyleSheet, Pressable} from 'react-native';
import navigation from '../../assets/images/tracking-app.png';
import driver from '../../assets/images/driver.png';
import feepayment from '../../assets/images/money.png'
import feedback from '../../assets/images/feedback.png';
import notification from '../../assets/images/notification.png';
import CustomButton from "../components/CustomButton";

const helpDetails = [
    {
        text: 'You will be able to track the driver in real-time',
        image: navigation,
        position: 0
    },
    {
        text: 'You will be able to make the hassle-free payments',
        image: feepayment,
        position: 1
    },
    {
        text: 'You will be able to provide the feedback about transport to school directly',
        image: feedback,
        position:2
    },
    {
        text: 'You will receive real time notifications about the bus',
        image: notification,
        position: 3
    },
    {
        text: 'You will be shoow the driver photo before give your child to driver',
        image: driver,
        position: 4
    }
]

export const Button = ({text, onPress, width}) =>{
    return(
        <Pressable onPress={onPress} style={[styles.buttonContainer, {width, marginLeft : 10}]}>
           <Text style ={styles.button}>{text}</Text>
        </Pressable>
    )
}


const InfoScreen = ({data, setCount, count, navigation}) =>{
    const onNextPressed=()=>{
        setCount(count+1);
    }
    const onPrevPressed=()=>{
        setCount(count-1);
    }
    return(
        <View style={{alignItems: 'center', marginTop: 25, padding: 20,}}>
            <Image source={data.image} style={styles.InfoImage}/>
            <Text style={styles.InfoText}> {data.text}</Text>
            <View style={{display: 'flex', flexDirection:'row'}}>
                {data.position!==0 && (
                    <Button text="Previous" onPress={onPrevPressed} width={data.position===4 ? '90%' : '45%'}/>
                )}
                {data.position!==4 && (
                    <Button text="Next" onPress={onNextPressed} width={data.position===0 ? '90%' : '45%'}/>
                )}
            </View>
        </View>
    )
}

const HelpScreen = ({navigation}) =>{
    const [count, setCount] = useState(0);
    const onBackPressed=()=>{
        navigation.navigate("Home")
    }
    return(
        <View style={styles.mainview}>
            <InfoScreen data={helpDetails[count]} setCount={setCount} count={count} navigation={navigation}></InfoScreen>
            <Button text="Go Back to home" onPress={onBackPressed} width={'95%'}/>
        </View>
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
        marginTop: 90,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 600,
        padding: 20
    },
    button:{
        color:'white',
        fontWeight: 'bold',
    },
    buttonContainer:{
        borderRadius: 10,
        alignItems:'center',
        height:50,
        padding: 15,
        backgroundColor: 'rgba(56,87,28,0.6)', 
        marginVertical:10,
    }
})

export default HelpScreen;