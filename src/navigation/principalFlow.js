import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import Feed from '../screens/Feed';
import Form from '../screens/Form';
import Info from '../screens/Info';

export default function App() {
    return(
    <NavigationContainer>
     <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, size }) => {
        const iconColor = focused ? '#6E00FF' : '#BFB6B6';
        if (route.name === 'Feed') {
            return <Icon name="user-alt" type="font-awesome-5" color={iconColor} size={size} />;
          } if (route.name === 'Form') {
            return <Icon name="stats-chart" type="ionicon" color={iconColor} size={size} />;
          } if (route.name === 'Info') {
            return <Icon name="local-grocery-store" type="material-icons" color={iconColor} size={size} />;
        }
      },
    })}
    tabBarOptions={{
      showLabel: false,
    }}
    initialRouteName="Inicio"
    headerMode="none"
  >
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="Form" component={Form} />
    <Tab.Screen name="Info" component={Info} />
    </Tab.Navigator>
  </NavigationContainer>
 );
}
