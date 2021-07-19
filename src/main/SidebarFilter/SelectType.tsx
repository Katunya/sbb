import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {ITypeGroup} from "./Filter";

interface ISelectClose {
    data: Array<ITypeGroup>,
}

type TFilter = { type: string }
type TType = 'Все' | 'Совещание отдела' | 'Встреча' | 'Конференция' | 'Совещание отдела'

export const  SelectType = (props: ISelectClose) => {
    const {data} =props;

    const dispatch = useDispatch();
    const type = useSelector((state: TFilter) => state.type);

    const handleChange = (e: any) => {
        dispatch({type: 'TYPE_TASK_REQUEST', payload: e.target.value})
    }

    return (
        <Select value={type} fullWidth displayEmpty onChange={handleChange} >
            { data.map((item, index) => {
                return <MenuItem value={item.value}
                                 key={index}>{item.name}</MenuItem>
            })
            }
        </Select>
    );
}
