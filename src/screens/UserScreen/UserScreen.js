import React, {useState} from "react";
import {View, Text, Pressable, StyleSheet, Image, TextInput} from 'react-native';
import user from '../../../assets/images/user.png';
import back from '../../../assets/images/left.png'

const UserScreen = ({navigation}) =>{
    const [emailId, setEmailId]= useState();
    const [name, setName]= useState();
    const [phno, setPhno]= useState();
    const [fatherName, setFatherName]= useState();
    const [motherName, setMotherName]= useState();
    const [editable, setEditable] = useState(false);
    const [showEditButton, setShowEditButton] = useState(true);
    const [showSaveButton, setShowSaveButton] = useState(false);
    const onUpdatePressed = () =>{
       setEditable(true);
       setShowSaveButton(true); 
       setShowEditButton(false);
    }
    const onSavePressed = () =>{
        setEditable(false);
        setShowEditButton(true);
        setShowSaveButton(false);
     }
    const onUploadPhotos = () => {
        navigation.navigate('PhotoScreen')
    }
    const onBackPressed = () => {
        navigation.navigate('Home')
    }
    const Button = ({text, onPress, width}) =>{
        return(
            <Pressable onPress={onPress} style={[styles.buttonContainer, {width, marginLeft : 10}]}>
               <Text style ={styles.button}>{text}</Text>
            </Pressable>
        )
    }
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
    return (
    <View style={styles.mainview}>
        <View style={styles.userView}>
          <Pressable onPress={onBackPressed}>
            <View style={{marginTop :40}}>
                <Image source={back} style={styles.backIcon}/>
            </View>
          </Pressable>
          <View style={{alignContent: 'center', alignItems: 'center', marginTop: 10}}>
            <Image source={user} style={styles.userImage}/>
          </View>
        </View>
        <View style ={styles.fieldView}>
            <CustomInput placeholder="Name" value={name} setValue={setName} editable={editable} />
            <CustomInput placeholder="Email Id" value={emailId} setValue={setEmailId} editable={editable} />
            <CustomInput placeholder="Phone no" value={phno} setValue={setPhno} editable={editable} />
            <CustomInput placeholder="Father name" value={fatherName} setValue={setFatherName} editable={editable} />
            <CustomInput placeholder="Mother name" value={motherName} setValue={setMotherName} editable={editable} />
            {showEditButton && (<Button text="Edit" onPress={onUpdatePressed} width={'95%'}/>)}
            {showSaveButton && (<Button text="Save" onPress={onSavePressed} width={'95%'}/>)}
            <Button text="Upload Parents Photos" onPress={onUploadPhotos} width={'95%'}/>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    mainview:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'rgb(100,198,102)',
    },
    fieldView:{
        width: '100%',
        height: '60%',
        alignItems: 'center',
        backgroundColor: 'rgb(100,198,102)',
        marginTop: 20
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
    },
    userImage:{
        height: 200,
        width: 200,
    },
    userView:{
        padding:20,
        height: '40%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(56,87,26,0.7)'
    },
    container:{
        backgroundColor: '#bbf2bc',
        width:'90%',
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
    },
    backIcon:{
        width: 30,
        height:30,
        display: 'flex',
        alignItems: 'flex-start'
    }
})

export default UserScreen