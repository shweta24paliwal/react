import React, {Component} from 'react';
import ChildForm from "./showFormPage";
class Form extends Component{
f
    constructor(props) {
        super(props);
        this.state = {
                    name: '', 
                    email:'', 
                    num:'', 
                    show:false,
                    subject:'',
                    selectedOption: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event, inputKey) {
          const newState = {};
          newState[inputKey] = event.target.value;
        this.setState(newState);
      }

      handleRadioChange(e,key,value ){
          const newObj = {};
          newObj[key] = value;
          this.setState(newObj);
      }

    
      handleSubmit(event) {
        this.setState({show:true})
        event.preventDefault();
      }


    
      render() {
         
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Name : <input type="text" value={this.state.name} onChange={(e) => this.handleChange(e,"name")} /></label><br/>
                    <label> Email Id : <input type="email" value={this.state.email} onChange={(e) => this.handleChange(e,"email")}/></label>
                    <label> Mobile no : <input type="number" value={this.state.num} onChange={(e) => this.handleChange(e,"num")}/></label><br/>
                   
                    <label>
                        Pick your favorite subject:
                        <select value={this.state.subject} onChange={(e) => this.handleChange(e,"subject")}>
                            <option value="Computer">Computer</option>
                            <option value="Maths">Maths</option>
                            <option value="Science">Science</option>
                            <option value="English">English</option>
                        </select>
                    </label><br/>
                    <label>
                        Select your gender:
                        <input type='radio' value='male' onChange={(e) => this.handleRadioChange(e, "selectedOption","male")}
                        checked={this.state.selectedOption === 'male'} />
                        Male
                    </label>
                    <label>
                    <input type='radio' value='female' onChange={(e) => this.handleChange(e,"selectedOption", "female")}
                    checked={this.state.selectedOption === 'female'}/>
                    Female
                    </label>

                     <input type="submit" value="Submit" />
                </form>

                <div>
                    <ChildForm
                     show={this.state.show}
                     name={this.state.name} 
                     email={this.state.email}
                     number={this.state.num}
                     Subject={this.state.subject}
                     gender={this.state.selectedOption}/>
                     
                </div>
            </div>
          

        );
      }
}
export default Form