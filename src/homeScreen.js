import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { Fontisto, Entypo, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Appointments from './Component/Appointments';
import Nearbys from './Component/Nearbys';
import Discover from './Component/Discover';
import Profiles from './Component/Profiles';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

const Discovers = () => {

    return (

        <NavigationContainer independent={true}>
            <Drawer.Navigator
                drawerPosition='right'
            >
                <Drawer.Screen name="Home" component={Feed} />
                <Drawer.Screen name="Notifications" component={Notifications} />
            </Drawer.Navigator>
        </NavigationContainer>

    );
}
function Feed() {
    return (
        <View >
            <Discover />
        </View>
    );
}

function Notifications() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notifications Screen</Text>
        </View>
    );
}



const Nearby = () => {
    return (
        <View>
            <Nearbys />
        </View>
    );
}
const Appointment = () => {
    return (
        <View>
            <Appointments />
        </View>
    );
}

const Profile = () => {
    return (
        <View>
            <Profiles />
        </View>
    );
}

const homeScreen = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{

                    activeTintColor: '#ff7e00',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Discover" component={Discovers}

                    options={{
                        tabBarIcon: ({ color }) => {
                            return <Fontisto name="world" size={22} color={color} />
                        }
                    }}


                />
                < Tab.Screen name="Nearby" component={Nearby}
                    options={{
                        tabBarIcon: ({ color }) => {
                            return <Entypo name="location-pin" size={24} color={color} />
                        }
                    }}

                />
                <Tab.Screen name="Appointment" component={Appointment}

                    options={{
                        tabBarIcon: ({ color }) => {
                            return <Fontisto name="date" size={22} color={color} />

                        }
                    }}
                />
                <Tab.Screen name="Profile" component={Profile}
                    options={{
                        tabBarIcon: ({ color }) => {
                            return <Ionicons name="md-person" size={24} color={color} />
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default homeScreen;