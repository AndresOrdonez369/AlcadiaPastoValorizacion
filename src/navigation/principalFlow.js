import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Feed from '../screens/Feed';
import Form from '../screens/Form';
import Info from '../screens/Info'

const Tab = createBottomTabNavigator();
export default function App() {
    return(
    <NavigationContainer>
     <Tab.Navigator
      screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, size }) => {
        const iconColor = focused ? '#3c73f4' : '#BFB6B6';
        if (route.name === 'Feed') {
            return <Icon name="newspaper" type="font-awesome-5" color={iconColor} size={size} />;
          } if (route.name === 'Form') {
            return <Icon name="stats-chart" type="ionicon" color={iconColor} size={size} />;
          } if (route.name === 'Info') {
            return <Icon name="info" type="font-awesome-5" color={iconColor} size={size} />;
        }
      },
    })}
    tabBarOptions={{
      showLabel: false,
    }}
    initialRouteName="Feed"
    headerMode="none"
  >
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="Form" component={Form} />
    <Tab.Screen name="Info" component={Info} />
    </Tab.Navigator>
  </NavigationContainer>
 );
}
