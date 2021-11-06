import create from 'zustand';
import { inputFieldProps } from '../@types/input';

interface formProps {
  inputValues: inputFieldProps;
  setInputValues: (field: string, value: string) => void;
}

export const useForm = create<formProps>((set) => ({
  inputValues: {
    name: '',
    email: '',
    date: '',
    cep: '',
  },
  setInputValues: (field: string, value: string) =>
    set((state: formProps) => ({
      inputValues: {
        name: field === 'name' ? value : state.inputValues.name,
        cep: field === 'cep' ? value : state.inputValues.cep,
        date: field === 'date' ? value : state.inputValues.date,
        email: field === 'email' ? value : state.inputValues.email,
      },
    })),
}));
