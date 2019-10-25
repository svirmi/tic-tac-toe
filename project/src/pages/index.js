import React from "react"
import { Button } from "antd";

import 'antd/dist/antd.css';

class IndexPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: 'is-loading'
        }
    }

    componentDidMount () {
        this.timeoutId = setTimeout(() => {
            this.setState({loading: ''});
        }, 100);
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleOpen(article) {

    }

    handleClose() {

    }

    handleClickOutside(event) {
        console.log('clicked')
    }

    render() {
        return (
                <div>
                    <h1>Hello my world!</h1>
                    <Button type="primary" shape="circle" icon="search" />
                    <Button type="primary" shape="circle">
                        A
                    </Button>
                </div>
        )
    }
}

export default IndexPage
