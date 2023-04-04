import {Alert, Linking, View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, } from "react-native";


function Courses() {

    const takeCoursePressed = (link: string) => {
        Linking.canOpenURL(link).then(Supported =>
          {
            if (Supported){
              Linking.openURL(link);
            } else {
              Alert.alert("Can Not Go To Link")
            }
          })
    
      }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <View style={{padding: 20, width: "100%"}}>
                <Text style={{fontSize: 15, fontWeight: "bold" }}>Take courses from Top and leading online 
                platforms, and earn a well recognized certificates</Text>
            </View>
	  
        
					<TouchableOpacity 
                    style={styles.card}
                    onPress={() => { let url = "https://www.coursera.org";
                        takeCoursePressed(url) 
                           
							// go to .....
							}}>
					<View style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						
					}}>
						<Image
						style={styles.logo}
						source={require('../assets/images/coursera.png')}
							
						/>
						<View style={{width: "69%"}}>
								
								<Text  style={{
                                    color: "#0056D2",
                                    textAlign: 'right',
                                    fontWeight: 'bold',
                                    fontSize: 25,
                                }}>
                                COURSERA</Text>
								
								<Text style={styles.Sutitle} 
                                > Start, switch, or advance your career 
                                with more than 5,400 courses, Professional 
                                Certificates, and degrees from world-class
                                 universities and companies. { '>>' }</Text>
								
						</View>
						
						
					</View>
					</TouchableOpacity>

                    
                    <TouchableOpacity 
                    style={styles.card}
                    onPress={() => { let url = "https://www.udemy.com";
                        takeCoursePressed(url) 
                           
							// go to .....
							}}>
					<View style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						
					}}>
						<Image
						style={styles.logo}
						source={require('../assets/images/udemy.png')}
							
						/>
						<View style={{width: "69%"}}>
								
								<Text  style={{
                                    color: "#9F33E8",
                                    textAlign: 'right',
                                    fontWeight: 'bold',
                                    fontSize: 25,
                                }}>
                                UDEMY</Text>
								
								<Text style={styles.Sutitle} 
                                > Choose from 213,000 online video courses with new additions published every month { '>>' }</Text>
								
						</View>
						
						
					</View>
					</TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.card}
                    onPress={() => { let url = "https://alison.com/";
                        takeCoursePressed(url) 
                           
							// go to .....
							}}>
					<View style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						
					}}>
						<Image
						style={styles.logo}
						source={require('../assets/images/alison.png')}
							
						/>
						<View style={{width: "69%"}}>
								
								<Text  style={{
                                    color: "#1D355E",
                                    textAlign: 'right',
                                    fontWeight: 'bold',
                                    fontSize: 25,
                                }}>
                                ALISON</Text>
								
								<Text style={styles.Sutitle} 
                                > Learn anywhere at your own pace With Alison's 3000+ totally free online courses. { '>>' }</Text>
								
						</View>
						
						
					</View>
					</TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.card}
                    onPress={() => { let url = "https://academicearth.org/";
                        takeCoursePressed(url) 
                           
							// go to .....
							}}>
					<View style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						
					}}>
						<Image
						style={styles.logo}
						source={require('../assets/images/academicEarth.png')}
							
						/>
						<View style={{width: "69%"}}>
								
								<Text  style={{
                                    color: "#FFB700",
                                    textAlign: 'right',
                                    fontWeight: 'bold',
                                    fontSize: 25,
                                }}>
                                ACADEMIC EARTH</Text>
								
								<Text style={styles.Sutitle} 
                                >Academic Earth is another of the top online learning platforms 
                                that offer a collection of free online courses from 
                                high-ranking universities and colleges across the world. { '>>' }</Text>
								
						</View>
						
						
					</View>
					</TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.card}
                    onPress={() => { let url = "https://www.edx.org/";
                        takeCoursePressed(url) 
                           
							// go to .....
							}}>
					<View style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						
					}}>
						<Image
						style={styles.logo}
						source={require('../assets/images/edx.png')}
							
						/>
						<View style={{width: "69%"}}>
								
								<Text  style={{
                                    color: "#C01E5F",
                                    textAlign: 'right',
                                    fontWeight: 'bold',
                                    fontSize: 25,
                                }}>
                                EDX</Text>
								
								<Text style={styles.Sutitle} 
                                > edX is one of the most prominent global 
                                nonprofit online learning platforms, 
                                it was founded by Harvard and MIT.{ '>>' }</Text>
								
						</View>
						
						
					</View>
					</TouchableOpacity>


                    

                    <TouchableOpacity 
                    style={styles.card}
                    onPress={() => { let url = "https://www.skillshare.com/";
                        takeCoursePressed(url) 
                        
                            // go to .....
                            }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        
                    }}>
                        <Image
                        style={styles.logo}
                        source={require('../assets/images/skillshare.png')}
                            
                        />
                        <View style={{width: "69%"}}>
                                
                                <Text  style={{
                                    color: "#00FF84",
                                    textAlign: 'right',
                                    fontWeight: 'bold',
                                    fontSize: 25,
                                }}>
                                SKILLSHARE</Text>
                                
                                <Text style={styles.Sutitle} 
                                > Skillshare is best for people who want to learn new skills 
                                or improve the existing ones but 
                                don't have a lot of time for that. Designed 
                                to help you learn skills.{ '>>' }</Text>
                                
                        </View>
                        
                        
                    </View>
                    </TouchableOpacity>
			
				


        </View>

        </ScrollView>


    );
};

export default Courses;

const styles=StyleSheet.create({

    container: {
        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
        alignItems: "center"

    },
    card: {
        width: '95%',
        height: 120,
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
        margin: 6,
        width: 100,
        height: 100,
      },
      Sutitle: {
        color: '#000',
        textAlign: "right",
        
      },
      
})