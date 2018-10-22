import React, { Component } from 'react'
import {Form,Input,Button} from '../common/StyledComponents';

export default class Authentication extends Component {

  render() {
    return (
        <Form>
            <h3 style={{textAlign: "center"}}>Authentication</h3>
            <Input type="text" placeholder="email@yahoo.com" />
            <Input type="password" placeholder="password" />
            <Button>Login</Button>
        </Form>
    )
  }
}
