# [@cat-react](https://github.com/cat-react) / form ![Build Status](https://travis-ci.org/cat-react/form.svg?branch=master) [![codecov](https://codecov.io/gh/cat-react/form/branch/master/graph/badge.svg)](https://codecov.io/gh/cat-react/form)
A simple yet powerful library which helps creating validated forms in react. This project is inspired by [formsy-react](https://github.com/christianalfoni/formsy-react).

## Getting Started
Are you looking for a simple way to create validated forms with React?

Congratulations! Your search is over, because **`@cat-react/form`** offers you a simple way to create either frontend- or backend-validated forms.

Take a look at the <a href="https://cat-react.github.io/form/">examples</a> to find out how to create the form of your desire.

```jsx
<Form>
    <MyInput name="email"
             validations={{
                 isEmail: true,
                 isRequired: true
             }}/>
    <MyInput name="email_confirm"
             validations={{
                 isRequired: true,
                 equalsField: 'email'
             }}
             messages={{
                 isRequired: 'Please confirm your email address.',
                 equalsField: 'The email addresses do not match each other.'
             }}/>
</Form>
```

## Example Custom TextInput
Here you can see an example of an custom TextInput which shows how you can implement your own Inputs:
```jsx
import React from 'react';
import Input from '@cat-react/form/Input'

@Input
export default class BasicInput extends React.Component {
    onChange(event) {
        this.props.setValue(event.target.value);
    }

    getClassName() {
        let className = 'form-control';
        if (!this.props.isPristine()) {
            if (this.props.isValid()) {
                const isWarning = this.props.getMessages().length > 0;
                if (isWarning) {
                    className += ' warning';
                }
            } else {
                className += ' error';
            }
        }
        return className;
    }

    renderMessages() {
        let messages = [];
        if (!this.props.isPristine()) {
            messages = this.props.getMessages();
        }

        if (!messages || messages.length <= 0) {
            return null;
        }

        let className = 'errorText';
        if (this.props.isValid()) {
            className = 'warningText';
        }

        return <ul className={className}>{messages.map((message, i) => <li key={i}>{message}</li>)}</ul>;
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.name}>{this.props.label} {this.props.isRequired() ? '*' : null}</label>
                <input type={this.props.type}
                       className={this.getClassName()}
                       id={this.props.name}
                       aria-describedby={this.props.name}
                       placeholder={this.props.placeholder}
                       value={this.props.getValue()}
                       onChange={this.onChange.bind(this)}
                       onBlur={this.props.touch}/>
                {this.renderMessages()}
            </div>
        );
    }
}
```

## Installation

## Contribution
The project requires at least the latest stable version of node and npm. You also need to have yarn installed globally.

Two simple steps to get the things running on your local machine:
- Fork the repo
- Execute `yarn`

You can run the examples with `yarn run examples` and the tests with `yarn test`.

## License
[MIT License](/LICENSE)

Copyright (c) 2017 Catalysts GmbH
