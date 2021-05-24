import React from "react";
import ContactList from "./components/ContactList";

class ContactInfo extends React.Component {
  state = {
    contactDetails: [
      {
        index: Math.random(),
        firstname: "",
        email:"",
        lastname: "",
        phoneNo: ""
      }
    ]
  };
  handleChange = e => {
    if (
      ["firstname", "lastname", "email","phoneNo"].includes(
        e.target.name
      )
    ) {
      let contactDetails = [...this.state.contactDetails];
      contactDetails[e.target.dataset.id][e.target.firstname] = e.target.value;
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  addContact = e => {
    this.setState(prevState => ({
      contactDetails: [
        ...prevState.contactDetails,
        {
          index: Math.random(),
          firstname: "",
          lastname: "",
          email:"",
          price: ""
        }
      ]
    }));
  };

  deleteContact(record) {
    this.setState({
      contactDetails: this.state.contactDetails.filter(r => r !== record)
    });
  }
    
  render() {
    let { contactDetails } = this.state;
    return (
      <div className="content">
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <div className="row" style={{ marginTop: 20 }}>
            <div className="col-sm-1" />
            <div className="col-sm-10">
              <h2 className="text-center"> Contact Info</h2>
              <div className="container">
                <div className="row">
                  <ContactList
                    add={this.addContact}
                    delete={this.deleteContact.bind(this)}
                    contactDetails={contactDetails}
                  />
                </div>
              </div>
            <div className="col-sm-1" />
          </div> </div>
        </form>
      </div>
    );
  }
}
export default ContactInfo;
