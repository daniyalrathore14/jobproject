import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Text, Input } from 'react-native-elements';
import PhoneInput from 'react-native-phone-input'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
const header = () => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.opacityLogin}
            >
                <Ionicons name="md-arrow-back" size={27} color="white" />

            </TouchableOpacity>
        </View>

    )


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff7e00',
        height: hp('15%'),
        marginLeft: -17,
        width: wp('110%'),
        // alignContent: 'center',
        // alignItems: 'center',
        justifyContent: 'center'
    },
    opacityLogin: {
        marginLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',

    },
    hello: {
        color: 'black',
    }
});
export default header;
