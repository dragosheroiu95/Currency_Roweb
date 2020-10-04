import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HistoryScreen, HomeScreen, SettingsScreen } from '../screens/index';
import { SCREENS } from '../helpers/constants';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function NavigationTabs() {
    return (
        <Tab.Navigator tabBarOptions={{ tabStyle: { justifyContent: 'center' } }}>
            <Tab.Screen name={SCREENS.DASHBOARD_SCREEN} component={HomeScreen} />
            <Tab.Screen name={SCREENS.HISTORY_SCREEN} component={HistoryScreen} />
            <Tab.Screen name={SCREENS.SETTINGS_SCREEN} component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default function MainNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name={SCREENS.HOME_SCREEN} component={NavigationTabs} />
        </Stack.Navigator>
    );
}