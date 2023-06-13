import React from 'react'
import {View, Text, Pressable, StyleSheet, Image} from 'react-native'

const CustomButton = ({text, onPress, type = "primary", icon}) => {
    return(
        <Pressable onPress={onPress} style={icon ? [styles.container,styles[`container_${type}`],{flexDirection: 'row'}]: [styles.container,styles[`container_${type}`]]}>
           {icon && (<Image source={icon} style={{height:30, width: 30, marginRight: 10}} />)}
           <Text style ={[styles.button, styles[`button_${type}`]]}>{text}</Text>
        </Pressable>
    )
}

const styles =  StyleSheet.create({
    container:{
        width:'100%',
        borderRadius: 10,
        alignItems:'center',
        height:50,
        padding: 15,
    },
    container_textButton:{
        marginVertical:5,
    },
    container_primary:{
        backgroundColor: 'rgba(56,87,28,0.6)', 
        marginVertical:10,
    },
    button:{
        color:'white',
        fontWeight: 'bold',
    },
    button_textButton: {

    },
    button_primary:{

    }
})

export default CustomButton;