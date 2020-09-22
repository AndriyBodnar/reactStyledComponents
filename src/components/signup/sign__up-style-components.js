import styled from "styled-components";

const Container = styled.div`
  width: 30rem;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #121212;
  border-radius: 10px;
`;
const Box = styled.div`
  padding: 10px 20px;
  margin: 0px 1rem;
`;
const Button = styled.button`
  width: 100%;
  height: 2rem;
  background-color: #90caf9;
  border: none;
  border-radius: 5px;
  color: black;
  font-size: 14px;
  font-weight: lighter;
  text-transform: uppercase;
  cursor: pointer;
  margin-bottom: 20px;
`;
const BoxContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%
`;
const LogoBox = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: rgb(226, 157, 169);
  border-radius: 100px;
  margin: auto;
`;
const Logo = styled.img`
  width: 1.5rem;
  padding-top: 0.75rem;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
`;
const Input = styled.input`
  display: block;
  color: white;
  width: 97%;
  height: 2rem;
  border: 1px solid gray;
  background-color: black;
  font-size: 15px;
  margin-top: 18px;
  padding: 10px 0px 10px 10px;
  border-radius: 10px;
`;
const Checkbox = styled.input`
  width: 1rem;
`;

const Text = styled.p`
  color: #dfdfdf;
  cursor: pointer;
`;
const MainText = styled.h1`
  color: #dfdfdf;
  text-align: center;
  font-size: 26px;
  font-weight: lighter;
`;
const Link = styled.a`
  color: #90caf9;
  padding-bottom: 50px;
`;

export {
  Container,
  Box,
  LogoBox,
  Logo,
  Input,
  Checkbox,
  Button,
  Text,
  MainText,
  BoxContent,
  Link,
};
