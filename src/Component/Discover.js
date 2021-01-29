import React, { Fragment, Component } from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList, Image, } from 'react-native';
import { Text } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EvilIcons, Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import SearchableDropdown from 'react-native-searchable-dropdown';
import axios from 'axios';

class Discover extends Component {
    state = {
        name: '',
        datalist: []
    }
    displayData = async () => {
        try {
            let user = await AsyncStorage.getItem('user');
            let parsed = JSON.parse(user);
            this.setState({ name: parsed.name })

        }
        catch (error) {
            alert(error)
        }

    }


    componentWillMount() {
        this.displayData();
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({
                    datalist: res.data.slice(0, 10)
                })
            })
    }

    render() {
        const { datalist } = this.state;
        return (

            <View style={styles.containerView}>

                <View style={styles.innerheaderView}>
                    <View style={styles.headerView}>
                        <Text style={styles.hiText}>Hi </Text>
                        <Text style={styles.nameText}>{this.state.name},</Text>
                    </View>
                    <View style={styles.bellView}>
                        <TouchableOpacity >
                            <EvilIcons name="bell" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.searchView}>
                    <View style={styles.iconView}>
                        <Feather
                            name="search"
                            size={26}
                            color='grey'
                        />
                    </View>
                    <View style={styles.inputView}>

                        <Fragment>
                            <SearchableDropdown
                                textInputProps={
                                    {
                                        placeholder: "Find a Saloon",
                                        style: {
                                            width: wp('70%'),
                                            height: hp('5%'),
                                            paddingLeft: 15,
                                            backgroundColor: '#F0EEEE',
                                            borderRadius: 5,

                                        },
                                    }
                                }
                            />

                        </Fragment>

                    </View>
                    <View style={styles.drawerView}>
                        <TouchableOpacity
                            onPress={() => {

                            }}
                        >
                            <MaterialCommunityIcons name="menu" size={26} color="grey" />
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.viewtopProduct}>
                    <View style={styles.viewtopProductText}>
                        <Text style={styles.headText}>
                            Specialist
                        </Text>

                        <TouchableOpacity style={styles.opacityView}>
                            <Text style={styles.viewText}>View All</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color='#ff7e00' />
                        </TouchableOpacity>

                    </View>
                    <View style={styles.viewproducts}>

                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={datalist}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.cardproducts}>
                                        <Image
                                            source={require('../../image/cutting.jpg')}
                                            style={styles.thumbnail}
                                            resizeMethod='auto'
                                        />
                                        <Text>{item.name}</Text>
                                        {/* <ImageBackground source={require('../../image/cutting.jpg')} style={styles.thumbnail}>
                                            <Text style={styles.text}>{item.id}</Text>
                                        </ImageBackground> */}
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View>

                <View style={styles.viewtopProduct}>
                    <View style={styles.viewtopProductText}>
                        <Text style={styles.headText}>
                            Special Offers
                        </Text>
                        <TouchableOpacity style={styles.opacityView}>
                            <Text style={styles.viewText}>View All</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color='#ff7e00' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewproducts}>

                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={datalist}
                            renderItem={({ item }) => {
                                return (


                                    <View style={styles.specialProducts}>
                                        <Image
                                            source={require('../../image/sample.jpg')}
                                            style={styles.thumbnailSample}
                                            resizeMethod='scale'
                                        />
                                        <Text>{item.name}</Text>

                                    </View>
                                )
                            }}
                        />
                    </View>
                </View>

            </View >
        )
    }
}

const styles = StyleSheet.create({
    containerView: {
        height: hp('100%'),
        width: wp('100%'),
        backgroundColor: 'white',
        alignItems: 'center',
        alignSelf: 'center',
    },
    innerheaderView: {
        width: wp('93%'),
        marginTop: 30,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
    },
    headerView: {
        marginLeft: 5,
        height: hp('5%'),
        flexDirection: 'row',
    },
    bellView: {
        height: hp('5%'),
        paddingTop: 4,

    },
    searchView: {
        padding: 10,
        height: hp('13%'),
        width: wp('92%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

    },
    inputView: {
        width: wp('40%'),
        flex: 1,
    },
    drawerView: {
        height: 30,
        width: 30,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,

    },
    iconView: {
        height: 30,
        width: 30,
    },
    viewtopProduct: {
        marginTop: 7,
        width: wp('91%'),
        height: hp('35%'),
        alignSelf: 'center',
    },
    viewtopProductText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('90%'),
    },
    viewproducts: {
        flexDirection: 'row',
        height: hp('25%'),
        width: wp('90%'),
        alignSelf: 'center',
        alignContent: 'center',
    },
    cardproducts: {
        height: hp('20%'),
        width: wp('20%'),
        borderRadius: 5,
        borderColor: 'white',
        backgroundColor: 'white',
        elevation: 10,
        flexDirection: 'column',
        marginRight: 5
    },
    specialProducts: {
        height: hp('20%'),
        width: wp('45%'),
        borderRadius: 5,
        borderColor: 'white',
        backgroundColor: 'white',
        elevation: 10,
        flexDirection: 'column',
        marginRight: 5
    },
    thumbnail: {
        width: wp('20%'),
        height: hp('15%'),
        borderRadius: 5,
    },
    thumbnailSample: {
        width: wp('45%'),
        height: hp('15%'),
        borderRadius: 5,
    },
    headText: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    viewText: {
        fontSize: 18,
        color: '#ff7e00'
    },
    opacityView: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    hiText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    nameText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ff7e00',
    },
});
export default Discover;