import React, {useState} from 'react';
import { 
    StyleSheet, 
    View, Text, 
    TouchableOpacity, 
    TextInput,

} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useNavigation } from '@react-navigation/core';

const CreateClass = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [className, setClassName] = useState<string>("");

  
  

  return (

<View style={styles.container}>

       
        <View style={styles.input}>
          <TextInput 
          style={styles.title}
          selectionColor={"#2196F3"}
          value={name}
          placeholder="Instructor Name"
          onChangeText={setName}
          />
        </View>

        <View style={styles.input}>
          <TextInput 
          style={styles.title}
          selectionColor={"#2196F3"}
          value={className}
          onChangeText={setClassName}
          placeholder="New Class Name"
          />
        </View>

        <View style={styles.input}>
          <TextInput 
          style={styles.title}
          selectionColor={"#2196F3"}
          value={id}
          onChangeText={setId}
          placeholder="New Class ID"
          />
        </View>
        
      
      

      
       
        <TouchableOpacity 
        style={styles.header} 
        onPress={() => navigation.navigate("New Class Information", {paramKey: [name, className, id] } )}
        >
            <Text style={styles.title1}>Create Class</Text>
        </TouchableOpacity>
        
       
         
       
       <View style={styles.title2}>
         <Text style={styles.title2Text}>Create a Virtual Class</Text>
       </View>

     </View>
   );
 };

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     justifyContent: "center",
     alignItems: "center",
     width: "100%",
   },

   input: {
    height: 60,
    justifyContent: "space-evenly",
     width: '95%',
    backgroundColor: "#fff",
    paddingLeft: 20,
	paddingRight: 20,
	paddingTop: 3,
	paddingBottom: 3,
    borderRadius: 10,
    borderColor: "#2196F3",
    borderWidth: 1,
    marginBottom: 30,
   },
   title: {
     fontSize: 20,
     color: "#000",
   },
   
   header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
     width: '95%',
    backgroundColor: "#2196F3",
    paddingLeft: 20,
	paddingRight: 20,
	paddingTop: 3,
	paddingBottom: 3,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 30,
   },
   title1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  title2: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
 
   
   title2Text: {
     fontSize: 12,
     color: '#999',
     padding: 5,
   },
 });

export default CreateClass;