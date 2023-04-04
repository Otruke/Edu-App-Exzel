import { Pressable} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScreenNavigationStackProp } from "../types";
import { Note, saveNote } from "../services/noteStoreService";

export const SaveNote: React.FC<Note> = ({ text, id }) => {
  const navigation = useNavigation<ScreenNavigationStackProp>();

   const saveNoteAndNavigateHome = async () => {
    await saveNote(text, id);
    navigation.navigate("Notes");
  };

  return (
    <Pressable 
    onPress={saveNoteAndNavigateHome}>
      <Ionicons name="chevron-back" size={30} color="#2196F3" />
    </Pressable>
  );
};
