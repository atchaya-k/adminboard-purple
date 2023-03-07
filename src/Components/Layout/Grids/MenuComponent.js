import React,{useState} from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Navigation Three',
    key: 'setting',
    icon: <SettingOutlined />,
  },
];
function MenuComponent() {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
     // console.log('click ', e);
      setCurrent(e.key);
    };
  return (
    <Menu className='menustyle' onClick={onClick} selectedKeys={[current]} mode="vertical" items={items} />
  )
}

export default MenuComponent