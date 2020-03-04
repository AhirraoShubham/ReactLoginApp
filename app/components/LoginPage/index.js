import React, { Component } from 'react'
import { View,Text, TextInput, Button} from 'react-native'
import styles from './styles'

class LoginPage extends Component{
    
    state={username:"",password:""}

    //Check Enter Credentials
    checkLogin(){
        const{username,password}=this.state
        if(username!='Admin'){
            console.warn('Invalid Username!')
        }else if(password!='Admin123'){
            console.warn('Invalid Password!')
        }else{
             //redirect to Home Screen
             this.props.navigation.navigate('Home Page',{itemId: username,
                otherParam: 'anything you want here',})
        }
    }
    
    render(){
        const {heading,input,parent}=styles
        return(
            <View style={parent}>
                <Text style={heading}>-: Login Page :-</Text>
                <TextInput style={input} placeholder="Username" onChangeText={text=>this.setState({username:text})}/>
                <TextInput style={input} secureTextEntry={true} placeholder="Password" onChangeText={text=>this.setState({password:text})}/>

                <Button title={"Login"} onPress={_=>this.checkLogin()}/>
            </View>
        );
    }
}

export default LoginPage