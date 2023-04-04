import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { RootStackParamList, RootTabParamList } from "../types";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DeleteNote } from "../components/DeleteNote";
import { NoteTakingInput } from "../components/NoteTakingInput";

type EditScreenRouteProp = RouteProp<RootStackParamList, "EditNote">;

 const EditNoteScreen: React.FC = () => {
  const route = useRoute<EditScreenRouteProp>();
  const navigation = useNavigation<NativeStackNavigationProp<RootTabParamList>>();
  const noteId = route.params.noteId;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: noteId ? "Edit note" : "New note",
      headerRight: () => (noteId ? <DeleteNote noteId={noteId} /> : <></>),
    });
  }, [navigation]);

  return <NoteTakingInput   noteId={noteId} />;
};

export default EditNoteScreen