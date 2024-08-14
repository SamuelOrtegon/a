import React, { Component } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import RideScreen from "../screens/Ride";
import RideHistoryScreen from "../screens/RideHistory";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
//Completa el siguiente código con el nombre de la ruta (route)
            if (route.name === "Dashboard ") {
                iconName = "bicycle";
              } else if (route.name === " Schedule") {
                iconName = "time";
              }  

              // Puedes devolver cualquier componente aquí
              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                  
                />
              );
            }
          })}
          tabBarOptions={{
            //Completa el código añadiendo #FBE5C0 para activeTintColor y "black" para inactiveTintColor 
           activeTintColor: " #FBE5C0",
           inactiveTintColor: "black ",
            style: {
              height: 100,
              borderTopWidth: 0,
              backgroundColor: "#F88379"
            },
            labelStyle: {
              fontSize: 20,
              fontFamily: "Rajdhani_600SemiBold"
            },
            labelPosition: "below-icon",
            tabStyle: {
              alignItems: "center",
              justifyContent: "center"
            }
          }}
        >
          <Tab.Screen name="Viaje" component={RideScreen} />
          <Tab.Screen name="Historial" component={RideHistoryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
