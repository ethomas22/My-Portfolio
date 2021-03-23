import React from "react";
import Headshot from '../images/headshot.JPG'

export default function Aboutme() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 col-sm-6 m-3 p-5 background2 col-rad">
            <h1 className="font size background2">About Me</h1>
            <hr />
            <div className="row">
              <div className="col-sm-6 col-md-8 col-lg-4">
                <img
                  className="img-fluid col-rad2"
                  src={Headshot}
                  alt="headshot"
                />
              </div>
              <div className="col">
                <p>
                  Welcome to my page! My name is Emily Thomas, and I am
                  currently a student at UCSD Extension, taking a Web
                  Development course. I first got interested in this when I
                  started my job as an Exective Assistant/Operations Manager at
                  Monevo. I help the team who helps deploy white labels,
                  integrate API, and set up iFrames. With all the knowledge I
                  will gain from this course, I hope to further immerse myself
                  into my current company's tech team and become a Front End Web
                  Developer
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>
                  I have linked the few projects I have been able to work on so
                  far, you can find those on my portfolio page. I will be adding
                  to this as I go through this course. Please also feel free to
                  reach out to me via my contact page, I would love to hear from
                  you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
