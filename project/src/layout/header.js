import React from "react";
import "../styles/App.css";
import { PageHeader, Menu, Dropdown, Icon, Button, Typography, Row } from 'antd';

const { Paragraph } = Typography;

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>
);

const DropdownMenu = () => {
    return (
        <Dropdown key="more" overlay={menu}>
            <Button
                style={{
                    border: 'none',
                    padding: 0,
                }}
            >
                <Icon
                    type="ellipsis"
                    style={{
                        fontSize: 20,
                        verticalAlign: 'top',
                    }}
                />
            </Button>
        </Dropdown>
    );
};

const IconLink = ({ src, text }) => (
    <a
        style={{
            marginRight: 16,
            display: 'flex',
            alignItems: 'center',
        }}
    >
        <img
            style={{
                marginRight: 8,
            }}
            src={src}
            alt="start"
        />
        {text}
    </a>
);

const content = (
    <div className="content">
        <Paragraph>
            Ant Design interprets the color system into two levels: a system-level color system and a
            product-level color system.
        </Paragraph>
        <Paragraph>
            Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
            easier for designers to have a clear psychological expectation of color when adjusting colors,
            as well as facilitate communication in teams.
        </Paragraph>
        <Row className="contentLink" type="flex">
            <IconLink
                src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
                text="Quick Start"
            />
            <IconLink
                src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
                text=" Product Info"
            />
            <IconLink
                src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
                text="Product Doc"
            />
        </Row>
    </div>
);

const Content = ({ children, extraContent }) => {
    return (
        <Row className="content" type="flex">
            <div className="main" style={{ flex: 1 }}>
                {children}
            </div>
            <div
                className="extra"
                style={{
                    marginLeft: 80,
                }}
            >
                {extraContent}
            </div>
        </Row>
    );
};

const AntHeader = () => {
    return (
        <PageHeader
            title="Tic Tac Toe"
            style={{
                border: '1px solid rgb(235, 237, 240)',
            }}
            subTitle="With minmax algorithm"
            extra={[
                <Button key="3">Operation</Button>,
                <Button key="2">Operation</Button>,
                <Button key="1" type="primary">
                    Primary
                </Button>,
                <DropdownMenu key="more" />,
            ]}
        >
            <Content
                extraContent={
                    <img
                        src={'/logo.png'}
                        alt="min max for tic tac toe"
                        height={120}
                    />
                }
            >
                {content}
            </Content>
        </PageHeader>
    )
}

export default AntHeader