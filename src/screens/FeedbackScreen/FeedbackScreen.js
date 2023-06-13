import Stars from './Stars';
import {View, Text, Pressable, StyleSheet, Image, TextInput, SafeAreaView} from 'react-native';
import { useState } from 'react';
import Logo from '../../../assets/images/logo.png';
import { Button } from '../HelpScreen';

const FeedbackScreen = ({navigation}) =>{
    const [firstRating, setFirstRating] = useState();
    const [secondRating, setSecondRating] = useState();
    const [thirdRating, setThirdRating] = useState();
    const [feedbackText, setFeedbackText] = useState('');
    const Question =({rating, setRating, questionText})=>{
        return(
            <View style={styles.questionBox}>  
                <View style={styles.question}>
                    <Text style={styles.questionTextStyle}>{questionText}</Text>
                </View> 
                <View>
                    <Stars starRating={rating} setStarRating={setRating} />
                </View>
            </View>
        )
    }
    const onSubmit = () =>{
        navigation.navigate('Home')
    }
    return(
        <SafeAreaView style={styles.mainview}>
            <Image source={Logo} style={styles.logo} />
            <View style={styles.questionView}>
                <Question rating={firstRating} setRating={setFirstRating} questionText={'Rate the driver'}/>
                <Question rating={secondRating} setRating={setSecondRating} questionText={'Rate the bus'}/>
                <Question rating={thirdRating} setRating={setThirdRating} questionText={'Rate the transport'}/>
                <View style={styles.feedbackBox}>
                    <Text style={styles.feedbackTextStyle}>Provide the feedback</Text>
                        <TextInput
                            editable
                            multiline
                            maxLength={40}
                            numberOfLines={10}
                            onChangeText={(text) => setFeedbackText({text})}
                            value={feedbackText}
                            style={{padding: 10, height: 300, marginTop:20, backgroundColor: 'rgba(177,221,139,0.8)'}}  
                              
                    />
                </View>
                <View style={{marginTop : 20}}>
                    <Button text="Submit Feedback" onPress={onSubmit} width={'95%'}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainview:{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(100,198,102)',
        padding: 20
    },
    logo:{
        width:110,
        maxHeight:40,

    },
    questionBox:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    question:{
        width: '50%'
    },
    questionTextStyle:{
        fontSize: 18,
        fontWeight : '700',
        marginTop:5
    },
    questionView:{
        marginTop: 10,
        padding: 20
    },
    feedbackBox:{
        marginTop: 30,
    },
    feedbackTextStyle:{
        fontSize: 18,
        fontWeight: 700
    }
})
export default FeedbackScreen;