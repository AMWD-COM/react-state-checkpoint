import "./App.css";

import React, { Component } from "react";
import Counter from "./Counter";


export class App extends Component {
  state = {
    fullName: "Léa Wallace",
    bio: "I introduce my self Léa Wallace a full stack web developper",
    image: "https://picsum.photos/id/996/150/150",
    profession: "Web Developer",
    show: false,
  };

  toggleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <>
        <div className="App">
          <div className="profile">
            {this.state.show ? (
              <div>
                <div style={{ marginBottom: "60px" }}>
                  <img
                    src="https://picsum.photos/id/815/880/280"
                    alt="hand picture"
                    className="imgWelcome"
                  />
                  <img
                    src={this.state.image}
                    alt="girl picture"
                    className="imgProfile"
                  />
                </div>
                <h1>{this.state.fullName}</h1>
                <p>Bio: {this.state.bio}</p>{" "}
                <p>Profession : {this.state.profession}</p>
                <div className="counter">
                  <h3>
                    <Counter />
                  </h3>
                </div>
              </div>
            ) : (
              <div>
                <img
                  src="https://picsum.photos/id/815/750/300"
                  alt="hand picture"
                  className="imgWelcome"
                />
                <h1>Welcome Click To View Profile </h1>
              </div>
            )}
          </div>
          <button
            onClick={this.toggleShow}
            className={!this.state.show ? "btnShow" : "btnHide"}
          >
            {!this.state.show ? "Show Profile" : "Hide Profile"}
          </button>
        </div>
      </>
    );
  }
}

export default App;
