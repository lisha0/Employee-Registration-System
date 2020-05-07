import React from 'react';
import {ArrowUp, ArrowDown} from 'react-bootstrap-icons';


const handleOnClick = (props) => {
    props.sortUserList(props.sortKey);
}

const addIcon = (props) => {
    const {sortParams, sortKey} = props;
    
    if (sortParams === null || sortParams.key !== sortKey){
        return null;
    }
    if(sortParams.order === 'asc') {
        return(
            <span>
                <ArrowUp size={20}/>
            </span>
        )
    }
    else if (sortParams.order === 'desc'){
        return(
            <span>
                <ArrowDown size={20}/>
            </span>)
    }
}

const SortLink = props => {

    return(
        <th scope="col" onClick={() => handleOnClick(props)}>
            {props.label}
            {props.sortParams===null?null:addIcon(props)}
        </th>
    )


}

export default SortLink;