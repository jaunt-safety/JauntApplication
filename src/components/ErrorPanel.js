import { StyleSheet, Text, View } from "react-native";

const ErrorPanel = ({ message }) =>{
    return(
        <View style={styles.errorPanel}>
            <Text style={styles.errorMessage}>
                {message}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    errorMessage:{
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 600,
        padding: 2
    },
    errorPanel:{
        padding: 5,
        borderRadius: 15,
        backgroundColor: 'red',
        marginBottom: 10,
        width: '100%'
    }
})

export default ErrorPanel;