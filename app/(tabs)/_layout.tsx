import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: '#fff',
                    headerTintColor: '#fff',
                    tabBarStyle: {
                        backgroundColor: '#414345',
                        borderTopColor : "#414345"
                    },
                }}>

                <Tabs.Screen name="index" options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }} />

                <Tabs.Screen name="routines" options={{
                    title: 'Routines',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Feather name="list" size={24} color={color} />),
                }} />

            </Tabs>
        </>
    )
}

export default TabsLayout

const styles = StyleSheet.create({})