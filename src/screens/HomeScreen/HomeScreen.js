import React from "react";
import {View, Image, Text, StyleSheet, Pressable} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import user from '../../../assets/images/user.png';
import question from '../../../assets/images/question.png';
import calendar from '../../../assets/images/calendar.png';
import NotificationPanel from "./NotificationPanel";
import GridView from "./GridView";


const HomeScreen = ({navigation}) =>{
    
    const navigateToHelp = () =>{
        navigation.navigate("HelpScreen")
    }
    const navigateToUser = () =>{
        navigation.navigate("UserScreen")
    }
    return(
        <View style={styles.mainview}>
            <Image source={Logo} style={styles.logo} />
            <View style={styles.grid}>
                <View>
                    <Text style={styles.title}>Hi Ryan</Text>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={calendar} style={styles.calendar} />
                        <Text style={styles.calendarText}>3rd June 2023</Text>
                    </View>
                </View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Pressable onPress={navigateToHelp}><Image source={question} style={styles.icon} /></Pressable>
                    <Pressable onPress={navigateToUser}><Image source={user} style={styles.icon} /></Pressable>
                </View>
            </View>
            <NotificationPanel />
            <GridView navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        width:110,
        maxHeight:40,
        marginTop:40
    },
    mainview:{
        width: '100%',
        height: '100%',
        padding: 20,
        backgroundColor: 'rgb(100,198,102)',
    },
    grid:{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 16,
        marginLeft: 10
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
    },
    icon:{
        width:35,
        height:35,
        marginRight: 7
    },
    calendar:{
        width: 12,
        height:12,
        marginRight:2
    },
    calendarText:{
        fontWeight: 'bold',
    }
})

export default HomeScreen;