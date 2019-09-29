import React from "react";
import {connect} from 'react-redux';

import {signIn, signOut} from '../actions'


class GoogleAuth extends React.Component {
    state = {
        isSignedIn:null,
    }
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'52594141252-t3al8k90hos2h8lemf9ljqbtrhuedme4.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn)=>{
        if (isSignedIn){
            //alert(1);
            this.props.signIn();
        }else{
            //alert(2);
            this.props.signOut();
        }
    }

    onSignInClick(){
       window.gapi.auth2.getAuthInstance().signIn()
    }

    onSignOutClick(){
        window.gapi.auth2.getAuthInstance().signOut()
    }

    renderGoogleAuth(){
        console.log('1',this.props.isSignedIn);
        if (this.props.isSignedIn ==="null"){
            return null
        }
        else if (this.props.isSignedIn){
            return (
                <div> 
                    <button 
                        className= "ui red google button"
                        onClick = {this.onSignOutClick}
                    >
                        
                        <i className = "google icon"/>
                        Sign Out
                    </button>
                </div>
                )
        }else{
            return (
                <div> 
                    <button 
                        className= "ui red google button"
                        onClick = {this.onSignInClick}
                    >
                        <i className = "google icon"/>
                        Sign in with google account
                    </button>
                </div>
                )
        }
    }

    render(){
        return <div>{this.renderGoogleAuth()}</div>;
        }
}

const mapStateToProps = (state)=>{
    return{isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);