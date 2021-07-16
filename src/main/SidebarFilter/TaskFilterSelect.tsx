import React from 'react';
import {connect, useDispatch} from "react-redux";
import {ITypeGroup} from "./Filter";

interface ITaskFilterSelect {
    type: string,
    data: Array<ITypeGroup>,
    placeholder: string,
    closeType: string,
    typeTask: string,
}

const TaskFilterSelect = (props: ITaskFilterSelect) =>  {
    const {type, data} = props;

    const dispatch = useDispatch();

    const [getValue, setValue] = React.useState('');

    const handleChange = (x: React.ChangeEvent<HTMLSelectElement>) => {
        switch (type) {
            case 'close' : {
                setValue(x.target.value)
                dispatch({type: 'CLOSE_REQUEST', payload: (x.target.value)})
                break;
            }
            case 'typeTask' : {
                setValue(x.target.value)
                dispatch({type: 'TYPE_TASK_REQUEST', payload: (x.target.value)})
                break;
            }
        }
    }
    debugger
    return (
        <select value={getValue}
                onChange={handleChange} >
            {data.map((item, index) => {
                return <option value={item.value} key={index} >{item.name}</option>})
            }
        </select>
    );
}

const mapStateToProps = (state: { closeType: string, typeTask: string }) => {
    return {
        closeType: state.closeType,
        typeTask: state.typeTask,
    }
}
export default connect(mapStateToProps)( TaskFilterSelect);

