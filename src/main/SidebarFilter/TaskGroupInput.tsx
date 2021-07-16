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
    processStatus: string,
}

export const TaskGroupInput: React.FC <ITaskGroupInput>= (props)  =>{
    const {data, typeField, field, processStatus} = props;
    const dispatch = useDispatch();

    debugger;
    console.log(props)

    const [getValue, setValue] = React.useState('');

    const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
        switch (typeField) {
            case 'groupField' : {
                setValue(field)
                dispatch({type: 'FIELD_REQUEST', payload: (e.target.value)})
                break;
            }
            case 'groupProcess' : {
                setValue(processStatus);
                dispatch({type: 'PROCESS_STATUS_REQUEST', payload: (e.target.value)})
            }
        }
    }

    const getInput =() => {
        return data.map((item, index) => {
            return (
                <RadioGroupLabel key={index}>
                    <RadioGroupInput
                        type="radio"
                        name={'type'}
                        checked={item.value === getValue}
                        onChange={handleChange}
                        value={item.value}/>
                    {item.value}
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

const mapStateToProps = (state: { field: string, processStatus: string }) => {
    return {

    }
}
