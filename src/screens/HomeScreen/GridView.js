import React from "react";
import {View, Image, Text, StyleSheet, Pressable} from 'react-native';
import driver from '../../../assets/images/driver.png';
import feepayment from '../../../assets/images/money.png';
import gpstracking from '../../../assets/images/delivery.png';
import feedback from '../../../assets/images/feedback.png';

const GridView = ({navigation}) =>{
    const onFeedbackClicked = () => {
        navigation.navigate('FeedbackScreen');
    }
    const onDriverClicked = () => {
        navigation.navigate('DriverScreen');
    }
    const onNavigationClicked = () => {
        navigation.navigate('TrackScreen');
    }
    const GridItem = ({image, text, onClick}) => {
        return(
            <Pressable style={styles.gridItem} onPress={onClick}>
                <Image source={image} style={styles.rowimage} />
                <Text style={styles.rowText}>{text}</Text>
            </Pressable>
        )
    }
    return(
        <View style={styles.mainview}>
            <View style={styles.firstrow}>
                <GridItem image={gpstracking} text="Track Driver" onClick={onNavigationClicked} />
                <GridItem image={driver} text="Driver Details" onClick={onDriverClicked}/>
            </View>
            <View style={styles.secondrow}>
                <GridItem image={feedback} text="Feedback" onClick={onFeedbackClicked}/>
                <GridItem image={feepayment} text="Fee payment"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainview:{
        marginTop: 5,
        width: '100%',
        marginLeft: 3
    },
    firstrow:{
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
    },
    secondrow:{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    gridItem:{
        width: '48%',
        height: 160,
        backgroundColor: 'rgba(205,232,181,0.6)',
        marginRight: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rowimage:{
        width: 70,
        height:70,
        marginBottom:10
    },
    rowText:{
        fontSize: 18,
        fontWeight: 600
    },
})

export default GridView;