import React from 'react';
import Form from '@cat-react/form/Form';
import BasicInput from '../components/BasicInput';
import autoBind from 'auto-bind';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        autoBind(this);

        this.state = {
            canSubmit: false,
            values: null
        }
    }

    onValid() {
        this.setState({
            canSubmit: true
        });
    }

    onInvalid() {
        this.setState({
            canSubmit: false
        });
    }

    onValidSubmit(values) {
        this.setState({
            values: values
        });
    }

    render() {
        return (
            <Form onValid={this.onValid}
                  onInvalid={this.onInvalid}
                  onValidSubmit={this.onValidSubmit}>
                <h1>Login</h1>
                <BasicInput label="Email address"
                            name="email"
                            type="email"
                            value=""
                            validations={{isRequired: true, isEmail: true}}
                            validationErrors={{
                                isEmail: 'Enter a valid email address.'
                            }}
                            placeholder="Enter email"/>
                <BasicInput label="Password"
                            name="password"
                            type="password"
                            value=""
                            validations={{isRequired: true, minLength: 3}}
                            validationErrors={{
                                isRequired: 'Enter your password.',
                                minLength: 'A password must contain minimum 3 characters.'
                            }}
                            placeholder="Enter password"/>
                <button type="submit"
                        className="btn btn-primary"
                        disabled={!this.state.canSubmit}>Login</button>
                <div className="alert alert-light" role="alert">
                    Valid Submitted Values: {JSON.stringify(this.state.values)}
                </div>
            </Form>
        );
    };
}
