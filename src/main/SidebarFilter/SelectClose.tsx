import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {ITypeGroup} from "./Filter";

interface ISelectClose {
    data: Array<ITypeGroup>,
}

type TFilter = { closeType: string, }

export const  SelectClose = (props: ISelectClose) => {
    const {data} =props;

    const dispatch = useDispatch();
    const closeType = useSelector((state: TFilter) => state.closeType);

    const handleChange = (e: any) => {
        dispatch({type: 'CLOSE_REQUEST', payload: e.target.value})
    }

    return (
        <Select value={closeType} fullWidth displayEmpty onChange={handleChange} >
            { data.map((item, index) => {
                    return <MenuItem value={item.value}
                                     key={index}>{item.name}</MenuItem>
                })
            }
        </Select>
    );
}
