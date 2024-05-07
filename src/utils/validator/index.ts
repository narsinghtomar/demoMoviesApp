import * as yup from 'yup';
import { strings } from '../../i18n';
import { phoneNumberRegex } from './validationRegex';

// loginValidationSchema
export const loginValidationSchema = () =>
  yup.object().shape({
    email: yup
      .string()
      .required(strings('common.validation.emailRequired'))
      .email(strings('common.validation.validEmail')),
    password: yup
      .string()
      .min(8, strings('common.validation.minCharPass'))
      .max(15, strings('common.validation.maxCharPass'))
      .matches(phoneNumberRegex, strings('common.validation.specialCharPass'))
      .required(strings('common.validation.passwordRequired')),
  });
