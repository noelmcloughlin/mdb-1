import React from "react";
import {
    MDBContainer,
    MDBCol,
    MDBRow
} from "mdbreact";
import "./SplashPage.css";

export default class SplashPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  render() {
    return (
          <MDBContainer>
            <MDBRow>
              <MDBCol width="100%">
                  <div id="intro" className="view">
                      <div className="mask">
                      </div>
                  </div>
                <hr className="my-5" />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
    );
  }
}
