import React from 'react';
import { Layout } from 'antd';
import './layout.css';
import HeaderComponent from './Grids/HeaderComponent';
import SideComponent from './Grids/SideComponent';
import Components from '../Components';
import PhoneHeader from './Grids/PhoneHeader';

const { Header, Footer, Sider, Content } = Layout;
const w = window.innerWidth;
function MainLayout() {
  return (
    <Layout>
    <Header className='headerstyle'>
        { w < 1024 ? <PhoneHeader/>:
        <HeaderComponent/>}
    </Header>
    <Layout>
    { w < 1024 ? null :
      <Sider className='siderstyle'>
        <SideComponent/>
      </Sider>}
      <Content>
        <Components/>
      </Content>
    </Layout>
  </Layout>
  );
}

export default MainLayout;
