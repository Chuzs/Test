import React from 'react';
import { Button, Card, Row, Col, Input } from 'antd';
import { Switch, Route } from "react-router-dom";
import { LoginCard, ResetAgentSkillsCard, SetEnvirmentCard } from './CardList';
import { connect } from 'react-redux';
import { updateReqText } from '../redux/actions';
const { TextArea } = Input;
class Content extends React.Component {
  render() {
    const reqText = JSON.stringify(this.props.reqText, null, 4);
    const resText = JSON.stringify(this.props.resText, null, 4);
    return (
      <Row>
        <Col xs={0} sm={0} md={0} lg={9} xl={10} xxl={10} offset={1}>
          <Switch>
            <Route path="/login" >
              <LoginCard onChange={this.props.onChange}></LoginCard>
            </Route>
            <Route path="/resetAgentSkills" component={ResetAgentSkillsCard} />
            <Route path="/" component={SetEnvirmentCard} />
          </Switch>
        </Col>
        <Col xs={0} sm={0} md={0} lg={9} xl={11} xxl={11} offset={1}>
          <Card type="inner" title="请求报文" id="reqTextCard">
            <TextArea style={{ "border": "none", "resize": "none" }} autoSize={{ minRows: 1 }} value={reqText}></TextArea></Card>
          <Card type="inner" title="响应报文" id="resTextCard" extra={<Button>清除</Button>} style={{ marginTop: "20px" }}>
            <TextArea style={{ "border": "none", "resize": "none" }} autoSize={{ minRows: 8 }} value={resText} disabled></TextArea>
          </Card>
        </Col>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: value => {
      dispatch(updateReqText(value))
    }
  }
}

const mapStateToProps = state => ({
  reqText: state
})

Content = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)

export default Content;