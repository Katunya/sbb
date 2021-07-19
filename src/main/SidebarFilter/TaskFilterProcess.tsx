import React from "react";
import {ITypeGroup} from "./Filter";
import { useDispatch, useSelector} from "react-redux";
import styled from "styled-components";

const RadioGroupLabel = styled.label`
  background-color: ${props => props.color};
  text: '#FFFFFF';
  line-height: 32px;
  color: #424242;
  font-size: 16px;
  border-radius: 16px;
  display: inline-block;
  position: relative;
  padding: 0 12px;
  cursor: pointer;
  margin-right: 8px;
  margin-bottom: 8px;
  user-select: none;
`;

const RadioGroupInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;

interface IStatus {
    statusTask: string,
}

interface ITaskFilterProcess {
    data: Array<ITypeGroup>,
}

const getContainerStyle = (checked: boolean) => ({
    backgroundColor: checked ? '#00766C' : '#FFFFFF',
    color: checked ? '#FFFFFF' : '#424242',
});

export const TaskFilterProcess = (props: ITaskFilterProcess) => {
    const {data} = props;
    const dispatch = useDispatch();
    const statusTask = useSelector((state: IStatus) => state.statusTask);

    const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
        dispatch({type: 'PROCESS_STATUS_REQUEST', payload: (e.target.value)});
    }

    const getInput = () => {
        return data.map((item, index) => {
            const checked = item.name === statusTask;
            return (
                <RadioGroupLabel
                    style={getContainerStyle(checked)}
                    key={index}>
                    <RadioGroupInput
                        key={index}
                        type="radio"
                        checked={checked}
                        onChange={handleChange}
                        value={item.name}/>
                    {item.name}
                </RadioGroupLabel>
            )
        })
    }



    return (
        <React.Fragment>
            {getInput()}
        </React.Fragment>
    )
}


