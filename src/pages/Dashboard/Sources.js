import React, { Component } from 'react';
import { Card, CardBody, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table } from "reactstrap";
import { Link } from "react-router-dom";

class Sources extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
        }
    }

    render() {
        return (
            <React.Fragment>
                <Col>
                    <Card>
                        <CardBody>
                            <Dropdown className="float-end" isOpen={this.state.menu} toggle={() => this.setState({ menu: !this.state.menu })} >
                                <DropdownToggle tag="i" className="arrow-none card-drop">
                                    <i className="mdi mdi-dots-vertical"></i>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">

                                    <DropdownItem href="">Sales Report</DropdownItem>

                                    <DropdownItem href="">Export Report</DropdownItem>

                                    <DropdownItem href="">Profit</DropdownItem>

                                    <DropdownItem href="">Action</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>

                            <h4 className="card-title mb-3">Schedule</h4>

                            <div>
                                <div className="text-center">
                                    <p className="mb-2">Total Classes</p>
                                    <h4>4</h4>
                                </div>

                                <div className="table-responsive mt-4">
                                    <Table hover className=" mb-0 table-centered table-nowrap">
                                        <tbody>
                                            <tr>
                                                <td style={{ width: "60px" }}>
                                                    <div className="avatar-xs">
                                                        <div className="avatar-title rounded-circle bg-light">
                                                        <h5 className="font-size-14 mb-0">AI2043</h5>

                                                        </div>
                                                    </div>
                                                </td>

                                                <td>
                                                    <h5 className="font-size-14 mb-0">ML</h5>
                                                </td>
                                                <td><div id="spak-chart1"></div></td>
                                                <td>
                                                    <p className="text-muted mb-0">10am</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ width: "60px" }}>
                                                    <div className="avatar-xs">
                                                        <div className="avatar-title rounded-circle bg-light">
                                                        <h5 className="font-size-14 mb-0">AI2044</h5>

                                                        </div>
                                                    </div>
                                                </td>

                                                <td>
                                                    <h5 className="font-size-14 mb-0">ADA</h5>
                                                </td>
                                                <td><div id="spak-chart1"></div></td>
                                                <td>
                                                    <p className="text-muted mb-0">2pm</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ width: "60px" }}>
                                                    <div className="avatar-xs">
                                                        <div className="avatar-title rounded-circle bg-light">
                                                        <h5 className="font-size-14 mb-0">AI2044</h5>

                                                        </div>
                                                    </div>
                                                </td>

                                                <td>
                                                    <h5 className="font-size-14 mb-0">Math-3</h5>
                                                </td>
                                                <td><div id="spak-chart1"></div></td>
                                                <td>
                                                    <p className="text-muted mb-0">3pm</p>
                                                </td>
                                            </tr>
                                            
                                            <tr>
                                                <td style={{ width: "60px" }}>
                                                    <div className="avatar-xs">
                                                        <div className="avatar-title rounded-circle bg-light">
                                                        <h5 className="font-size-14 mb-0">AI2041</h5>

                                                        </div>
                                                    </div>
                                                </td>

                                                <td>
                                                    <h5 className="font-size-14 mb-0">Python</h5>
                                                </td>
                                                <td><div id="spak-chart1"></div></td>
                                                <td>
                                                    <p className="text-muted mb-0">4pm</p>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    </Table>
                                </div>

                                <div className="text-center mt-4">
                                    <Link to="time-table" className="btn btn-primary btn-sm">View more</Link>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </React.Fragment>
        );
    }
}

export default Sources;