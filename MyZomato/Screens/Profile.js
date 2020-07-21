import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Components/Header';

const Profile = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#212121' }}>
            <Header onPressOpen={() => navigation.openDrawer()} name={"Profile"} />
        </View>
    )
}

export default Profile