import styled from '@emotion/styled';
import { HiSearch } from 'react-icons/hi';
import { Form as FormikForm, Field as FormikField } from 'formik';



export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 6px;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    fill: orangered;
    transform: scale(1.2);
  }
`;


export const Form = styled(FormikForm)`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Field = styled(FormikField)`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const SubmitBtn = styled.button`
  position: absolute;
  top: 0;
  right: 4px;
  cursor: pointer;
  padding: 8px;
  background-color: transparent;
  border: none;
`;
