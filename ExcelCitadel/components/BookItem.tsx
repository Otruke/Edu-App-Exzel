import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity, Linking, Alert } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { useMyBooks } from "../context/MyBooksProvider";

type BookItemProps = {
  book: Book;
};

const BookItem = ({ book }: BookItemProps) => {
  const { onToggleSaved, isBookSaved } = useMyBooks();
  const saved = isBookSaved(book);


  const readPressed = (link: string) => {
    Linking.canOpenURL(link).then(Supported =>
      {
        if (Supported){
          Linking.openURL(link);
        } else {
          Alert.alert("Can Not Go To Link")
        }
      })

  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: book.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{book.title}</Text>
        <Text>{book.authors?.join(", ")}</Text>
        <Text numberOfLines={4} style={{fontSize: 12}}>{book.description}</Text>


        <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={[styles.button, saved ? { backgroundColor: "lightgray" } : {}]}
              onPress={() => onToggleSaved(book)}
            >
              <Text style={styles.buttonText}>
                {saved ? "Remove" : "Save Book"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button]} 
              onPress={() => book.previewLink ? readPressed(book.previewLink) 
              : 
              Alert.alert("link is not available for this book")}
            >
              <Text style={styles.buttonText}>
                {book.previewLink ? "Start Reading" : " Unavailable "}
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
  },
  image: {
    flex: 1,
    aspectRatio: 2 / 3,
    marginRight: 10,
  },
  contentContainer: {
    flex: 4,
    borderColor: "lightgray",
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#2196F3",
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10, 
  },
  button: {
    backgroundColor: Colors.light.tint,
    alignSelf: "flex-start",
    marginTop: "auto",
    marginVertical: 10,
    padding: 7,
    paddingHorizontal: 15,
    borderRadius: 5,
    width: "40%",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center"
  },
});

export default BookItem;
