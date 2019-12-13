import React from 'react';
import { Button, Row, Col, Input, Tabs } from 'antd';
import { Switch, Route } from "react-router-dom";
import { LoginCard, ResetAgentSkillsCard, SetEnvirmentCard } from './card'
const { TabPane } = Tabs;
const { TextArea } = Input;
class Content extends React.Component {
  state = {
    operactions: ''
  }
  onClick = () => {
    this.props.onResponse('');
  }
  onChange = (key) => {
    if (key === '2') {
      this.setState({
        operactions: <Button onClick={this.onClick}>清除</Button>
      })
    } else {
      this.setState({
        operactions: ""
      })
    }
  }
  render() {
    const reqText = JSON.stringify(this.props.reqText, null, 4);
    const resText = this.props.resText;
    return (
      <Col className="main-content" xs={0} sm={0} md={0} lg={18} xl={20} xxl={21}>
        <Row>
          <Col xs={0} sm={0} md={0} lg={9} xl={10} xxl={10} offset={1}>
            <Switch>
              <Route path="/login" >
                <LoginCard {...this.props} />
              </Route>
              <Route path="/resetAgentSkills">
                <ResetAgentSkillsCard onChange={this.props.onChange} onResponse={this.props.onResponse} />
              </Route>
              <Route path="/">
                <SetEnvirmentCard onChange={this.props.onChange} />
              </Route>
            </Switch>
          </Col>
          <Col xs={0} sm={0} md={0} lg={9} xl={11} xxl={11} offset={1}>
            <Tabs defaultActiveKey="1" tabBarExtraContent={this.state.operactions} onChange={this.onChange}>
              <TabPane tab="请求报文" key="1">
                <TextArea style={{ "resize": "none", "maxHeight": "calc(100vh - 300px)", "border": "none" }} autoSize={{ minRows: 1 }} value={reqText}></TextArea>
              </TabPane>
              <TabPane tab="响应报文" key="2">
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