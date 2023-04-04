import { View, Text, StyleSheet} from "react-native";

interface Props{
    route: any;
}

const CreateClassInfo = ({route}: Props) => {

    return(
            <View style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.headerText}>Information</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.title}>Instructor Name</Text>
                <Text style={styles.subtitle}>{route.params.paramKey[0]}</Text>
                </View>

                <View style={styles.content}>
                <Text style={styles.title}>New Class Name</Text>
                <Text style={styles.subtitle}>{route.params.paramKey[1]}</Text>
                </View>

                <View style={styles.content}>
                <Text style={styles.title}>New Class ID</Text>
                <Text style={styles.subtitle}>{route.params.paramKey[2]}</Text>
                </View>

                <Text style={styles.body}>Here is your newly created class information. 
                Make sure to share it with those you which to participate in your class. </Text>
            </View>


          );
        };
        
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: '#fff',
          },
          header: {
            height: 80,
            backgroundColor: "#2196F3",
            justifyContent: 'center',
            alignItems: 'center',
          },
          headerText: {
            color: '#fff',
            fontSize: 24,
            fontWeight: 'bold',
          },
          content: {
            padding: 20,
          },
          title: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
          },
          subtitle: {
            fontSize: 16,
            marginBottom: 10,
          },
          body: {
                textAlign: "center",
                 fontSize: 14,
                 lineHeight: 20,
                 padding: 20,
                 color: '#999',
                 backgroundColor: '#f5f5f5',
                 marginTop: 20,
               },
          
        });
        

export default CreateClassInfo;