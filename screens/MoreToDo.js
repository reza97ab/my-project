import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {Add_Todo} from '../components/redux/actions'

const MoreTodo = (props) => {
    const [titleInput, setTitleInput] = useState(props.route.params.values.title);
    const [descriptionInput, setDecriptionInput] = useState(props.route.params.values.description);

    const TitleChenged = (value) => {
        setTitleInput(value)
    }

    const DescriptionChanged = (value) => {
        setDecriptionInput(value)
    }

    const EditTodo = (value) => {
        const data = {
            ...value,
            title : titleInput,
            description : descriptionInput
        }

        let index = props.Add_data.indexOf(value)
        if(index >= -1) {
            props.Add_data.splice(index, 1);
            props.Add_Todo(data)
        }
        props.navigation.navigate('Home')
    }

    const RemoveTodo = (value) => {
        let index = props.Add_data.indexOf(value)
        if(index >= -1) {
            props.Add_data.splice(index, 1);
        }
        props.navigation.navigate('Home')
    }



    return(
        <View style={styles.container}>
            <Text style={styles.introTitle}>Enter the item you want to follow in the future!</Text>
            <View style={styles.inputBox}>
                <View>
                    <TextInput placeholder="Title" style={styles.input} onChangeText={(value) => TitleChenged(value)} value={titleInput}/>
                    <TextInput multiline numberOfLines={5} placeholder="Description" style={styles.input} onChangeText={(value) => DescriptionChanged(value)} value={descriptionInput}/>
                </View>
            </View>
            <View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
                    <Pressable
                        style={styles.saveBotton}
                        onPress={() => {
                            EditTodo(props.route.params.values)
                        }}
                    >
                        <MaterialIcons name="edit" size={22} color="#fff"/>
                    </Pressable>

                    <Pressable
                        style={[styles.saveBotton, {backgroundColor : '#e53935', marginLeft : 5}]}
                        onPress={() => {
                            RemoveTodo(props.route.params.values)
                        }}
                    >
                        <MaterialIcons name="delete" size={22} color="#fff"/>
                    </Pressable>
                </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        Add_data : state.AddTodo.Add_data
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1, 
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
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#377e3c',
        borderRadius : 10,
        alignSelf : 'center',
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

export default connect(mapStateToProps, {Add_Todo})(MoreTodo)