import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/supplierActions';
import '../../styles/SuppliersPage.css'
import { Navbar, Nav, NavItem, Modal, Button, Table, Pagination } from 'react-bootstrap'

class SuppliersPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            deleteModal: {
                isOpen: false,
                supplier: {name: '', city: '', reference: ''}
            },
            activePage: 1
        }

        this.renderSupplier = this.renderSupplier.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleCancelDeleteClick = this.handleCancelDeleteClick.bind(this);
    }

    componentWillMount() {
        if (this.props.suppliers.length < 1) {
            this.props.actions.loadSuppliers();
        }
    }

    handleDeleteClick() {
        this.setState({
            deleteModal: {
                isOpen: true,
                supplier: {name: 'Name', city: 'City', reference: 'Reference'}
            }
        })
    }

    handleCancelDeleteClick() {
        this.setState({
            deleteModal: {
                isOpen: false,
                supplier: {name: '', city: '', reference: ''}
            }
        })
    }

    renderSupplier(supplier, index) {
        return(
            <Supplier key={index} supplier={supplier} handleDeleteClick={this.handleDeleteClick} />
        )
    }

    render() {
        return(
            <div className="container">
                <NavBar />
                <h1>Suppliers</h1>

                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.suppliers.map(this.renderSupplier)}
                    </tbody>
                </Table>

                <Pagination 
                    items={5}/>
                
            </div>
        )
    }
}

const NavBar = (props) => {
    return (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">Comic Books Inc.</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem>Issues</NavItem>
            <NavItem>Suppliers</NavItem>
        </Nav>
    </Navbar>
    )
    
}

const Supplier = (props) => {
    return (
        <tr>
            <td>{props.supplier.id}</td>
            <td>{props.supplier.name}</td>
            <td>{props.supplier.city}</td>
        </tr>
    );
}

const DeleteModal = (props) => {
    return(
        <div className="static-modal">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    One fine body...
                </Modal.Body>

                <Modal.Footer>
                    <Button>Close</Button>
                    <Button bsStyle="primary">Save changes</Button>
                </Modal.Footer>

            </Modal.Dialog>
        </div>
        
    );
}

function mapStateToProps(state, ownProps) {
    if (state.suppliers.length > 0) {
        return {
            suppliers: state.suppliers
        };
    }
    else {
        return {
            suppliers: []
        }
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuppliersPage);