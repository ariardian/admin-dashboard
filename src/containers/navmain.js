import React from 'react';
// import axios from 'axios';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, CustomInput, UncontrolledDropdown, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
class NavMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    componentDidMount() {
    }
    render() {
        return (
            <React.Fragment>
                <Navbar color="info" light expand="md" className="py-1" id="navMain">
                    <NavbarBrand href="/">
                        <img className="d-inline-block" height="30" alt="Logo" src="./logo192.png" />
                    </NavbarBrand>
                    <NavbarToggler />

                    <form className="form-inline form-search-navmain" noValidate>
                        <div className="input-group input-group-sm w-100">
                            <UncontrolledButtonDropdown addonType="prepend" inNavbar>
                                <DropdownToggle caret color="fff" className="border" style={{ width: 92 }}>
                                    <span className="text-white">Kategori</span>
                                </DropdownToggle>
                                <DropdownMenu className="dd-animate dd-arrow">
                                    <span>Kategori</span>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                            <input type="search" className="form-control" id="searchNav" placeholder="Search..." />
                            <div className="input-group-append">
                                <label htmlFor="searchNav" className="btn btn-light bg-white fas fa-search" />
                            </div>
                        </div>
                    </form>

                    <Collapse isOpen={false} navbar>
                        <Nav className="align-items-center ml-auto" navbar>
                        <CustomInput type="switch" id="devMenu" name="devMenu" label={`${true ? 'Admin' : 'User'} Menu`} defaultChecked={true} />
                            <UncontrolledDropdown nav inNavbar className="dd-full">
                                <DropdownToggle nav className="py-0 tip tipL ddRoute" aria-label="Develop only">
                                    <b className="badge badge-danger">DEV</b>
                                </DropdownToggle>
                                <DropdownMenu className="dd-animate">
                                    <div className="row DEV_MENUS">
                                        <div className="col">
                                            {/* {(ARI_LINKS && ARI_LINKS.length > 0) &&
                                                <React.Fragment>
                                                    <h6 className="dropdown-header">Ari ({ARI_LINKS.length})</h6>
                                                    {ARI_LINKS.map((v, i) => <A key={i} dom href={v.path} aClass="dropdown-item">{i + 1}. {v.txt}</A>)}
                                                </React.Fragment>
                                            } */}
                                        </div>
                                    </div>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <NavItem>
                                <NavLink href="/" className="ion ion-md-pie" />
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar className="dd-full">
                                <DropdownMenu className="dd-animate">
                                    <DropdownItem>Option 1</DropdownItem>
                                    <DropdownItem>Reset</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <NavItem>
                                <NavLink className="ion ion-ios-notifications-outline scale12" href="/" />
                            </NavItem>

                            <NavItem>
                                <NavLink className="ion ion-md-paper" href="/" />
                            </NavItem>

                            <NavItem>
                                <NavLink className="ion ion-ios-settings" href="/"></NavLink>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownMenu right className="dd-animate dd-arrow arrow-r mw-300">
                                    <div className="text-center py-1 px-3">
                                        <h5 className="mt-3">Bill Gates <br /><small>Programmer</small></h5>
                                        <h5>PT. Microsoft Indonesia</h5>
                                    </div>
                                    <hr className="my-1" />
                                    <DropdownItem className="ion ion-md-contact scale12"> Profile</DropdownItem>
                                    <DropdownItem className="ion ion-md-log-out scale12 border-top"> Logout</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default NavMain;