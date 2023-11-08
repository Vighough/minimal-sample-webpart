/* eslint-disable */
import * as React from "react";
import { IHelloWorldProps } from "./IHelloWorldProps";
import { IHelloWorldState } from "./IHelloWorldState";

export default class HelloWorld extends React.Component<
  IHelloWorldProps,
  IHelloWorldState
> {
  constructor(props: IHelloWorldProps) {
    super(props);
    this.state = {
      nameToShow: "",
    };

    this.props.graphService
      .getName()
      .then((user) => {
        const fullName = user.surname
          ? user.givenName + " " + user.surname
          : user.displayName;
        console.log("Naam gevonden: " + fullName);
        console.log("Volledige object:");
        console.log(user);
        this.setState({
          nameToShow: user.givenName + " " + user.surname!
        })
      })
      .catch((error) => {
        console.log("Error retrieving user name " + error);
      });
  }

  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <section>
        <h1>{this.state.nameToShow}</h1>
      </section>
    );
  }
}
