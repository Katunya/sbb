import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {connect} from "react-redux";
import {ITypeGroup} from "./Filter";

interface ITaskFilterSelect {
    type: string,
    data: Array<ITypeGroup>,
    placeholder: string,
    closeType: string,
    typeTask: string,
}

const TaskFilterSelect = (props: ITaskFilterSelect) =>  {
    const {type, data, placeholder, closeType, typeTask} = props;


    const [getValue, setValue] = React.useState('');

    const handleChange = (type: string) => {
        switch (type) {
            case 'close' : {
                setValue(closeType)
                break;
            }
            case 'typeTask' : {
                setValue(typeTask)
                break;
            }
        }
    }
    debugger
    return (
        <Select value={getValue}
                fullWidth
                displayEmpty
                onChange={() => handleChange} >
            { data.map((item, index) => {
                    return <MenuItem value={item.value} key={index} >{item.name}</MenuItem>
                })
            }
        </Select>
    );
}

const mapStateToProps = (state: { closeType: string, typeTask: string }) => {
    return {
        closeType: state.closeType,
        typeTask: state.typeTask,
    }
}
export default connect(mapStateToProps)( TaskFilterSelect);

