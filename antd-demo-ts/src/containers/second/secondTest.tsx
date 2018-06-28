import * as React from 'react';
class HelloName extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state={value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
   }
   public handleChange(event:any) {
    this.setState({value: event.target.value});
  }

  public handleSubmit(event:any) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  public render(){
       return (
        <form onSubmit={this.handleSubmit}>
        <label>
          Name2:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
       )
   }

}
export default HelloName;