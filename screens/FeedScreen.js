import React, {Component} from "react";
import{View,Text,StyleSheet,TouchableOpacity,Image} from "react-native";
import{createSwitchNavigator} from "react-navigation";

export default class FeedScreen extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.titleContainer}>
                    <Text style = {styles.titleText}> Feed Screen </Text>
                     
                     <TouchableOpacity
                        onPress = {() => {
                            this.props.navigation.navigate("CreatePost")
                        }}
                     style = {styles.Button} >
                    
                        <Image source  = {require("./assets/Class 91 Image.jpg")}
                        style = {styles.Image}/>
                       

                            
                      

                     </TouchableOpacity>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        marginTop: 20,
        fontSize: 35,
        color: "black",
        fontFamily: "Bubblegum-Sans",
        fontWeight: "bold"
    },
    Button: {
        marginTop: 70,
        height: 200,
        width: 600,
        justifyContent: 'center',
        textAlign: 'center'
    },
    Image: {
        width: 600,
        height: 300,
    }
})