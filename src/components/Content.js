import React from 'react';
import { Button, Row, Col, Input, Tabs } from 'antd';
import { Switch, Route } from "react-router-dom";
import { LoginCard, ResetAgentSkillsCard, SetEnvirmentCard, AutoReadyCard, SetAgentStateCard } from './card'
const { TabPane } = Tabs;
const { TextArea } = Input;
class Content extends React.Component {
  state = {
    operation: ''
  }
  clear = () => {
    this.props.onResponse('');
  }
  UNSAFE_componentWillReceiveProps(props){
    if (props.reKey === 'res') {
      this.setState({
        operation: <Button onClick={this.clear}>清除</Button>
      })
    } else if(props.reKey === 'req') {
      this.setState({
        operation: ""
      })
    }
  }
  
  onClick = (key) => {
    this.props.onReKeyChange(key);
  }

  render() {
    const reqText = JSON.stringify(this.props.reqText, null, 4);
    const resText = this.props.resText;
    return (
      <Col className="main-content" xs={0} sm={0} md={0} lg={18} xl={20} xxl={21}>
        <Row>
          <Col xs={0} sm={0} md={0} lg={9} xl={10} xxl={10} offset={1}>
            <Switch>
              <Route path="/ccacs/login" >
                <LoginCard {...this.props} />
              </Route>
              <Route path="/ccacs/resetAgentSkills">
                <ResetAgentSkillsCard onChange={this.props.onChange} onResponse={this.props.onResponse} onReKeyChange={this.props.onReKeyChange} />
              </Route>
              <Route path="/ccacs/setagentautoenteridle" >
                <AutoReadyCard onChange={this.props.onChange} onResponse={this.props.onResponse} onReKeyChange={this.props.onReKeyChange}/>
              </Route>
              <Route path="/ccacs/setagentstate" >
                <SetAgentStateCard onChange={this.props.onChange} onResponse={this.props.onResponse} onReKeyChange={this.props.onReKeyChange}/>
              </Route>
              <Route path="/">
                <SetEnvirmentCard onChange={this.props.onChange} onReKeyChange={this.props.onReKeyChange}/>
              </Route>
              
            </Switch>
          </Col>
          <Col xs={0} sm={0} md={0} lg={9} xl={10} xxl={10} offset={2} >
            <Tabs activeKey={this.props.reKey} tabBarExtraContent={this.state.operation} onTabClick={this.onClick}>
              <TabPane tab="请求报文" key="req">
                <TextArea style={{ "resize": "none", "maxHeight": "calc(100vh - 300px)", "border": "none" }} autoSize={{ minRows: 1 }} value={reqText}></TextArea>
              </TabPane>
              <TabPane tab="响应报文" key="res">
                <TextArea style={{ "resize": "none", "maxHeight": "calc(100vh - 300px)", "border": "none" }} autoSize="true" value={resText}></TextArea>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Col>
    )
  }
}

export default Content;