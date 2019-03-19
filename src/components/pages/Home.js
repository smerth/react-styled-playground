import React, { Component } from "react";
import styled from "styled-components";
import Container from "../styled/Container";

const Image = styled.img`
  width: 100%;
`;

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 0
    };
    console.log("constructor data: " + this.state.data);
  }

  increment() {
    this.setState({
      data: this.state.data + 1
    });
    console.log("increment data: " + this.state.data);
  }

  render() {
    return (
      <Container>
        <h1>Hey Coders f</h1>
        {console.log("html data: " + this.state.data)}
        <p>{this.state.data}</p>
        <button onClick={this.increment.bind(this)}>Increment</button>

        <Image
          src={require("../../assets/hero.gif")}
          alt="water lapping against a mediterainean shore"
        />
        <p>
          Amet veniam sint excepteur est consequat nulla nisi aliqua do cillum
          culpa exercitation irure quis. Lorem sunt magna ullamco ullamco. Anim
          voluptate commodo veniam incididunt culpa veniam duis ad excepteur
          sint id. Duis eu consequat magna Lorem magna dolore ullamco excepteur
          incididunt. Anim ut culpa eiusmod nulla. Incididunt reprehenderit qui
          irure voluptate laboris duis est ex eiusmod velit occaecat ad officia.
          Amet labore Lorem fugiat reprehenderit laborum ut ullamco adipisicing
          enim incididunt. Elit magna adipisicing esse officia ullamco elit
          dolor nulla officia adipisicing eu. Fugiat consequat magna sint do
          esse ut amet amet. Cillum enim nisi occaecat enim.
        </p>
      </Container>
    );
  }
}
