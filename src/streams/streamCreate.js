import React from "react";
import {Field, reduxForm} from 'redux-form';
// import { ReactComponent } from "*.svg";

class StreamCreate extends React.Component{
    
    renderError = ({error, touched})=>{
        if (error && touched){
            return(
                <div className='ui error message'>
                    <div className ='ui header'>{error}</div>
                </div>
            )
        }
    }


   /* renderList = ({input, label, meta})=> {
        
        return (
            <div className={`field ${meta.error&&meta.touched? 'error':''}`} >
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                <div>{this.renderError(meta)}</div>
            </div>
        )}
      */
     
      //how to defined touched?
     
    renderList = (formprops)=>{
        //console.log(formprops)
        //console.log(this.props)
        return(
            <div className ={`field ${formprops.meta.error && formprops.meta.touched || formprops.input.value.length>4 ?'error':''}`}>
                <label>{formprops.label}</label>
                <input
                    {...formprops.input}
                    onChange = {formprops.input.onChange}
                    value = {formprops.input.value}
                    autoComplete='off'
                />
                {(formprops.meta.error && formprops.meta.touched || formprops.input.value.length>4) && (<div className = 'ui error message'>{formprops.meta.error}</div>)}
                
            </div>
        )
    }
    onSubmit (event){
        event.preventDefault();
    }
    render(){
    return(
        <form 
            className = "ui form error"
            onSubmit = {this.props.handleSubmit(this.onSubmit)}
        >

            <Field name ='title' component={this.renderList} label ='EnterName'/>
            <br/>
            <Field name ='description' component={this.renderList} label='EnterDescription'/>
            <button className='ui button secondary'>submit</button>
        </form>
    )
}
}

const validate = (formValues)=>{

    const error = {}

    if(!formValues.title){
        error.title = 'You must enter title'
    }
    else if(formValues.title.length >4){
        error.title = 'You must enter title no more than four characters'
    }
    if (!formValues.description){
        error.description = 'You must  enter description'
    }
    else if (formValues.description.length>4){
        error.description = 'You must enter description no more than four characters'
    }
    return error; 
}

export default reduxForm({
    form:'streamCreate', validate:validate
})(StreamCreate);