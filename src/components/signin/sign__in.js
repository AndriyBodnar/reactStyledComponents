import React, { Component } from "react";
import logo from "../../assets/img/padlock.svg";

import { Link } from "react-router-dom";
import {
  Container,
  Box,
  LogoBox,
  Logo,
  Input,
  Checkbox,
  Button,
  Text,
  Title,
  BoxContent,
  TextCheck,
} from "./sign__in-style-components.js";

class SignIn extends Component {
  state = {
    EmailAddress: "",
    Password: "",
    CheckButton: false,
    nameForEmailInput: "",
    nameForPasswordInput: "",
  };
  SaveEmailAddress = (event) => {
    this.setState({
      EmailAddress: event.target.value,
    });
  };
  SavePassword = (event) => {
    this.setState({
      Password: event.target.value,
    });
  };

  CheckInf = () => {
    if (
      this.state.EmailAddress === localStorage.getItem("EmailAddress") &&
      this.state.Password === localStorage.getItem("Password")
    ) {
      alert("true");
    } else {
      alert("false");
    }
  };
  CheckButton = () => {
    this.setState({
      CheckButton: !this.state.CheckButton,
    });
  };
  render() {
    return (
      <div className="wrapper1">
        <Container>
          <Box>
            <LogoBox>
              <Logo src={logo} />
            </LogoBox>
            <Title>Sign In</Title>
          </Box>
          <Box>
            <Input
              placeholder="Email Address *"
              value={this.state.EmailAddress}
              onChange={this.SaveEmailAddress}
            />
            <Input
              placeholder="Password *"
              value={this.state.Password}
              onChange={this.SavePassword}
              type="password"
            />
            <BoxContent>
              <div className="checkbox">
                <Checkbox
                  onClick={this.CheckButton}
                  type="checkbox"
                  id="check"
                  name="color-1"
                  value="indigo"
                />
                <label htmlFor="check"></label>
              </div>
              <TextCheck>Remember me</TextCheck>
            </BoxContent>
          </Box>
          <Box>
            <Button onClick={this.CheckInf}>Sign In</Button>
            <BoxContent style={{ justifyContent: `space-between` }}>
              <Text>Forgot Password?</Text>
              <Link to="/sign__up">Don't have an account? Sign Up</Link>
            </BoxContent>
          </Box>
        </Container>
      </div>
    );
  }
}
export default SignIn;
