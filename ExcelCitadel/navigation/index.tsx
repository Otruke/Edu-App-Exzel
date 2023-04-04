/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import SearchScreen from "../screens/SearchScreen";
import MyBooksScreen from "../screens/MyBooksScreen";
import HomeScreen from "../screens/HomeScreen";
import {
  RootStackParamList,
  RootTabParamList,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import EditNoteScreen from "../screens/EditNoteScreen";
import Notes from "../screens/Notes";
import { NewNote } from "../components/NewNote";
import ClassRoomScreen from "../screens/ClassRoomScreen";
import JoinClass from "../components/JoinClass";
import CreateClass from "../components/CreateClass";
import CreateClassInfo from "../components/CreateClassInfo";
import VirtualClass from "../components/VirtualClass";
import Courses from "../components/Course";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      
        <Stack.Screen 
        name="EditNote" 
        component={EditNoteScreen} />

        <Stack.Screen 
        name="JoinClass" 
        component={JoinClass} 
        options={{

          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2196F3',
          },
        }}
        />

        <Stack.Screen 
        name="CreateClass" 
        component={CreateClass} 
        options={{

          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2196F3',
          },
        }}
        />

        <Stack.Screen 
        name="New Class Information" 
        component={CreateClassInfo}
        
        options={{
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2196F3',
          },
        }}
        />

        <Stack.Screen 
        name="Virtual Class" 
        component={VirtualClass} 
        options={{
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2196F3',
          },
        }}
        />
      
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerShown: false, 
          
        }}
      />
      <BottomTab.Screen
        name="Search Books"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
          
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2196F3',
          },
        }}
      />
      <BottomTab.Screen
        name="My Books"
        component={MyBooksScreen}
        options={{ 
            headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
      <BottomTab.Screen
          name="Notes"
          component={Notes}
          options={{ 
            headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2196F3',
          },
            tabBarIcon: ({ color }) => <TabBarIcon name="pencil-square-o" color={color} />,
            headerRight: () => <NewNote />,
          }}
          
        />

      <BottomTab.Screen
          name="Classroom"
          component={ClassRoomScreen}
          options={{ 
            headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2196F3',
          },
            tabBarIcon: ({ color }) => <TabBarIcon name="group" color={color} />,
          }}
          
        />


        <BottomTab.Screen
          name="Courses"
          component={Courses}
          options={{ 
            headerTitle: "COURSES AND CERTIFICATES",
            headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2196F3',
          },
            tabBarIcon: ({ color }) => <TabBarIcon name="mortar-board" color={color} />,
          }}
          
        />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3, }} {...props} />;
}
