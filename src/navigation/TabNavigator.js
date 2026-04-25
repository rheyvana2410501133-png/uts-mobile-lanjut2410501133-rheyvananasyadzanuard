import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeIcon, HeartIcon, SearchIcon, InfoIcon } from '../components/Icons';

import HomeScreen from '../screens/HomeScreen';
import BrowseScreen from '../screens/BrowseScreen';
import DetailScreen from '../screens/DetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import SearchScreen from '../screens/SearchScreen';
import AboutScreen from '../screens/AboutScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') return <HomeIcon size={size} color={color} />;
          if (route.name === 'Favorit') return <HeartIcon size={size} color={color} />;
          if (route.name === 'Search') return <SearchIcon size={size} color={color} />;
          if (route.name === 'About') return <InfoIcon size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ff4d4d',
        tabBarInactiveTintColor: 'gray',
        headerShown: true,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorit" component={FavoritesScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Browse"
        component={BrowseScreen}
        options={{
          headerTitle: 'Categories',
          headerTintColor: '#ff4d4d',
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerTitle: 'Recipe Details',
          headerTintColor: '#ff4d4d',
        }}
      />
    </Stack.Navigator>
  );
}