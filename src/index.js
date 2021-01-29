import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux'
import { StyleSheet, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Text, Input } from 'react-native-elements';
import PhoneInput from 'react-native-phone-input'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


class index extends Component {
    state = {
        datalist: [],
        name: '',
        phone: '',
        errorMessage: '',
    }
    saveData() {
        let obj = {
            name: this.state.name,
            phone: this.state.phone,
        }
        AsyncStorage.setItem('user', JSON.stringify(obj));
    }

    // apirequest() {

    //     axios.get('https://jsonplaceholder.typicode.com/photos')
    //         .then(res => {
    //             this.setState({
    //                 datalist: res.data.slice(0, 10)
    //             })
    //         })

    // }

    render() {

        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                }}
            >

                <View style={styles.containerView}>
                    <StatusBar style="auto" />
                    <View style={styles.innerView}>
                        <View style={styles.registerView}>
                            <Text style={styles.registerText}>Registration</Text>

                        </View>
                        <View style={styles.headingView}>
                            <Text style={styles.headingText}>Enter your name and phone number.</Text>
                        </View>

                        <View style={styles.inputView}>
                            <Input
                                label="Full Name"
                                placeholder="Habibi"
                                value={this.state.name}
                                onChangeText={(name) => {
                                    this.setState({ name: name })
                                }
                                }
                                errorMessage={this.state.errorMessage}

                            />
                            <PhoneInput
                                ref='phone'
                                style={styles.phone}
                                errorMessage={this.state.errorMessage}

                            />
                            <TouchableOpacity
                                onPress={() => {
                                    if (this.state.name != "") {
                                        this.saveData();
                                        // this.apirequest();
                                        console.log(this.state.datalist.title);
                                        this.props.navigation.navigate('homeScreen', {
                                            name: this.state.name
                                        })
                                    }
                                    else {
                                        this.setState({ errorMessage: "Field Empty" })
                                    }

                                }}
                                style={styles.orderOpacity}>
                                <Text style={styles.opacityText}>Register Now</Text>

                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    };

}

const styles = StyleSheet.create({
    containerView: {
        // flex: 1,
        backgroundColor: '#ff7e00',
        alignItems: 'center',
        justifyContent: 'center',

    },
    innerView: {
        marginTop: hp('10%'),
        height: hp('100%'),
        width: wp('100%'),
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
    },
    registerView: {
        marginTop: hp('7'),
    },
    headingView: {
        marginTop: hp('6'),
    },
    inputView: {
        marginTop: 30,
        height: hp('40%'),
        width: wp('90%')

    },
    registerText: {
        fontSize: 28,
        fontWeight: 'bold',

    },
    headingText: {
        color: 'grey',
        fontSize: 15
    },
    phone: {
        padding: 10,
        borderBottomWidth: 1,
        width: 351,
        borderBottomColor: 'grey',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center'
    },
    orderOpacity: {
        height: 40,
        width: wp('80%'),
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: '#ff7e00',
        borderRadius: 5
    },
    opacityText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
});
export default index;
