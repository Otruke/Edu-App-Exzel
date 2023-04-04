import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { ScreenNavigationStackProp } from "../types";
import { FontAwesome } from "@expo/vector-icons";




export const NewNote: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationStackProp>();

  return (
    <Pressable
      onPress={() => navigation.navigate("EditNote", { noteId: undefined })}
    style={styles.buttonWrapper}>
      <FontAwesome name="pencil-square-o" size={20} color="#fff" />
      <Text style={styles.button}>New Note</Text>
    </Pressable>
  );
};

const styles= StyleSheet.create({
  buttonWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    width: "40%",

  },
  button: {

    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 10,
    
  },
})

