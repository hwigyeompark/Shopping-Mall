import React, {Component} from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';


class Join extends Component{
    render(){
        return(
            <div>
                <form method="post">
                    <div id="formWrap" style={{width:"30%", margin:"0 auto", marginTop:"2%", marginBottom:"2%"}}>
                        <FormGroup>
                            <Label for="exampleId">Id</Label>
                            <Input type="email" name="email" id="exampleId"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleName">Name</Label>
                            <Input type="text" name="name" id="exampleName"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePhone">Phone</Label>
                            <Input type="text" name="phone" id="examplePhone"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePost">PostCode</Label>
                            <Input type="text" name="postCode" id="examplePost"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleAddress">Address</Label>
                            <Input type="text" name="address" id="exampleAddress"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="text" name="email" id="exampleEmail"/>
                        </FormGroup>
                        <Button>Submit</Button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Join;