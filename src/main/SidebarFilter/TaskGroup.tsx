import React from "react";
import {ITypeGroup} from "./Filter";
import { useDispatch, useSelector} from "react-redux";
import styled from "styled-components";

const RadioGroupLabel = styled.label`
  line-height: 32px;
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

type TFilter = { field: string, }

interface ITaskGroup {
    data: Array<ITypeGroup>,
}

const getContainerStyle = (checked: boolean) => ({
    backgroundColor: checked ? '#00766C' : '#FFFFFF',
    color: checked ? '#FFFFFF' : '#424242',
});

export const TaskGroup = (props: ITaskGroup) => {
    const {data} = props;

    const dispatch = useDispatch();
    const field = useSelector((state: TFilter) => state.field);

    const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
        dispatch({type: 'FIELD_REQUEST', payload: e.target.value})
    }

    const getInput = () => {
        return data.map((item, index) => {
            const checked = item.value === field;
            return (
                <RadioGroupLabel
                    style={getContainerStyle(checked)}
                    key={index}>
                    <RadioGroupInput
                        key={index}
                        type="radio"
                        checked={checked}
                        onChange={handleChange}
                        value={item.value}/>
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


