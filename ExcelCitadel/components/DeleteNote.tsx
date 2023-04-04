import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { ScreenNavigationStackProp } from "../types";
import { deleteNote } from "../services/noteStoreService";
import { FontAwesome } from "@expo/vector-icons";


type Props = {
  noteId: string;
};

export const DeleteNote: React.FC<Props> = ({ noteId }) => {
  const navigation = useNavigation<ScreenNavigationStackProp>();

  const deleteNoteHandler = async () => {
    await deleteNote(noteId);
    navigation.navigate("Notes");
  };

  return (
    <Pressable onPress={deleteNoteHandler}
    style={styles.buttonWrapper}>
      <FontAwesome name="trash-o" size={20} color="#fff" />
    </Pressable>
  );
};


const styles= StyleSheet.create({
  buttonWrapper: {
    
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,

  },
})


