import React, {Component} from "react";
import SideNav, {NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
import { Route } from "react-router-dom";
import FancyBorder from "./components/fancyBorder";


class App extends Component {
    state = {
        collapseID: ""
    };
    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {
        return (
            <FancyBorder>
                <Router>
                    <Route render={({location, history}) => (
                        <React.Fragment>
                            <SideNav
                                onSelect={(selected) => {
                                    const to = '/' + selected;
                                    if (location.pathname !== to) {
                                        history.push(to);
                                    }
                                }} onClick={this.toggleCollapse("basicCollapse")} style={{width: 0}}>
                                <SideNav.Toggle/>
                                <SideNav.Nav defaultSelected="home">
                                    <NavItem eventKey="home">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-home" style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            Home
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="css">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-css-page" style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            CSS
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="components">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-components-page"
                                               style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            Components
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="advanced">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-advanced-page"
                                               style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            Advanced
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="navigation">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-navigation-page"
                                               style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            Navigation
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="forms">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-forms-page" style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            Forms
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="tables">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-table-page" style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            Tables
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="modals">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-modals-page"
                                               style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            Modals
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="addons">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-addons-page"
                                               style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            Addons
                                        </NavText>
                                    </NavItem>
                                </SideNav.Nav>
                            </SideNav>
                            < main>
                                <Routes/>
                            </main>
                        </React.Fragment>
                    )}
                    />
                </Router>
            </FancyBorder>
        );
    }
}

export default App;