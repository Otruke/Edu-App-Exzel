
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useNavigation } from '@react-navigation/core';

const ClassRoomScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (

<View style={styles.container}>

       
       
        <TouchableOpacity style={styles.header} onPress={() => {
							// go to .....
							navigation.navigate("CreateClass")}}>
          <Text style={styles.title}>Create Class</Text>
          </TouchableOpacity>
      

      
       
          <TouchableOpacity style={styles.header}  onPress={() => {
							// go to .....
							navigation.navigate("JoinClass")}}>
            <Text style={styles.title}>Join Class</Text>
          </TouchableOpacity>
        
       
         
       
       <View style={styles.title2}>
         <Text style={styles.title2Text}>Create or Join a Virtual Class</Text>
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
   title: {
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

export default ClassRoomScreen;