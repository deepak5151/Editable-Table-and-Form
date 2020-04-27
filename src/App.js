import React from 'react';
import Navigation from './Navigation';
import DisplayForm from './DisplayForm';
import DisplayTable from './DisplayTable';
import Record from './record.json';
import './App.css';




class App extends React.Component {
    state = {
        name: '',
        email: '',
        medicine: '',
        age: '',
        country: '',
        editid: -1,
        data: Record,
        }
    
    
      handleRemove = i => {
      this.setState(state => ({
        data: state.data.filter((row, j) => j !== i)
      }));
    };
  
    startEditing = i => {
        this.setState(
        {editid:i}
        )
    };
  
    stopEditing = () => {
      this.setState({ editid:-1 });
    };
  
    handleChange = (e, name, i) => {
      const { value } = e.target;
      this.setState(state => ({
        data: state.data.map(
          (row, j) => (j === i ? { ...row, [name]: value } : row)
        )
      }))};

      handleFormSubmit = (e) => {
          e.preventDefault();
        let data = [...this.state.data];
        console.log(data);
        const dob = new Date(this.state.age)
       const finalage =  new Date().getFullYear() - dob.getFullYear();
    
        data.push(
            {
                name: this.state.name,
                email: this.state.email, 
                medicine: this.state.medicine, 
                age: finalage, 
                country: this.state.country
            });   

            this.setState({
            data,
            name: '',
            email: '',
            medicine: '',
            age: '',
            country: '',
               });
      };
    
      handleInputChange = (e) => {
    
        this.setState({
          [e.target.name]: e.target.value
        })
      };

    render(){
      return (
          <div>
          <Navigation/>
          <div className="container">
            <DisplayForm 
            handleFormSubmit={ this.handleFormSubmit } 
            handleInputChange={ this.handleInputChange } 
            name={ this.state.name } 
            email={ this.state.email }
            medicine={ this.state.medicine }
            age={ this.state.age }
            country={ this.state.country }
            />
            <hr/><hr/><hr/>
            <DisplayTable
              handleRemove={this.handleRemove}
              startEditing={this.startEditing}
              editid={this.state.editid}
              stopEditing={this.stopEditing}
              handleChange={this.handleChange}
              data={this.state.data}
              header={[
                {
                  name: "First name",
                  prop: "name"
                },
                {
                  name: "Email",
                  prop: "email"
                },
                {
                  name: "Medicine Name",
                  prop: "medicine"
                },
                {
                  name: "Age",
                  prop: "age"
                },
                {
                    name: "Country",
                    prop: "country"
                  }
              ]}
            />
            <hr/><hr/><hr/>
          </div>
          </div>
      );
    }
}
  
  export default App;