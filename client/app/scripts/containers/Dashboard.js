/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Tuesday, 29th May 2018 1:27:27 am
 * Last Modified: Friday, 8th June 2018 7:58:23 am
 */
import React, { Component } from 'react';
import classnames from 'classnames';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Navigation, SideBarComponent, Button } from '../components';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="page-dashboard" id="page">
        <Row>
          <Col>
            <Navigation2 isFixed data={{}} />
          </Col>
        </Row>
        <Row className="body">
          <SideBarComponent active="dashboard" />
          <Col sm="12" md="8" lg="8" className="content">
            Dashboard
          </Col>
        </Row>
      </div>
    );
  }
}
