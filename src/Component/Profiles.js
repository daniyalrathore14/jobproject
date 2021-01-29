import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';
import { Text, } from 'react-native-elements';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Profiles = () => {
    return (
        <View style={styles.containerView}>
            <Text>Profiles</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerView: {
        height: hp('100%'),
        width: wp('100%'),
        backgroundColor: '#ff7e00',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'

    },

});
export default Profiles;