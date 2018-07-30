import * as React from 'react';
import { Menu, Icon, Row, Col } from 'antd';
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class Myindex extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      current: 'index'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick(e: any) {
    console.log(e.key);
    this.setState({
      current: e.key,
    })
  }
  public render() {
    return (
      <div>
        <Row>
          <Col span={2}>&nbsp;</Col>
          <Col span={2} className={'myLogo'}>
            <Icon type="appstore-o" />logo
        </Col>
          <Col span={18}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              defaultOpenKeys={['1']}
              mode="horizontal">
              <Menu.Item key="index">
                <Icon type="home" />首页
              </Menu.Item>
              <Menu.Item key="mail">
                <Icon type="solution" />产品列表
              </Menu.Item>
              <Menu.Item key="list">
                <Icon type="calculator" />证券列表
              </Menu.Item>
              <Menu.Item key="news">
                <Icon type="schedule" />情景分析
              </Menu.Item>
              <Menu.Item key="company">
                <Icon type="message" />公司简介
              </Menu.Item>
              <Menu.Item key="about">
                <Icon type="team" />联系我们
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={2}>&nbsp;</Col>
        </Row>
        <Row>
          <Col span={2}>&nbsp;</Col>
          <Col span={20}>fdgsdfsdfs</Col>
          <Col span={2}>&nbsp;</Col>
        </Row>
      </div>
    )
  }
}
export default Myindex;