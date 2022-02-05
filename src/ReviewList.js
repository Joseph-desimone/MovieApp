import Counter from './rating';
import Movie from "./Movies";
import React, { useState } from 'react';


const App = () => {

    const [formValues, setFormValues] = useState([{ name: "", review : ""}])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { name: "", review: "" }])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }

    return (
        <form  onSubmit={handleSubmit}>
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>Name</label>
              <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
              <label>Review</label>
              <input type="text" name="review" value={element.review || ""} onChange={e => handleChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
              <button className="button submit" type="submit">Submit</button>
          </div>
      </form>
    )
}

export default App
// export default class Review extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {    this.setState({value: event.target.value});  }
//   handleSubmit(event) {

//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           leave your review here!
//           <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }



// }