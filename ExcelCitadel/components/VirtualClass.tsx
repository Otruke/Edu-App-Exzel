import react from 'react';
import { View, Text, StyleSheet} from "react-native";

const VirtualClass = () => {

    return(

        <View style={styles.container}>
                <View>
                    <View style={styles.newContainer}>
                        <View style={styles.card}>
                        <Text style={styles.text}>Instructor</Text>
                        </View>
                        <View style={styles.card}>
                        <Text style={styles.text}>participant 1</Text>
                        </View>

                    </View>

                    <View style={styles.newContainer}>
                        <View style={styles.card}>
                        <Text style={styles.text}>participant 2</Text>
                        </View>
                        <View style={styles.card}>
                        <Text style={styles.text}>participant 3</Text>
                        </View>
                    
                    </View>

                    <View style={styles.newContainer}>
                        <View style={styles.card}>
                        <Text style={styles.text}>participant 4</Text>
                        </View>
                        <View style={styles.card}>
                        <Text style={styles.text}>participant 5</Text>
                        </View>
                    
                    </View>

                    <View style={styles.newContainer}>
                        <View style={styles.card}>
                        <Text style={styles.text}>participant 6</Text>
                        </View>
                        <View style={styles.card}>
                        <Text style={styles.text}>participant 7</Text>
                        </View>
                    
                    </View>

                    <View>
                    <Text style={styles.text1}>Oops! Sorry, unable to connet to Server.  {'\n'} Please Try again later...</Text>
                    </View>

                </View>




        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: "#fff",

    },

    newContainer: {
        margin: 5,
        width: "100%",
        height: "22%",
        flexDirection: "row",
        justifyContent: "space-around",

    },
    card: {
        height: "100%",
        width: '40%',
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: 10,
        shadowColor: '#000',
        borderColor: "#2196F3",
        borderWidth: 1,
        marginBottom: 30,
      },
      text: {
        color: "#2196F3",
        

      },
      text1: {
        textAlign: 'center',
        color: "#000",
        

      },
      
})


export default VirtualClass;

