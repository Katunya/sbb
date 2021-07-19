import React from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import {useSelector} from "react-redux";



export const  TaskFilterText = (props: any) => {

    const [value, setValue] = React.useState('');

    const data = useSelector((state:  any) => state.taskCard);

    const  handleChange = (e: any) => {
        setValue(e.target.value);
    }

    return (
        <TextField
            fullWidth
            defaultValue={value}
            placeholder={'Введите часть описания'}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            onBlur={handleChange}
        />
    );
}
