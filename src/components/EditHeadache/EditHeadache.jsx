import React, { Component } from 'react'
import './EditHeadache.css'
import { Link } from 'react-router-dom'

class EditHeadache extends Component {
  state = { 
    invalidForm: false,
    formData: this.props.location.state.headache,
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateHeadache(this.state.formData);
  };
  
  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };
  
  render() {
    return (
      <>
        <div className="EditHeadache">
          <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <label htmlFor="title">Headache title:</label>
                <input name="title" id="title" type="text" className="active" value={this.state.formData.title} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <label htmlFor="painLevel">Pain level:</label>
                <input name="painLevel" id="pain" type="number" min="0" max="10" className="active" value={this.state.formData.painLevel} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <label htmlFor="medsUsed">Meds used:</label>
                <input name="medsUsed" id="meds" type="text" className="active" value={this.state.formData.medsUsed} onChange={this.handleChange} />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <label htmlFor="headacheLength">Length(hours):</label>
                <input name="headacheLength" id="headacheLength" type="number" className="active" value={this.state.formData.headacheLength} onChange={this.handleChange} />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <label htmlFor="description">Describe the headache:</label>
                <input name="description" id="description" type="text" className="active" value={this.state.formData.description} onChange={this.handleChange} />
              </div>
            </div>
            <button
              type="submit"
              className="btn red"
              disabled={this.state.invalidForm}>
                Update
            </button>
            <Link 
              classname="btn red"
              to={{
                pathname: '/headaches'
              }}
            >Cancel
            </Link>
          </form>
        </div>
      </>
     );
  }
}
 
export default EditHeadache;