import { React, Component } from 'react'
import ErrorIndicator from '../ErrorIndicator'

class ErrorBoundry extends Component {

    state = {
        error: false,
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        const { error } = this.state 

        if(error) return <ErrorIndicator />

        return this.props.children
    }
}

export default ErrorBoundry