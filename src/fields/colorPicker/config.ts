import { Field } from 'payload/types';
import InputField from './InputField';
import Cell from './Cell';

export const validateHexColor = (value: string = ''): true | string => {
  return value.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/) !== null || `Please give a valid hex color`;
}



// const colorField: Field = {
//   name: 'color',
//   type: 'text',
//   validate: validateHexColor,
//   required: true,
//   admin: {
//     components: {
//       Field: InputField,
//       Cell,
//     }
//   }
// };

const colorField = (name: string, label:string): Field => {
  const field: Field = {
    name,
   label,
    type: 'text',
    validate: validateHexColor,
    required: true,
    admin: {
      components: {
        Field: InputField,
        Cell,
      },
    },
  };

  return field;
};


export default colorField;