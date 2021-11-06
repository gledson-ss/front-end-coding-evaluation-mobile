import React, { FC, useEffect, useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { inputProps } from '../../../@types/input';
import { CepMask, handleFieldSize, NameField, HandleDate } from '../../../utils/InputValidation';
import * as Styled from './styles';
import DateTimePicker, { AndroidEvent } from '@react-native-community/datetimepicker';
import { KeyboardTypeOptions } from 'react-native';

const Input: FC<inputProps> = ({ field, placeholderValue, value, context }) => {
  const [inputValue, setInputValue] = useState(value);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [show, setShow] = useState(false);
  const form = useForm();

  useEffect(() => {
    if (context === 'Edit') {
      form.setInputValues(field, value);
    }
  }, []);

  function handleOnChange(value: string) {
    if (field === 'name') {
      form.setInputValues('name', NameField(value));
      setInputValue(NameField(value));
      return;
    }
    if (field === 'cep') {
      form.setInputValues('cep', CepMask(value));
      setInputValue(CepMask(value));
      return;
    }

    if (field === 'email') {
      form.setInputValues('email', value);
      setInputValue(value);
      return;
    }

    setInputValue(value);
    return;
  }
  const onChangeDataPicker = (event: Omit<AndroidEvent, 'nativeEvent'>, date: Date | undefined) => {
    if (event.type === 'dismissed' || event.type === 'set') {
      setShow(false);
    }
    form.setInputValues('date', HandleDate(date));
    setDate(date);
  };

  const showTimepicker = () => {
    setShow(true);
  };

  function handletype(): KeyboardTypeOptions | undefined {
    if (field === 'cep') {
      return 'number-pad';
    } else if (field === 'email') {
      return 'email-address';
    }
    return 'default';
  }

  return field !== 'date' ? (
    <Styled.Input
      onChangeText={(e) => handleOnChange(e)}
      value={inputValue}
      selectTextOnFocus={true}
      keyboardType={handletype()}
      placeholder={placeholderValue}
      maxLength={handleFieldSize(field)}
    />
  ) : (
    <>
      <Styled.Button onPress={() => showTimepicker()}>
        <Styled.ButtonText>
          {form.inputValues.date === '' ? 'dd/ mm/ aaaa' : form.inputValues.date}
        </Styled.ButtonText>
        <Styled.ButtonIcon />
      </Styled.Button>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date ? date : new Date()}
          mode="date"
          is24Hour={false}
          display="default"
          onChange={onChangeDataPicker}
        />
      )}
    </>
  );
};

export default Input;
