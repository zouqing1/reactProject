import * as React from 'react';
import { Select } from 'antd';
const Option = Select.Option;
export class SchoolName extends React.Component<any, any> {
  public handleChange(value: any) {
    console.log(`selected ${value}`);
  }
  public render() {
    return (
      <div>
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled={true}>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} disabled={true}>
          <Option value="lucy">Lucy</Option>
        </Select>
      </div>
    )
  };
}
export default SchoolName;
