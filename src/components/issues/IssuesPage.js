import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/issueActions';
import { 
    Panel, 
    Grid, 
    Row, 
    Col, 
    Image, 
    Button, 
    Table, 
    ButtonToolbar, 
    Thumbnail, 
    Nav,
    Navbar, 
    NavItem,
    NavDropdown,
    MenuItem
} from 'react-bootstrap';
import '../../styles/IssuesPage.css';


class IssuesPage extends Component {

    constructor(props) {
        super(props);

        this.renderIssue = this.renderIssue.bind(this);
        this.handleInfoClick = this.handleInfoClick.bind(this);
    }

    componentWillMount() {
        if (this.props.issues[0].title === '') {
            this.props.actions.loadIssues();
        }
    }

    handleInfoClick = (index) => (event) => {
        this.props.actions.changeCurrentIssue(index);
    }

    renderIssue(issue, index) {
        return (
            <ListIssue key={index} issue={issue} handleInfoClick={this.handleInfoClick(index)}/>
        )
    }

    render() {
        return(
            <div>
                <NavBarInstance />
                <div className="container">
                    <Grid>
                        <Row className="show-grid">
                            <Col md={6}>
                                <MainIssue issue={this.props.issues[this.props.currentIssue]} />
                            </Col>
                            <Col md={6}>
                                {this.props.issues.map(this.renderIssue)}
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
            
        )
    }
}

const NavBarInstance = (props) => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Thumbnail src="../../logo.svg" />
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="#">Issues</NavItem>
                <NavItem eventKey={2} href="#">Suppliers</NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar>
    )
}

const MainIssue = (props) => {
    return(
        <Panel footer={props.issue.description} className="mainIssue" bsStyle="info">
            <h1>{props.issue.title}</h1>
            <br />
            <Image src={props.issue.thumbnail.pathIncludingExtension} height={500} width={350}/>
        </Panel>
    );
}

const ListIssue = (props) => {
    return (
        <Thumbnail src={props.issue.thumbnail.pathIncludingExtension} height={100} >
            <h4 className="issueTitle">{props.issue.title}</h4>
            <ButtonToolbar className="centered-button-toolbar">
                <Button onClick={props.handleInfoClick} >Info</Button>
                <Button bsStyle="primary">Order</Button>
            </ButtonToolbar>
        </Thumbnail>
    )
}

function mapStateToProps(state, ownProps) {
    return{
        issues: state.issues.issues,
        isLoading: state.issues.isLoading,
        hasErrored: state.issues.hasErrored,
        currentIssue: state.issues.currentIssue,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssuesPage);