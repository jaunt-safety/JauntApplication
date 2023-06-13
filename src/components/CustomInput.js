import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry, editable= true}) => {
    return(
        <View style={styles.container}>
            <TextInput 
                value={value} 
                onChangeText={setValue} 
                placeholder={placeholder} 
                placeholderTextColor="#f7fadb" 
                style={styles.input}
                secureTextEntry={secureTextEntry}
                editable={editable}
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