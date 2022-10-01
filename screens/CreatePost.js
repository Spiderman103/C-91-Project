import React, {Component} from "react";
import {View,Text,StyleSheet} from "react-native";

export default class CreatePostScreen extends Component{
    constructor(props){
        super();
        
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.titleContainer}>
                    <Text style = {styles.titleText}> Create Post Screen</Text>
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
        fontFamily: "Bubblegum-Sans",
        fontWeight: "bold"
    }
})