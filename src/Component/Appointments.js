import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { Text } from 'react-native-elements';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';



const Appointments = () => {
    return (
        <View style={styles.containerView}>
            <Text>Appointment</Text>
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
export default Appointments;
