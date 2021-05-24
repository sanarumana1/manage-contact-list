import React from "react";


const ContactList = props => {

  return props.contactDetails.map((val, idx) => {

    let firstname = `name-${idx}`,
    lastname = `lastname-${idx}`,
    email = `email-${idx}`,
    phoneNo = `phoneNo-${idx}`;

    
    return (
      <div className="form-row" key={val.index}>
        <div className="col">
          <label>Name</label>
          <input
            type="text"
            className="form-control required"
            placeholder="Name"
            name="name"
            data-id={idx}
            id={firstname}
          />
        </div>
        <div className="col">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control required"
            placeholder="lastname"
            name="lastname"
            id={lastname}
            data-id={idx}
          />
        </div>
        <div className="col">
          <label>Email</label>
          <input
            type="text"
            className="form-control required"
            placeholder="Email"
            name="email"
            id={email}
            data-id={idx}
          />
        </div>
        <div className="col">
          <label>Phone No.</label>
          <input
            type="number"
            max="100"
            className="form-control"
            placeholder="Phone No."
            name="phoneNo"
            id={phoneNo}
            data-id={idx}
          />
        </div>
        <div className="col p-4">
          {idx === 0 ? (
            <button
              onClick={() => props.add()}
              type="button"
              className="btn btn-primary text-center"
              >Add
             
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => props.delete(val)}
              >Delete 
            </button>
          )}
        </div>
      </div>
    );
  });
};
export default ContactList;
