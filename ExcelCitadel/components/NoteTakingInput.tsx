import React from "react";
import { TextInput, StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ScreenNavigationStackProp } from "../types";
import { getNote, saveNote } from "../services/noteStoreService";
import { SaveNote } from "./SaveNote";

type Props = {
  noteId?: string;
};

export const NoteTakingInput: React.FC<Props> = ({ noteId }) => {
  const [text, onChangeText] = React.useState<string>("");
  const navigation = useNavigation<ScreenNavigationStackProp>();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <SaveNote text={text} id={noteId ?? ""} />,
    });
  }, [navigation, text, noteId]);

  useFocusEffect(
    React.useCallback(() => {
      if (noteId) {
        getNote(noteId).then((result) => onChangeText(result?.text ?? ""));
      }
    }, [noteId])
  );

  return (
    <View style={styles.textContainer}>
      <TextInput
      selectionColor={"#2196F3"}
        autoFocus={true}
        
        onChangeText={onChangeText}
        value={text}
        multiline={true}
        style={styles.noteInput}
        textAlignVertical="top"
        placeholder="Write Note Here..."
      />
      <TouchableOpacity style={styles.button} onPress={() => 
                    {if (text === ''){
                        Alert.alert('Please Type Something');
                    
                    }else {
                        saveNote
                    }
                    }}>
                        <Text style={styles.buttonText}>
                            Add
                        </Text>
                    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    padding: 10,
    backgroundColor: "white",
  },
  noteInput: {
    fontSize: 16,
    height: "100%",
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: "#DBE5FF",
  },
  button: {
    backgroundColor: "blue",
    width: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    height: 50,
},
buttonText: {
    color: 'white',
    fontSize: 32,
    fontWeight: '800',  
},
});
