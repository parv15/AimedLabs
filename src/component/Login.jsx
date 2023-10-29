import React, { useState } from 'react';
import styled from 'styled-components';
import {EyeInvisibleOutlined, EyeOutlined} from '@ant-design/icons';


const LoginContainer = styled.div`
  background-color: #f2f2f2;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const ContentContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 8rem 3rem;
  width: 80%;   
  margin: 0 2rem;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    position: relative;
    top:0rem;
    margin-bottom: 2rem;
    padding-top: 2rem;
  }
`;

const Input = styled.input`
  padding: 10px;
  margin: 6px 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const InputBoxHeading = styled.h5`
  text-align: left;
  padding: 0;
  margin: 2px 0;
  color: #737B86;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #0073e6;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  background: #1575A7;
  margin: 3rem 0;

  &:hover {
    background-color: #0051a8;
  }
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 3px 0;
`;

const CheckBox = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #737B86;
  border-radius: 5px;
`;

const Image = styled.img`
  margin: 0 5rem;
  width: 35%;
  height: 45%;
  @media (max-width: 768px) {
    
    margin-top: 2rem;
  }
`;

const Heading = styled.label`
  color: #737B86;
  text-wrap: nowrap;
`;

const Heading1 = styled.label`
color: #F78719;
&:hover { 
    cursor: pointer;
    color: #1575A7;
  }
  @media (max-width: 768px) {
   margin-left:1.5rem;
  }
`;

const UnderLineHeading = styled.label`
  color: #F78719;
  text-decoration: underline;
  font-weight: bold;

  &:hover { 
    cursor: pointer;
    color: #1575A7;
  }
`;

const LowerContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;


const Password = styled.div`
    position: relative;
    `;
    
const PasswordIcon = styled.div`
    position: absolute;
    right: 0rem;
    bottom: 0.9rem;`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  
  const handleLogin = () => {
    if(username && password && checkbox){
      alert('Login Successful');}
    else{
        alert('Please fill all the fields');
    }
  }
 

  return (
    <LoginContainer>
      <Image src="Group 3608.svg" alt="AimedLabs" />
      <ContentContainer>
        <h1>Login</h1>
        <InputBoxHeading>Login ID</InputBoxHeading>

        <Input
          type="text"
          placeholder="Enter Login ID"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <InputBoxHeading>Password</InputBoxHeading>
        <Password>
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
         
        />
        
        <PasswordIcon onClick={()=>setShowPassword(!showPassword)} >
          {showPassword ? <EyeOutlined/> :<EyeInvisibleOutlined/> }
       </PasswordIcon>
      
        </Password>
       

      
        <LowerContainer>
          <div>
            <CheckBoxContainer>
              <CheckBox type="checkbox" name="remember" value="remember" />
              <Heading htmlFor="remember">Remember me</Heading>
            </CheckBoxContainer>
            <CheckBoxContainer>
              <CheckBox type="checkbox" name="Terms&Condition" value="Terms&Condition" onClick={()=>setCheckbox(!checkbox)} />
              <Heading htmlFor="Terms&Condition">Agree to <UnderLineHeading>Terms & Conditions</UnderLineHeading></Heading>
            </CheckBoxContainer>
          </div>
          <div>
            <Heading1>Change Password</Heading1>
          </div>
        </LowerContainer>
        <SubmitButton onClick={handleLogin}>Login</SubmitButton>
        <div>Don't have an account?&nbsp;<UnderLineHeading>Register Here</UnderLineHeading></div>
      </ContentContainer>
    </LoginContainer>
  );
};

export default Login;
