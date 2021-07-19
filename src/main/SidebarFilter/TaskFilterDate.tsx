import React from 'react';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import InputAdornment from "@material-ui/core/InputAdornment";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import styled from "styled-components";
import DateFnsUtils from '@date-io/date-fns';
import {useSelector} from "react-redux";



const Container = styled.div `
    display: flex;
`;

interface ITaskFilterDates {

}

export const  TaskFilterDates = (props: ITaskFilterDates) => {

    const onDateFromChange = () => {
        setFilterDateFrom( 11222121);
    };
    const onDateToChange = () => {
        setFilterDateTo(11222121);
    };

    const [filterDateFrom, setFilterDateFrom] = React.useState(11222121);
    const [filterDateTo, setFilterDateTo] = React.useState(11222121);

    return (
        <Container>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className="TaskFilterDates-Start">
                    <DatePicker
                        disableToolbar
                        variant="inline"
                        value={filterDateFrom}
                        onChange={onDateFromChange}
                        emptyLabel="Выбрать от"
                        format="dd.MM.yy"
                        maxDate={filterDateTo}
                    />
                </div>
                <div className="TaskFilterDates-Finish">
                    <DatePicker
                        disableToolbar
                        variant="inline"
                        value={filterDateTo}
                        onChange={onDateToChange}
                        emptyLabel="Выбрать до"
                        format="dd.MM.yy"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <CalendarTodayIcon />
                                </InputAdornment>
                            ),
                        }}
                        minDate={filterDateFrom}
                    />
                </div>
            </MuiPickersUtilsProvider>
        </Container>
    )
}
