import React from 'react';
import {StyleSheet, StatusBar, View, Text} from 'react-native';
import {SearchBox, MenuBox} from '../components';
import ContentBox from '../components/ContentBox';

const HomeScreen = (props) => {
    return(
        <View style={{flex : 1, backgroundColor : '#fff'}}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <SearchBox {...props} />
            <MenuBox {...props} />
            <ContentBox {...props}/>
        </View>
    )
}

export {HomeScreen}