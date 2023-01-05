import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Pressable, ScrollView} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import {connect} from 'react-redux';
import {Add_Todo, Remove_Todo} from '../components/redux/actions'

const data = [
    {
        id : 1,
        title : 'react native full course',
        status : 'complete'
    },

    {
        id : 2,
        title : 'Linkedin post',
        status : 'incomplete'
    },

    {
        id : 2,
        title : 'Instagram Post',
        status : 'incomplete'
    }
]

const ContentBox = (props) => {
    const [changed, setChanged] = useState(false);
    const isFocused = useIsFocused();
    useEffect(() => {

    }, [isFocused])

    const removeItem = (value) => {
        props.Remove_Todo(value);
    }
    return(
        <View style={styles.container}>
            <ScrollView>
                {
                    props.Add_data.map((item, index) => (
                        item.status == 'incomplete' ? 
                            <View key={index}>
                                <View style={styles.itemBox}>
                                    <View style={{flexDirection : 'row'}}>
                                        <Pressable
                                            onPress={() => {
                                                let arr = props.Add_data.indexOf(item);
                                                if(arr >= -1)
                                                    props.Add_data.splice(arr, 1)
                                                removeItem(item);
                                                setChanged(!changed)
                                                
                                            }}
                                            style={{marginLeft : 20}}
                                        >
                                            <MaterialIcons name="radio-button-unchecked" size={22} color="#e57373" />
                                        </Pressable>

                                        <View>
                                            <View>
                                                <Text style={{color : '#000', marginLeft : 15, fontWeight : 'bold'}}>{item.title}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View>
                                        <Pressable 
                                            onPress={() => props.navigation.navigate('MoreTodo', { values : item})}
                                            style={{marginRight : 20}}
                                        >
                                            <MaterialIcons name="arrow-forward-ios" size={22} color="#e57373"/>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>

                            :

                                <View/>
                    ))
                }

                {
                    props.Remove_data.map((item, index) => (
                        <View key={index}>
                            <View style={[styles.itemBox, {backgroundColor : '#eeeeee'}]}>
                                <View style={{flexDirection : 'row'}}>
                                    <Pressable
                                        onPress={() => {
                                            let arr = props.Remove_data.indexOf(item);
                                            if(arr >= -1)
                                                props.Remove_data.splice(arr, 1)
                                            props.Add_Todo(item);
                                            setChanged(!changed);
                                        }}
                                        style={{marginLeft : 20}}
                                    >
                                        <MaterialIcons name="check-circle" size={22} color="#e57373" />
                                    </Pressable>

                                    <View>
                                        <View>
                                            <Text style={{color : '#000', marginLeft : 15, fontWeight : 'bold', textDecorationLine : 'line-through'}}>{item.title}</Text>
                                        </View>
                                    </View>
                                </View>
                                {/* <View>
                                    <Pressable style={{marginRight : 20}}>
                                        <MaterialIcons name="arrow-forward-ios" size={22} color="#e57373"/>
                                    </Pressable>
                                </View> */}
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
            <View style={styles.navBotton}>
                <Pressable
                    onPress={() => props.navigation.navigate('AddTodo')}
                >
                    <Foundation name="plus" size={20} color="#fff" />
                </Pressable>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        Add_data : state.AddTodo.Add_data,
        Remove_data : state.RemoveTodo.Remove_data
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 12, 
        width : '100%',
        alignSelf : 'center',
        backgroundColor : '#fff'
    },

    itemBox : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingTop : 25,
        paddingBottom : 25,
        marginBottom : 0.5,
        backgroundColor : '#ffebee'
    },

    navBotton : {
        position : 'absolute',
        bottom : 35,
        right : 25,
        justifyContent : 'center',
        alignItems : 'center',
        width : 40,
        height : 40,
        borderRadius : 40,
        backgroundColor : '#e57373'
    }

})

export default connect(mapStateToProps, {Add_Todo, Remove_Todo})(ContentBox)