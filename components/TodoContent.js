import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {Add_Todo} from '../components/redux/actions';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

import {InserData, GetAllData, DeleteItem, UpdateItem, DeleteAllItem} from '../database/schema'

const TodoContent = (props) => {
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDecriptionInput] = useState('');
    const [isVisablePicker, setIsVisiblePricker] = useState(false);
    const [date, setDate] = useState(new Date())

    const showModal = () => {
        setIsVisiblePricker(!isVisablePicker)
    }

    const handleConfirm = (value) => {
        setDate(value)
        showModal()
    }

    const TitleChenged = (value) => {
        setTitleInput(value)
    }

    const DescriptionChanged = (value) => {
        setDecriptionInput(value)
    }

    const TodoSubmitting = () => {
        // const data = {
        //     title : titleInput,
        //     description : descriptionInput
        // }

        // props.Add_Todo(data)

        // const NewData = {
        //     id : 56465465165,
        //     title : 'test_title_2'
        // }

        // InserData(NewData)
        // DeleteItem(56465465654)
        // UpdateItem(NewData)
        DeleteAllItem()
        GetAllData()

    }

    return(
        <View style={styles.container}>
            <Text style={styles.introTitle}>Enter the item you want to follow in the future!</Text>
            <View style={styles.inputBox}>
                <View>
                    <TextInput placeholder="Title" style={styles.input} onChangeText={(value) => TitleChenged(value)} value={titleInput}/>
                    <TextInput multiline numberOfLines={5} placeholder="Description" style={styles.input} onChangeText={(value) => DescriptionChanged(value)} value={descriptionInput}/>
                    <Pressable
                        style={[styles.input, {height : 40, justifyContent : 'center', alignItems : 'center'}]}
                        onPress={showModal}
                    >
                        <Text>{moment(date).format('MM-DD-YYYY')}</Text>
                    </Pressable>
                    <DateTimePickerModal 
                        isVisible={isVisablePicker}
                        mode="date"
                        date={date}
                        onConfirm={handleConfirm}
                        onCancel={showModal}
                    />
                </View>
                <Pressable
                    style={styles.saveBotton}
                    onPress={() => {
                        TodoSubmitting();
                        props.navigation.navigate('Home');
                    }}
                >
                    <MaterialIcons name="save-alt" size={25} color="#fff"/>
                </Pressable>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {}
}

const styles = StyleSheet.create({
    container : {
        flex : 10, 
        padding : 10
    },

    inputBox : {
        flex : 10,
        backgroundColor : '#cfd8dc',
        marginTop : 5,
        borderRadius : 10,
        padding : 10
    },

    item : {
        fontWeight : 'bold'
    }, 

    saveBotton : {
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#377e3c',
        borderRadius : 10,
        alignSelf : 'center',
        position : 'absolute',
        bottom : 25,
        padding : 5
    },

    introTitle : {
        fontWeight : 'bold',
        fontSize : 16,
        padding : 10,
        backgroundColor : '#e57373',
        borderRadius : 10
    },

    input : {
        width : '100%',
        alignSelf : 'center',
        backgroundColor : '#b0bec5',
        borderRadius : 10,
        marginTop : 15
    }



})

export default connect(mapStateToProps, {Add_Todo})(TodoContent)