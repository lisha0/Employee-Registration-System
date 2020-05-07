import React from 'react';
import Pagination from 'react-js-pagination';

class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activePage: this.props.pageNumber
        }
    }
    renderList(users){
        if (users.length !== 0){
            return users.map(user => {
                return(
                    <tr key={user._id}>
                        <td>
                            <Link className="button" to={`/users/edit/${user._id}`}>
                                <Pencil color='royalblue'/>
                                Edit
                            </Link>
                        </td>
                        <td>
                            <button onClick={() => this.handleDeleteButton(user._id)}>
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

}

export default Page