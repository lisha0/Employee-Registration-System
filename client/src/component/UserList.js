import React from 'react';
import { connect } from 'react-redux';

import { Pencil, Trash, Person } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';

import getUserList from '../redux/actions/getUserList';
import deleteUser from '../redux/actions/deleteUser';
import sortUserList from '../redux/actions/sortUserList';
import searchUserList from '../redux/actions/searchUserList';
import SortLink from './SortLink';
import './UserList.css'

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsCountPerPage: 5,
            activePage: 1
        };
    }
    componentDidMount(){
        this.props.getUserList();
    }

    handleSearchChange = e => {
        this.setState({activePage: 1});
        this.props.searchUserList(e.target.value);
    }

    handleDeleteButton = (id) => {
        this.props.deleteUser(id);
    }

    getUsers = () => {
        return this.props.filter.query === ''? this.props.users : this.props.filter.filteredUsers;
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({
            activePage: pageNumber
        });
    }

    getCurrentData(){
        const users = this.getUsers();
        const upperLimit = parseInt(this.state.activePage) * this.state.itemsCountPerPage;
        const lowerLimit = upperLimit - this.state.itemsCountPerPage;
        let data = [];
        if (upperLimit <= users.length) {
            data = users.slice(lowerLimit, upperLimit);
        } else {
            data = users.slice(lowerLimit)
        }
        return data;
    }

    renderList(){
        const users = this.getCurrentData();        
        if (this.props.loading === false && users.length !== 0){
            return users.map(user => {
                return(
                    <tr key={user._id}>
                        <td>
                            <Link className="btn btn-light" to={`/users/edit/${user._id}`}>
                                <Pencil color='royalblue'/>
                                Edit
                            </Link>
                        </td>
                        <td>
                            <button className="btn btn-light" onClick={() => this.handleDeleteButton(user._id)}>
                                <Trash color='royalblue'/>
                                Delete
                            </button>
                        </td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.sex}</td>
                        <td>{user.age}</td>
                    </tr>
                )
            }) 
        }
    }

    renderCreate(){
        return(
            <div>
                <Link to='/users/new' className='button btn-primary btn-lg'>
                    <Person size={30}/>
                    Create New User
                </Link>
            </div>
        )
    }
   
    render(){
        if (this.props.loading === true) {
            return(
                <div>
                    Loading
                </div>
            )
        }
        else if(this.props.error) {
            return(
                <div style={{color: 'red'}}>
                    Error: {this.props.error}
                </div>
            )
        }
        return(
            <div className="container">
                <div className="header">
                    <h2>Users</h2>
                </div>               
                <form>
                    <div className="form-group row">
                        <label htmlFor="search" className="col-sm-1 col-form-label">Search: </label>
                        <div className="col-sm-11">
                            <input 
                                id="search"
                                type='text'
                                onChange = {() => this.handleSearchChange(soldier._id)}
                                value = {this.props.filter.query}
                            ></input>
                        </div>            
                    </div>
                    
                </form>
                <div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                                <SortLink
                                    label='First name'
                                    sortKey='firstName'
                                    sortParams={this.props.sortParams}
                                    sortUserList={this.props.sortUserList}/>
                                <SortLink
                                    label='Last name'
                                    sortKey='lastName'
                                    sortParams={this.props.sortParams}
                                    sortUserList={this.props.sortUserList}/>
                                <SortLink
                                    label='Sex'
                                    sortKey='sex'
                                    sortParams={this.props.sortParams}
                                    sortUserList={this.props.sortUserList}/>
                                <SortLink
                                    label='Age'
                                    sortKey='age'
                                    sortParams={this.props.sortParams}
                                    sortUserList={this.props.sortUserList}/>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderList()}
                        </tbody>
                    </table>
                </div> 
                    
                <div className="pagination">
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemsCountPerPage}
                        totalItemsCount={this.getUsers().length}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange.bind(this)}
                        itemClass="page-item"
                        linkClass="page-link"
                    />
                </div>
                <div className="create-user">
                    {this.renderCreate()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.userList.users,
        loading: state.userList.loading,
        sortParams: state.sortParams,
        filter: state.filter
    }
}

export default connect(mapStateToProps,
     {getUserList, deleteUser, sortUserList, searchUserList})
     (UserList);