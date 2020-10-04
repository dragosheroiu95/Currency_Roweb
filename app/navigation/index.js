import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HistoryScreen, HomeScreen } from '../screens/index';
const Tab = createBottomTabNavigator();

export const SCREENS = {
    HOME_SCREEN: 'HomeScreen',
    HISTORY_SCREEN: 'HistoryScreen',
}

export default function MainNavigationTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name={SCREENS.HOME_SCREEN} component={HomeScreen} />
            <Tab.Screen name={SCREENS.HISTORY_SCREEN} component={HistoryScreen} />
        </Tab.Navigator>
    );
} 