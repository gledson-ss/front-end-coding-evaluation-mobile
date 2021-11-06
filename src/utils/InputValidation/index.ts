import { inputFieldProps } from '../../@types/input';

export function handleFieldSize(field: string): number {
  if (field === 'name') {
    return 44;
  }
  if (field === 'cep') {
    return 9;
  }
  return 30;
}

export function NameField(str: string): string {
  let newValueInput = '';

  for (let index = 0; index < str.length; index += 1) {
    const element = str[index];
    const valueCharInNumber = element.charCodeAt(0);
    if (
      (valueCharInNumber >= 97 && valueCharInNumber <= 122) ||
      (valueCharInNumber >= 65 && valueCharInNumber <= 90) ||
      valueCharInNumber === 32
    ) {
      newValueInput += element;
    }
  }
  return newValueInput;
}

export function CepMask(str: string): string {
  let result = '';
  const mask = '99999-999';
  const newValueInput = str.replace(/[^0-9]/g, '');
  let inc = 0;

  Array.from(newValueInput).forEach((letter, index) => {
    if (!mask[index + inc].match(/[0-9]/)) {
      result += mask[index + inc];
      inc += 1;
    }
    result += letter;
  });
  return result;
}

export function HandleDate(date: Date | undefined): string {
  if (!date) {
    return '';
  }
  const getDay =
    date.getDate() > 0 && date.getDate() <= 9 ? `0${date.getDate()}` : `${date.getDate()}`;

  const getMonth =
    date.getMonth() > 0 && date.getMonth() <= 9 ? `0${date.getMonth()}` : `${date.getMonth()}`;

  const formatedDate = `${getDay}-${getMonth}-${date.getFullYear()}`;
  return formatedDate;
}

export function canRequestApi(input: inputFieldProps) {
  if (!input.name.length) {
    return 'Name Is Required';
  } else if (!input.email.length) {
    return 'Email Is Required';
  } else if (!input.date.length) {
    return 'Date Of Birth Is Required';
  }
  return 'yes';
}
