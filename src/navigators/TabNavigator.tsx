import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import TicketScreen from '../screens/TicketScreen';
import { COLORS, FONTSIZE, SPACING } from '../theme/theme';
import CustomIcon from '../components/CustomIcon';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.LightGrey,
          borderTopWidth: 0,
          height: SPACING.space_10 * 8,
        },
      }}>
      <Tab.Screen
        name="Watch"
        component={HomeScreen}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={[
                  focused ? { backgroundColor: COLORS.White } : {},
                ]}
              >
                <CustomIcon
                  name="video"
                  color={COLORS.WhiteRGBA13}
                  size={FONTSIZE.size_30}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={[
                  focused ? { backgroundColor: COLORS.White } : {},
                ]}
              >
                <CustomIcon
                  name="search"
                  color={COLORS.WhiteRGBA13}
                  size={FONTSIZE.size_30}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={[
                  focused ? { backgroundColor: COLORS.White } : {},
                ]}>
                <CustomIcon
                  name="ticket"
                  color={COLORS.WhiteRGBA13}
                  size={FONTSIZE.size_30}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
