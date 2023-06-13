import React from "react";
import {View, Image, Text, StyleSheet} from 'react-native';
import confetti from '../../../assets/images/confetti.png';
import feepayemnt from '../../../assets/images/money.png';
import notification from '../../../assets/images/notification.png';

const RenderRow = ({image, text}) => {
    return(
        <View style={styles.row}>
            <Image source={image} style={styles.rowimage} />
            <Text style={styles.rowText}>{text}</Text>
        </View>
    )
}

const NotificationPanel = () =>{
    return(
        <View style={styles.mainview}>
            <RenderRow image={notification} text="Driver just started from the school"/>
            <RenderRow image={confetti} text="Today is Raj's bday" />
            <RenderRow image={feepayemnt} text="Fee payment due on June 30"/>
        </View>
    )
}
const styles = StyleSheet.create({
    mainview:{
        width: '100%',
        height: 140,
        padding: 15,
        borderRadius: 20,
        backgroundColor: 'rgba(205,232,181,0.6)',
        marginTop: 25,
    },
    rowimage:{
        width: 23,
        height:23,
        marginRight:5
    },
    rowText:{
        fontSize: 18,
        fontWeight: 500
    },
    row:{
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 3, 
        marginTop: 4
    }
})

export default NotificationPanel;