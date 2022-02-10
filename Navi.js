import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ borderWidth: 1, borderColor: 'red' }}>
            <Text style={{ color: '#111' }}>You are now at Home</Text>
            <Button title="Go to Profile" onPress={() => navigation.navigate('Profile', { name: 'Jane' })}>Go to Detail</Button>
        </View>
    );
};

const ProfileScreen = ({ navigation, route }) => {
    return (
        <Text>You are now in {route.params.name}</Text>
    )
}

export default function Navi() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
                <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "Profile" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};