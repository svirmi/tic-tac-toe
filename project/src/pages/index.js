import React from "react"
import Game from "../components/tic-tac-toe";

import AntHeader from "../layout/header";

import { Row, Col } from 'antd';

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

    handleClickOutside(event) {
        console.log('clicked')
    }

    render() {
        return (
            <div>
                <AntHeader/>
                <div className="container">
                <Row>
                    <Col span={8}>
                        <Game/>
                    </Col>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                </Row>
                </div>
            </div>
        )
    }
}

export default IndexPage
