import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry, editable= true, setErrorMessage, keyboardType ='default'}) => {
    return(
        <View style={styles.container}>
            <TextInput
                onChangeText={setValue} 
                placeholder={placeholder} 
                placeholderTextColor="#f7fadb"
                value={value && value}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                editable={editable}
                onPressIn={()=>{setErrorMessage && setErrorMessage(null)}}
                keyboardType={keyboardType}
                />
        </View>
    )
}

const styles =  StyleSheet.create({
    container:{
        backgroundColor: '#bbf2bc',
        width:'100%',
        borderRadius: 15,
        borderWidth: 1,
        height:50,
        borderColor:'transparent',
        paddingHorizontal: 20,
        marginVertical: 5
    },
    input:{
        color:'black',
        marginTop: 15
    }
})

export default CustomInput;