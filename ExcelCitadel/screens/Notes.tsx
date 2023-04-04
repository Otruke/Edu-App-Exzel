import React from "react";
import { SaveNotesList } from "../components/SavedNotesList";
import { StyleSheet, View } from "react-native";

const Notes: React.FC = () => {
  return (
    <View style={styles.container}>
      <SaveNotesList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});


export default Notes