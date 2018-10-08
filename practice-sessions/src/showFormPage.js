import React, {Component} from 'react';

class ChildForm extends Component{
    render(){
        if(this.props.show == false){
            return null;
        }
        
        return(
            <div>
            Name = {this.props.name}<br/>
            Email Id = {this.props.email}<br/>
            Mobile no = {this.props.number}<br/>
            Selected Subject = {this.props.Subject}<br/>
            Gender = {this.props.gender}
        </div>
        );
        
    }
}
export default ChildForm