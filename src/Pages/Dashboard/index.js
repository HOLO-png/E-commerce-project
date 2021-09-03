import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import './style.scss';
import {
    AppstoreOutlined,
    BarsOutlined,
    ContainerOutlined,
    MessageOutlined,
    UsergroupAddOutlined,
} from '@ant-design/icons';
import DashboardMain from './DashboardMain/DashboardMain';

const { TabPane } = Tabs;

const Dashboard = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 687);
    }, []);

    const fontSizeIcon = { fontSize: '20px', paddingLeft: '10px' };
    const bgColor = {
        background: 'rgb(231, 231, 231)',
        minHeight: '100vh',
        padding: '20px',
    };
    return (
        <>
            <Tabs
                tabPosition={isMobile ? 'top' : 'left'}
                size="large"
                centered={false}
            >
                <TabPane
                    style={bgColor}
                    tab={
                        <span>
                            <AppstoreOutlined style={fontSizeIcon} />
                            Dashboard
                        </span>
                    }
                    key="1"
                >
                    <DashboardMain />
                </TabPane>
                <TabPane
                    style={bgColor}
                    tab={
                        <span>
                            <UsergroupAddOutlined style={fontSizeIcon} />
                            Customer
                        </span>
                    }
                    key="2"
                >
                    Customer
                </TabPane>
                <TabPane
                    style={bgColor}
                    tab={
                        <span>
                            <ContainerOutlined style={fontSizeIcon} />
                            Products
                        </span>
                    }
                    key="3"
                >
                    Products
                </TabPane>
                <TabPane
                    style={bgColor}
                    tab={
                        <span>
                            <BarsOutlined style={fontSizeIcon} />
                            Order
                        </span>
                    }
                    key="4"
                >
                    Order
                </TabPane>
                <TabPane
                    style={bgColor}
                    tab={
                        <span>
                            <MessageOutlined style={fontSizeIcon} />
                            Chat
                        </span>
                    }
                    key="5"
                >
                    Chat
                </TabPane>
            </Tabs>
        </>
    );
};
export default Dashboard;
