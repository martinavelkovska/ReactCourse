import {Component} from 'react';

class ErrorBoundary extends Component { // i wanna wrap around components that which should be protected by that component
    constructor(){
        super();
        this.state = {hasError: false};
    }

    componentDidCatch(error){ // i wanna do something when the error occurs
        console.log(error);
        this.setState({hasError: true});
    }

    render(){
        if(this.state.hasError){
            return <p>Something went wrong!</p>
        }
        return this.props.children
    }
}

export default ErrorBoundary;