import React, {FunctionComponent} from "react";
import {connect, useDispatch} from "react-redux";
import styled from "styled-components";
import {ITypeGroup} from "./Filter";
import {fieldRequest, processStatusRequest} from "../../actions";

const RadioGroupLabel = styled.label`
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


interface ITaskGroupInput {
    data: Array<ITypeGroup>,
    typeField: string,
    field: string,
    status: string,
}

export const TaskGroupInput: React.FC <ITaskGroupInput>= (props)  =>{
    const {data, typeField, field, status} = props;
    const dispatch = useDispatch();

    const [getValue, setValue] = React.useState('');

    const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
        switch (typeField) {
            case 'groupField' : {
                setValue(field)
                debugger
                dispatch({type: 'FIELD_REQUEST', payload: (field)})
                break;
            }
            case 'groupProcess' : {
                setValue(status);
                dispatch({type: 'PROCESS_STATUS_REQUEST', payload: (status)});
                break;

            }
        }
    }

    const getInput =() => {
        return data.map((item, index) => {
            return (
                <RadioGroupLabel key={index}>
                    <RadioGroupInput
                        key={index}
                        type="radio"
                        checked={item.value === getValue}
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
