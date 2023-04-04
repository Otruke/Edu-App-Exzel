import { gql, useLazyQuery } from "@apollo/client";
import {
  ActivityIndicator,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,} from "react-native";

import { Text, View } from "../components/Themed";
import React, { useState } from "react";
import BookItem from "../components/BookItem";
import { SafeAreaView } from "react-native-safe-area-context";

const query = gql`
  query SearchBooks($q: String) {
    googleBooksSearch(q: $q, country: "US") {
      items {
        id
        volumeInfo {
          authors
          averageRating
          description
          previewLink
          imageLinks {
            thumbnail
          }
          title
          subtitle
          industryIdentifiers {
            identifier
            type
          }
        }
      }
    }
    openLibrarySearch(q: $q) {
      docs {
        author_name
        title
        cover_edition_key
        isbn
      }
    }
  }
`;

export default function SearchScreen() {
  const [search, setSearch] = useState("");
  const [provider, setProvider] = useState<
    "googleBooksSearch" | "openLibrarySearch"
  >("googleBooksSearch");

  const [runQuery, { data, loading, error }] = useLazyQuery(query);

  const parseBook = (item: any) => {
    if (provider === "googleBooksSearch") {
      const isbn = item.volumeInfo.industryIdentifiers?.find(
        (id: any) => id.type === "ISBN_13"
      )?.identifier;
      return {
        title: item.volumeInfo.title,
        image: item.volumeInfo.imageLinks?.thumbnail,
        authors: item.volumeInfo.authors,
        isbn: isbn || item.volumeInfo.industryIdentifiers?.[0]?.identifier,
        description: item.volumeInfo.description,
        previewLink: item.volumeInfo.previewLink,
      };
    } else {
      return {
        title: item.title,
        authors: item.author_name,
        image: `https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`,
        isbn: item.isbn?.[0],
      };
    }
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
          <View style={styles.header}>
            <TextInput
              value={search}
              onChangeText={setSearch}
              style={styles.input}
              placeholder="Search Books Here..."
              placeholderTextColor={'#353650'}
              
            />
            <Button
              
              title="Search"
              onPress={() => runQuery({ variables: { q: search } })}
            />
          </View>
          <View style={styles.tabs}>
            <TouchableOpacity>
              <Text
                style={
                  provider === "googleBooksSearch"
                    ? { fontSize: 20, fontWeight: "bold", color: "#2196F3" }
                    : {color: "#2196F3"}
                }
                onPress={() => setProvider("googleBooksSearch")}
              >
                Source 1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text
              style={
                provider === "openLibrarySearch"
                  ? { fontSize: 20, fontWeight: "bold", color: "#2196F3" }
                  : {color: "#2196F3"}
              }
              onPress={() => setProvider("openLibrarySearch")}
            >
              Source 2
            </Text>
            </TouchableOpacity>
          </View>
          {loading && <ActivityIndicator />}
          {error && (
            <View style={styles.container}>
              <Text style={styles.title}>Error fetching books</Text>
              <Text>{error.message}</Text>
            </View>
          )}
          <FlatList
            data={
              provider === "googleBooksSearch"
                ? data?.googleBooksSearch?.items
                : data?.openLibrarySearch?.docs || []
            }
            renderItem={({ item }) => <BookItem book={parseBook(item)} />}
            showsVerticalScrollIndicator={false}
          />
    
        </SafeAreaView>
        
    
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "white",
    marginTop: -48,
  
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2196F3",
    paddingLeft: 5,
    paddingRight: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    flex: 1,
    padding: 10,
    borderColor: "#DBE5FF",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    color: '#0E0D12',
    backgroundColor: "#DBE5FF",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    fontSize: 19,
    fontWeight: "bold",
    backgroundColor: "#DBE5FF",
    
    borderRightColor: "#DBE5FF",
    borderLeftColor: "#DBE5FF",
    borderTopColor: "#DBE5FF",
    borderBottomColor: "#2196F3",
    borderWidth: 1,
  },
  search: {
    color: "#fff",
    
  }
});


//previewLink