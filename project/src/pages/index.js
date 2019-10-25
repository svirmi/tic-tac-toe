import React from "react"
import { Button, Row, Col } from "antd";
import Footer from "../layout/footer";

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

    handleOpen(cell) {

    }

    handleClose() {

    }

    handleClickOutside(event) {
        console.log('clicked')
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={24} style={{textAlign: 'center'}}>
                        <h1>Hello my world!</h1>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span={12}>col-12</Col>
                    <Col span={12}><Button type="primary" shape="circle" icon="search" /></Col>
                </Row>
                <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                </Row>
                <Row>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                </Row>
                <Footer/>
            </div>
        )
    }
}

export default IndexPage
