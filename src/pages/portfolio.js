import React from "react";
import HoriseonNewcopy3 from '../images/HoriseonNewcopy3.png'
import upnext from '../images/upnext.png'
import Password from '../images/Password.png'
import dogplaceholder from '../images/dogplaceholder.jpg'
import screenshot from '../images/screenshot.png'
import artwlarisse from '../images/artwlarisse.png'

export default function Portfolio() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-3 p-5 background2 col-rad">
            <h1 className="font size background2">Portfolio</h1>
            <hr />
            <div className="row">
              <div className="col-lg-6 col-md-10 col-sm-12 background2 p-2 col-rad2">
                <a href="https://ethomas22.github.io/Horiseon-Code-Refactor/" />
                <img
                  className="img-fluid img-thumbnail"
                  src={HoriseonNewcopy3}
                  alt="HoriseonRefactor"
                />
              </div>
              <div className="col-lg-6 col-md-10 col-sm-12 background2 p-2 col-rad2">
                <a href="https://ducktrshessami.github.io/up-next/" />
                <img
                  className="img-fluid img-thumbnail"
                  src={upnext}
                  alt="upnext"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-10 col-sm-12 background2 p-2">
                <a href="https://ethomas22.github.io/Password-Generator/" />
                <img
                  className="img-fluid img-thumbnail"
                  src={Password}
                  alt="Password-Generator"
                />
                Work in Progress!
              </div>
              <div className="col-lg-6 col-md-10 col-sm-12 background2 p-2">
                <a href="https://ethomas22.github.io/The-Office-Quiz/" />
                <img
                  className="img-fluid img-thumbnail"
                  src={dogplaceholder}
                  alt="officequiz"
                />
                Coming Soon!
              </div>
              <div className="col-lg-6 col-md-10 col-sm-12 background2 p-2">
                <a href="https://github.com/ethomas22/MVC-Handlebars" />
                <img
                  className="img-fluid img-thumbnail"
                  src={screenshot}
                  alt="Yummy Burgers!"
                />
                Yummy Burgers!
              </div>
              <div className="col-lg-6 col-md-10 col-sm-12 background2 p-2">
                <a href="https://student-registration-tracker.herokuapp.com/" />
                <img
                  className="img-fluid img-thumbnail"
                  src={artwlarisse}
                  alt="art"
                />
                Art With Larisse
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
