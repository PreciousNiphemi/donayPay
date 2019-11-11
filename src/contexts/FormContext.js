import React, { createContext, Component } from 'react';
// import axios from 'axios';


export const FormContext = createContext()


class FormContextProvider extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        message: '',
        loading: false,
    }
    onChange = (e, identifier) => {
        this.setState({
            [identifier]: e.target.value,
            message: null
        });
    };

    // checkPassword = () => {
    //     let { password } = this.state;
    //     let check = password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/);
    //     if (!check){
    //         this.setState({
    //             message : "Password must be up to 8 characters and must contain only alphanumeric characters"
    //         })
    //     }
    // }

    comparePassword = () => {
        let { password, confirmPassword } = this.state;

        if (password && confirmPassword && confirmPassword !== password) {
            this.setState({
                message: "Your passwords do not match"
            })
        }
    }

    onSignUpSubmit = (e) => {
        e.preventDefault();
        this.setState({ loading : true, })
        let {firstName, lastName, email, password, } = this.state;
        let userDetails = {
            first_name : firstName,
            last_name : lastName,
            email, 
            password,
        }
        // Fetch API here

        console.log(this.state);
    }


    onLoginSubmit = (e) => {
        e.preventDefault();
        this.setState({ loading : true, })

        let {email, password, } = this.state;
        let userDetails = {
            email, 
            password,
        }
        // Fetch API here

        console.log(this.state);
    }


    render() {
        return (
            <FormContext.Provider 
            value = {{ 
                ...this.state, onChangeHandler: this.onChange, onSignUpFormSubmitHandler: this.onSignUpSubmit, comparePasswordHandler: this.comparePassword,
                onLoginFormSubmitHandler : this.onLoginSubmit, loading: this.state.loading,
                }}>
                {this.props.children}
            </FormContext.Provider>
        );
    }
}

export default FormContextProvider;