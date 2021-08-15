import React, { useState } from "react"
import "./entryForm.css"
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  NavItem,
  NavLink,
  Progress,
  Row,
  TabContent,
  TabPane,
} from "reactstrap"
import Sign from "./Sign"
import classnames from "classnames"
import { Link } from "react-router-dom"
import Camera from "./Camera/Camera"
import MiniCards from "./MiniCards"
const EntryForm = () => {
  const [activeTab, setactiveTab] = useState(1)
  const [activeTabProgress, setactiveTabProgress] = useState(1)
  const [progressValue, setprogressValue] = useState(20)
  const [activeTabVartical, setoggleTabVertical] = useState(1)
  const [textcount, settextcount] = useState(0)

  const [textareabadge, settextareabadge] = useState(0)

  function toggleTab(tab) {
    if (activeTab !== tab) {
      if (tab >= 1 && tab <= 5) {
        setactiveTab(tab)
      }
    }
  }

  function toggleTabVertical(tab) {
    if (activeTabVartical !== tab) {
      if (tab >= 1 && tab <= 5) {
        setoggleTabVertical(tab)
      }
    }
  }

  function toggleTabProgress(tab) {
    if (activeTabProgress !== tab) {
      if (tab >= 1 && tab <= 5) {
        setactiveTabProgress(tab)

        if (tab === 1) {
          setprogressValue(20)
        }
        if (tab === 2) {
          setprogressValue(40)
        }
        if (tab === 3) {
          setprogressValue(60)
        }
        if (tab === 4) {
          setprogressValue(80)
        }
        if (tab === 5) {
          setprogressValue(100)
        }
      }
    }
  }

  function textareachange(event) {
    const count = event.target.value.length
    if (count > 0) {
      settextareabadge(true)
    } else {
      settextareabadge(false)
    }
    settextcount(event.target.value.length)
  }
  return (
    <React.Fragment>
      <div className="vmsFormCont">
        <Container fluid={true}>
          <Row>
            <Col lg="14">
              <Card>
                <CardBody>
                  <div className=" wizard  ">
                    <div className="steps clearfix formHidden">
                      <ul>
                        <NavItem
                          className={classnames({
                            current: activeTabVartical === 1,
                          })}
                        >
                          <Label className="form-check-label" htmlFor="topMenu">
                            Visitor
                          </Label>
                          <Input
                            className={classnames({
                              active: activeTabVartical === 1,
                            })}
                            onClick={() => {
                              toggleTabVertical(1)
                            }}
                            type="radio"
                            id="topMenu"
                          ></Input>
                        </NavItem>
                        <NavItem
                          className={classnames({
                            current: activeTabVartical === 2,
                          })}
                        >
                          <NavLink
                            className={classnames({
                              active: activeTabVartical === 2,
                            })}
                            onClick={() => {
                              toggleTabVertical(2)
                            }}
                          ></NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({
                            current: activeTabVartical === 3,
                          })}
                        >
                          <NavLink
                            className={
                              (classnames({
                                active: activeTabVartical === 3,
                              }),
                              "done")
                            }
                            onClick={() => {
                              toggleTabVertical(3)
                            }}
                          ></NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({
                            current: activeTabVartical === 4,
                          })}
                        >
                          <NavLink
                            className={
                              (classnames({
                                active: activeTabVartical === 4,
                              }),
                              "done")
                            }
                            onClick={() => {
                              toggleTabVertical(4)
                            }}
                          ></NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({
                            current: activeTabVartical === 5,
                          })}
                        >
                          <NavLink
                            className={
                              (classnames({
                                active: activeTabVartical === 5,
                              }),
                              "done")
                            }
                            onClick={() => {
                              toggleTabVertical(5)
                            }}
                          ></NavLink>
                        </NavItem>
                      </ul>
                    </div>
                    <div className="content clearfix">
                      <TabContent
                        activeTab={activeTabVartical}
                        className="body"
                      >
                        <TabPane tabId={1}>
                        <Camera/>
                          <Form>
                            <Col lg="9">
                              <FormGroup className="mb-3 ">

                                <Label htmlFor="basicpill-pancard-input">
                                  Visitor Name
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-pancard-input5"
                                />
                              </FormGroup>
                            </Col>

                            <Col lg="9">
                              <FormGroup className="mb-3">
                                <Label htmlFor="basicpill-vatno-input6">
                                  Visitor Company Name
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-vatno-input6"
                                />
                              </FormGroup>
                            </Col>

                            <Col lg="9">
                              <FormGroup className="mb-3">
                                <Label htmlFor="basicpill-cstno-input7">
                                  Visitor Company Email
                                </Label>
                                <Input
                                  type="email"
                                  className="form-control"
                                  id="basicpill-cstno-input7"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="9">
                              <FormGroup className="mb-3">
                                <Label htmlFor="basicpill-phoneno-input3">
                                  Visitor Phone Number
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-phoneno-input3"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="9">
                              <FormGroup className="mb-3">
                                <Label htmlFor="basicpill-servicetax-input8">
                                  Id Type
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-servicetax-input8"
                                />
                              </FormGroup>
                            </Col>

                            <Col lg="9">
                              <FormGroup className="mb-3">
                                <Label htmlFor="basicpill-companyuin-input9">
                                  Id number
                                </Label>
                                <Input
                                  type="number"
                                  className="form-control"
                                  id="basicpill-companyuin-input9"
                                />
                              </FormGroup>
                            </Col>
                          </Form>
                        </TabPane>
                        <TabPane tabId={2}>
                          <div className="vmsFormTable2 ">
                            <div className="vmsFormRadio form-check ">
                              <ul>
                                <li className="mt-3">
                                  <Label
                                    className="form-check-label"
                                    htmlFor="basicpill-pancard-input"
                                  >
                                    Visitor
                                  </Label>
                                  <Input
                                    type="radio"
                                    name="visitorTYpe"
                                    className="form-check-input"
                                    id="basicpill-pancard-input5"
                                  />
                                </li>
                                <li className="mt-3">
                                  <Label htmlFor="basicpill-pancard-input5">
                                    Vendor
                                  </Label>
                                  <Input
                                    name="visitorTYpe"
                                    type="radio"
                                    className="form-check-label"
                                    id="basicpill-pancard-input5"
                                  />
                                </li>
                                <li className="mt-3">
                                  <Label htmlFor="basicpill-pancard-input5">
                                    Courior
                                  </Label>
                                  <Input
                                    name="visitorTYpe"
                                    type="radio"
                                    className="form-check-label"
                                    id="basicpill-pancard-input5"
                                  />
                                </li>
                                <li className="mt-3">
                                  <Label htmlFor="basicpill-pancard-input5">
                                    Service
                                  </Label>
                                  <Input
                                    name="visitorTYpe"
                                    type="radio"
                                    className="form-check-label"
                                    id="basicpill-pancard-input5"
                                  />
                                </li>
                                <li className="mt-3">
                                  <Label htmlFor="basicpill-pancard-input5">
                                    Cargo Shipment
                                  </Label>
                                  <Input
                                    name="visitorTYpe"
                                    type="radio"
                                    className="form-check-label"
                                    id="basicpill-pancard-input5"
                                  />
                                </li>
                                <li className="mt-3">
                                  <Label htmlFor="basicpill-pancard-input5">
                                    Others
                                  </Label>
                                  <Input
                                    name="visitorTYpe"
                                    type="radio"
                                    className="form-check-label"
                                    id="basicpill-pancard-input5"
                                  />
                                </li>
                              </ul>
                            </div>
                            <div className="vmsFormInput">
                              <Form>
                                <Col lg="20">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-pancard-input5">
                                      Visitor
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-pancard-input5"
                                    />
                                  </FormGroup>
                                </Col>

                                <Col lg="20">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-vatno-input6">
                                      Visitor Company Name
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-vatno-input6"
                                    />
                                  </FormGroup>
                                </Col>

                                <Col lg="20">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-cstno-input7">
                                      Visitor Company Email
                                    </Label>
                                    <Input
                                      type="email"
                                      className="form-control"
                                      id="basicpill-cstno-input7"
                                    />
                                  </FormGroup>
                                </Col>

                                <Col lg="20">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-servicetax-input8">
                                      Id Type
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-servicetax-input8"
                                    />
                                  </FormGroup>
                                </Col>

                                <Col lg="20">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-companyuin-input9">
                                      Id number
                                    </Label>
                                    <Input
                                      type="number"
                                      className="form-control"
                                      id="basicpill-companyuin-input9"
                                    />
                                  </FormGroup>
                                </Col>
                              </Form>
                            </div>
                          </div>
                        </TabPane>
                        <TabPane tabId={3}>
                          <div>
                            <Form>
                              <Col lg="10">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="basicpill-pancard-input5">
                                    Contact Person
                                  </Label>

                                  <div className="col-md-12">
                                    <select className="form-control">
                                      <option>Employee 1</option>
                                      <option>Employee 2</option>
                                      <option>Employee 3</option>
                                    </select>
                                  </div>
                                </FormGroup>
                              </Col>

                              <Col lg="10">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="basicpill-vatno-input6">
                                    Contact Person Name
                                  </Label>
                                  <Input
                                    type="number"
                                    className="form-control"
                                    id="basicpill-vatno-input6"
                                  />
                                </FormGroup>
                              </Col>

                              <Col lg="10">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="basicpill-cstno-input7">
                                    Contact Person Number or Email
                                  </Label>
                                  <Input
                                    type="email"
                                    className="form-control"
                                    id="basicpill-cstno-input7"
                                  />
                                </FormGroup>
                              </Col>

                              <Col lg="10">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="basicpill-servicetax-input8">
                                    Badge No
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-servicetax-input8"
                                  />
                                </FormGroup>
                              </Col>

                              <Col lg="10">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="basicpill-companyuin-input9">
                                    Purpose Type
                                  </Label>
                                  <div className="col-md-10">
                                    <select className="form-control">
                                      <option>Purpose 1</option>
                                      <option>Purpose 2</option>
                                      <option>Purpose 3</option>
                                    </select>
                                  </div>
                                </FormGroup>
                              </Col>
                              <Col lg="10">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="basicpill-companyuin-input9">
                                    Couriery Type
                                  </Label>
                                  <div className="col-md-10">
                                    <select className="form-control">
                                      <option> Couriery 1</option>
                                      <option> Couriery 2</option>
                                      <option> Couriery 3</option>
                                    </select>
                                  </div>
                                </FormGroup>
                              </Col>
                              <Col lg="10">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="basicpill-companyuin-input9">
                                    Purpose
                                  </Label>
                                  <Input
                                    type="textarea"
                                    id="textarea"
                                    onChange={e => {
                                      textareachange(e)
                                    }}
                                    maxLength="225"
                                    rows="3"
                                    placeholder="Enter Your purpose for Entry"
                                  />
                                  {textareabadge ? (
                                    <span className="badgecount badge bg-success">
                                      {" "}
                                      {textcount} / 225{" "}
                                    </span>
                                  ) : null}
                                  
                                </FormGroup>

                              </Col>
                        
                              
                            </Form>
                                <span>Sign Here</span>
                               
                                  <Sign/>
                         
                          </div>
                        </TabPane>
                        <TabPane tabId={4}>
                          {" "}
                          <div className="row justify-content-center ">
                            <h3 className="VmsHealthTitle">
                              Health Decleration Form
                            </h3>
                            <h4 className="vmsHealthQuestion">
                              1. Do you have the following Symptoms?
                            </h4>
                            <hr />
                            <ul className=" vmsOptionContainer">
                              <span className="vmsHealthRaio">Fever</span>
                              <li className="mt-3 vmsHealthOptions">
                                <Label
                                  className="form-check-label  "
                                  htmlFor="basicpill-pancard-input"
                                >
                                  Yes
                                </Label>
                                <Input
                                  type="radio"
                                  name="visitorTYpe"
                                  className=" vmsHealthInputs"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                              <li className="mt-3 vmsHealthOptions">
                                <Label htmlFor="basicpill-pancard-input5">
                                  No
                                </Label>
                                <Input
                                  name="visitorTYpe"
                                  type="radio"
                                  className="form-check-label"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                            </ul>
                            <hr />
                            <ul className=" vmsOptionContainer">
                              <span className="vmsHealthRaio">Cough</span>
                              <li className="mt-3 vmsHealthOptions">
                                <Label
                                  className="form-check-label  "
                                  htmlFor="basicpill-pancard-input"
                                >
                                  Yes
                                </Label>
                                <Input
                                  type="radio"
                                  name="visitorTYpe"
                                  className=" vmsHealthInputs"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                              <li className="mt-3 vmsHealthOptions">
                                <Label htmlFor="basicpill-pancard-input5">
                                  No
                                </Label>
                                <Input
                                  name="visitorTYpe"
                                  type="radio"
                                  className="form-check-label"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                            </ul>
                            <hr />
                            <ul className=" vmsOptionContainer">
                              <span className="vmsHealthRaio">Body Aches</span>
                              <li className="mt-3 vmsHealthOptions">
                                <Label
                                  className="form-check-label  "
                                  htmlFor="basicpill-pancard-input"
                                >
                                  Yes
                                </Label>
                                <Input
                                  type="radio"
                                  name="visitorTYpe"
                                  className=" vmsHealthInputs"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                              <li className="mt-3 vmsHealthOptions">
                                <Label htmlFor="basicpill-pancard-input5">
                                  No
                                </Label>
                                <Input
                                  name="visitorTYpe"
                                  type="radio"
                                  className="form-check-label"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                            </ul>
                            <hr />
                            <ul className=" vmsOptionContainer">
                              <span className="vmsHealthRaio">Sore Throat</span>
                              <li className="mt-3 vmsHealthOptions">
                                <Label
                                  className="form-check-label  "
                                  htmlFor="basicpill-pancard-input"
                                >
                                  Yes
                                </Label>
                                <Input
                                  type="radio"
                                  name="visitorTYpe"
                                  className=" vmsHealthInputs"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                              <li className="mt-3 vmsHealthOptions">
                                <Label htmlFor="basicpill-pancard-input5">
                                  No
                                </Label>
                                <Input
                                  name="visitorTYpe"
                                  type="radio"
                                  className="form-check-label"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                            </ul>
                            <hr />
                            <ul className=" vmsOptionContainer">
                              <span className="vmsHealthRaio">
                                Running Nose
                              </span>
                              <li className="mt-3 vmsHealthOptions">
                                <Label
                                  className="form-check-label  "
                                  htmlFor="basicpill-pancard-input"
                                >
                                  Yes
                                </Label>
                                <Input
                                  type="radio"
                                  name="visitorTYpe"
                                  className=" vmsHealthInputs"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                              <li className="mt-3 vmsHealthOptions">
                                <Label htmlFor="basicpill-pancard-input5">
                                  No
                                </Label>
                                <Input
                                  name="visitorTYpe"
                                  type="radio"
                                  className="form-check-label"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                            </ul>
                            <hr />
                            <ul className=" vmsOptionContainer">
                              <span className="vmsHealthRaio">Headache</span>
                              <li className="mt-3 vmsHealthOptions">
                                <Label
                                  className="form-check-label  "
                                  htmlFor="basicpill-pancard-input"
                                >
                                  Yes
                                </Label>
                                <Input
                                  type="radio"
                                  name="visitorTYpe"
                                  className=" vmsHealthInputs"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                              <li className="mt-3 vmsHealthOptions">
                                <Label htmlFor="basicpill-pancard-input5">
                                  No
                                </Label>
                                <Input
                                  name="visitorTYpe"
                                  type="radio"
                                  className="form-check-label"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                            </ul>
                            <hr />
                            <ul className=" vmsOptionContainer">
                              <span className="vmsHealthRadio">
                                Breathing difficulty or shortness in breath
                              </span>
                              <li className="mt-3 vmsHealthOptions">
                                <Label
                                  className="form-check-label  "
                                  htmlFor="basicpill-pancard-input"
                                >
                                  Yes
                                </Label>
                                <Input
                                  type="radio"
                                  name="visitorTYpe"
                                  className=" vmsHealthInputs"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                              <li className="mt-3 vmsHealthOptions">
                                <Label htmlFor="basicpill-pancard-input5">
                                  No
                                </Label>
                                <Input
                                  name="visitorTYpe"
                                  type="radio"
                                  className="vmsHealthInputs"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                            </ul>

                            <h4 className="vmsHealthQuestion">
                              Have You Visited the following in last 14 days?
                            </h4>
                            <hr />
                            <ul className=" vmsOptionContainer">
                              <span className="vmsHealthRaio">
                                Any Hot Spots of India
                              </span>
                              <li className="mt-3 vmsHealthOptions">
                                <Label
                                  className="form-check-label  "
                                  htmlFor="basicpill-pancard-input"
                                >
                                  Yes
                                </Label>
                                <Input
                                  type="radio"
                                  name="visitorTYpe"
                                  className="vmsHealthInputs"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                              <li className="mt-3 vmsHealthOptions">
                                <Label htmlFor="basicpill-pancard-input5">
                                  No
                                </Label>
                                <Input
                                  name="visitorTYpe"
                                  type="radio"
                                  className="vmsHealthInputs"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                            </ul>
                            <hr />
                            <ul className=" vmsOptionContainer">
                              <span className="vmsHealthRaio">
                                Any Containtment Zones/Hot Spots of Karnataka
                              </span>
                              <li className="mt-3 vmsHealthOptions">
                                <Label
                                  className="form-check-label  "
                                  htmlFor="basicpill-pancard-input"
                                >
                                  Yes
                                </Label>
                                <Input
                                  type="radio"
                                  name="visitorTYpe"
                                  className=" vmsHealthInputs"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                              <li className="mt-3 vmsHealthOptions">
                                <Label htmlFor="basicpill-pancard-input5">
                                  No
                                </Label>
                                <Input
                                  name="visitorTYpe"
                                  type="radio"
                                  className="form-check-label"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                            </ul>
                            <hr />
                            <ul className=" vmsOptionContainer">
                              <span className="vmsHealthRaio">
                                Any Containment Zones/Hot Spots of Bangaluru
                              </span>
                              <li className="mt-3 vmsHealthOptions">
                                <Label
                                  className="form-check-label  "
                                  htmlFor="basicpill-pancard-input"
                                >
                                  Yes
                                </Label>
                                <Input
                                  type="radio"
                                  name="visitorTYpe"
                                  className=" vmsHealthInputs"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                              <li className="mt-3 vmsHealthOptions">
                                <Label htmlFor="basicpill-pancard-input5">
                                  No
                                </Label>
                                <Input
                                  name="visitorTYpe"
                                  type="radio"
                                  className="form-check-label"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                            </ul>
                            <hr />
                            <ul className=" vmsOptionContainer">
                              <span className="vmsHealthRaio">
                                Have You travelled any Countries in Last 30 days
                              </span>
                              <li className="mt-3 vmsHealthOptions">
                                <Label
                                  className="form-check-label  "
                                  htmlFor="basicpill-pancard-input"
                                >
                                  Yes
                                </Label>
                                <Input
                                  type="radio"
                                  name="visitorTYpe"
                                  className=" vmsHealthInputs"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                              <li className="mt-3 vmsHealthOptions">
                                <Label htmlFor="basicpill-pancard-input5">
                                  No
                                </Label>
                                <Input
                                  name="visitorTYpe"
                                  type="radio"
                                  className="form-check-label"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                            </ul>
                            <hr />
                            <ul className=" vmsOptionContainer">
                              <span className="vmsHealthRaio">
                                Have You Checked Your Body Temperature
                              </span>
                              <li className="mt-3 vmsHealthOptions">
                                <Label
                                  className="form-check-label  "
                                  htmlFor="basicpill-pancard-input"
                                >
                                  Yes
                                </Label>
                                <Input
                                  type="radio"
                                  name="visitorTYpe"
                                  className=" vmsHealthInputs"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                              <li className="mt-3 vmsHealthOptions">
                                <Label htmlFor="basicpill-pancard-input5">
                                  No
                                </Label>
                                <Input
                                  name="visitorTYpe"
                                  type="radio"
                                  className="form-check-label"
                                  id="basicpill-pancard-input5"
                                />
                              </li>
                            </ul>
                          </div>
                        </TabPane>
                        <TabPane tabId={5}>
                          <div className="row justify-content-center">
                            <Col lg="6">
                              <div className="text-center">
                                <div className="mb-4">
                                  <i className="mdi mdi-check-circle-outline text-success display-1" />
                                </div>
                                <div>
                                  <h5>Thnks for sharing Your details We have informed Madhu About Your Presence</h5>
                                  <MiniCards/>
                                </div>
                              </div>
                            </Col>
                          </div>
                        </TabPane>
                      </TabContent>
                    </div>
                    <div className="actions clearfix pb-4 ">
                      <ul>
                        <li
                          className={
                            activeTabVartical === 1
                              ? " previous disabled "
                              : "previous"
                          }
                        >
                          <button
                            to="#"
                            onClick={() => {
                              toggleTabVertical(activeTabVartical - 1)
                            }}
                          >
                            Previous
                          </button>
                        </li>
                        <li
                          className={
                            activeTabVartical === 5 ? "next disabled" : "next"
                          }
                        >
                          <button
                            to="#"
                            onClick={() => {
                              toggleTabVertical(activeTabVartical + 1)
                            }}
                          >
                            Next
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default EntryForm
