/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";


declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  "NotesList": undefined;
  "NewNote": undefined;
  "EditNote": { noteId?: string };
  "Notes": undefined;
  "JoinClass": undefined;
  "CreateClass": undefined;
  "New Class Information": undefined;
  "Virtual Class": undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Home: undefined;
  "Search Books": undefined;
  "My Books": undefined;
  "Notes": undefined;
  "Classroom": undefined;
  "Courses": undefined;
};


export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;


  export type ScreenNavigationStackProp =
  NativeStackNavigationProp<RootStackParamList>;