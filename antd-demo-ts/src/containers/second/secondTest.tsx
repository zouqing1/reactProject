import * as React from 'react';
import { Modal, Button, Select } from 'antd';
const Option = Select.Option;

class HelloName extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = { visible: false }
}

  public showModal = () => {
    this.setState({
      visible: true,
    });
  }

  public handleOk = (e: any) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  public handleCancel = (e: any) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  public handleChange(value: any) {
    console.log(`selected ${value}`);
  }
  public render() {
       return (
        <div>
        <Button type="primary" onClick={this.showModal}>Open</Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled={true}>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        </Modal>
      </div>
       )
  }

}
export default HelloName;