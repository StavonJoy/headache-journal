import React, { Component } from 'react';
import './AddHeadache.css'


class AddHeadache extends Component {
  state = {
    invalidForm: true,
    formData: {
      title: '',
      owner: '',
      painLevel: '',
      medsUsed: [],
      headacheLength: '',
      description: '',
    }
  };

  
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddHeadache(this.state.formData)
  }
  
  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    })
  }

  formRef = React.createRef();
  
  render() {
    return (
      <>
        <div className="AddHeadache">
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
                Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default AddHeadache;