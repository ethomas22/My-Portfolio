import React from "react";

export default function Contact() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-3 p-5 background2 col-rad">
            <h1 className="font size background2">Contact</h1>
            <hr />
            <div className="row">
              <div className="col-lg-6 col-md-10 col-sm-6">
                <form>
                  <div className="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name"
                    />
                    <div className="form-group">
                      <label for="exampleFormControlInput1">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlTextarea1">Message</label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1]]"
                        rows="3"
                      >
                        Message
                      </textarea>
                    </div>
                    <input
                      className="btn btn-outline-dark"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
