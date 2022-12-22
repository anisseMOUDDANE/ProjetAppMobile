import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from './List';
import ProfilCreation from './ProfilCreate';
import Connexion from './Connexion';

 const MyTabs = () => {

   const Tab = createBottomTabNavigator();
  return (
   <Tab.Navigator>
   <Tab.Screen name="creation" component={ProfilCreation} />
   <Tab.Screen name="List" component={List} />
   <Tab.Screen name="Connexion" component={Connexion} />
  </Tab.Navigator>
  )
}


export default MyTabs