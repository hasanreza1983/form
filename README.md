# [@cat-react](https://github.com/cat-react) / form ![Build Status](https://travis-ci.org/cat-react/form.svg?branch=master) [![codecov](https://codecov.io/gh/cat-react/form/branch/master/graph/badge.svg)](https://codecov.io/gh/cat-react/form)
A simple yet powerful library which helps creating validated forms in react. This project is inspired by [formsy-react](https://github.com/christianalfoni/formsy-react).

## Getting Started
Are you looking for a simple way to create validated forms with React?

Congratulations! Your search is over, because **`@cat-react/form`** offers you a simple way to create either frontend- or backend-validated forms.

```js
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
             }}/>
</Form>
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
