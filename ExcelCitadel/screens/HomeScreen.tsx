import {
	Image,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ImageBackground,
} from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootTabParamList } from '../types';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";


	



const HomeScreen: React.FC = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootTabParamList>>();


  return (
	<SafeAreaView edges={["top"]}  >
			<View style={styles.container}>


				<View style={{width: "100%", height: "35%"}}>
					<ImageBackground style={{ width: "100%", height: "100%", }}
					source={require("../assets/images/coursesandcertificate.jpg")}
					>
						<LinearGradient
						colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(205, 223, 255, 0.5)', 'rgba(0, 0, 0, 1)']}
						style={{
							height : '100%', 
							width : '100%', 
							...StyleSheet.absoluteFillObject,
						}}

						>
							
						</LinearGradient>
						<Text style={{
							position: 'absolute',
							top: 180,
							left: 20,
							right: 0,
							fontSize: 40,
							fontWeight: "bold",
							color: "#2196F3",
						
							
						}}>EXZEL</Text>
						
						<Text style={{
							position: 'absolute',
							top: 220,
							left: 20,
							right: 0,
							fontSize: 20,
							//fontWeight: "bold",
							color: "#fff",
						
							
						}}>Ensuring Excellence</Text>
						
						
					</ImageBackground>
					
				</View>

				<View style={styles.divider}></View>
			
		<View style={styles.animateNav}>
      <Animatable.View style={styles.card} animation="fadeInDown" duration={1000}>
	  <View >
					<TouchableOpacity onPress={() => {
							// go to .....
							navigation.navigate("Search Books")}}>
					<View style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						
					}}>
						<Image
						style={styles.logo}
						source={require('../assets/images/search.png')}
							
						/>
						<View>
								
								<Text style={styles.buttonText}>SEARCH</Text>
								
								<Text style={styles.Sutitle}>Search and read new books  { '>>' }</Text>
								
						</View>
						
						
					</View>
					</TouchableOpacity>
					
			
				</View>
      </Animatable.View>
      
      <Animatable.View style={styles.card} animation="fadeInDown" duration={1000}>
	  <View >
					<TouchableOpacity onPress={() => {
							// go to .....
							navigation.navigate("My Books")}}>
					<View style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						
					}}>
						<Image
						style={styles.logo}
						source={require('../assets/images/books.png')}
							
						/>
						<View>
								
								<Text style={styles.buttonText}>MY BOOKS</Text>
								
								<Text style={styles.Sutitle}>View your saved books  { '>>' }</Text>
								
						</View>
						
						
					</View>
					</TouchableOpacity>
					
			
				</View>
      </Animatable.View>

	  <Animatable.View style={styles.card} animation="fadeInDown" duration={1500}>
	  <View >
					<TouchableOpacity onPress={() => {
							// go to .....
							navigation.navigate("Notes")}}>
					<View style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						
					}}>
						<Image
						style={styles.logo}
						source={require('../assets/images/icons8-making-notes-80.png')}
							
						/>
						<View>
								
								<Text style={styles.buttonText}>NOTES</Text>
								
								<Text style={styles.Sutitle}>Create and view notes  { '>>' }</Text>
								
						</View>
						
						
					</View>
					</TouchableOpacity>
					
			
				</View>
      </Animatable.View>

	  <Animatable.View style={styles.card} animation="fadeInDown" duration={2000}>
	  <View >
					<TouchableOpacity onPress={() => {
							// go to .....
							navigation.navigate("Classroom")}}>
					<View style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						
					}}>
						<Image
						style={styles.logo}
						source={require('../assets/images/classroom.png')}
							
						/>
						<View>
								
								<Text style={styles.buttonText}>CLASSROOM</Text>
								
								<Text style={styles.Sutitle}>Create or join a class { '>>' }</Text>
								
						</View>
						
						
					</View>
					</TouchableOpacity>
					
			
				</View>
      </Animatable.View>

	  <Animatable.View style={styles.card} animation="fadeInDown" duration={2500}>
	  <View >
					<TouchableOpacity onPress={() => {
							// go to .....
							navigation.navigate("Courses")}}>
					<View style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						
					}}>
						<Image
						style={styles.logo}
						source={require('../assets/images/courseCertificate.png')}
							
						/>
						<View>
								
								<Text style={styles.buttonText}>COURSES & CERTIFICATES</Text>
								
								<Text style={styles.Sutitle}>Take courses and earn recognized certificates { '>>' }</Text>
								
						</View>
						
						
					</View>
					</TouchableOpacity>
					
			
				</View>
      </Animatable.View>
	</View>
		
				
	</View>

	</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: "100%",
  },

  divider: {
	width: '100%',
	height: 8,
	backgroundColor: "#2196F3",
	marginTop: 0,
	marginBottom: 30,
},

  animateNav: {
	width: "100%",
	alignItems: "center",
	height: "60%"
  },
  card: {
    width: '95%',
    backgroundColor: '#fff',
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
  logo: {
    width: 50,
    height: 50,
  },
  
  buttonText: {
    color: "#2196F3",
    textAlign: 'right',
    fontWeight: 'bold',
	fontSize: 25,
  },
  Sutitle: {
	color: '#000',
    textAlign: "right",
  },
});


export default HomeScreen;
