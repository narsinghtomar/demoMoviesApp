import React from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { Button, InputField } from '../../components'
import { changeAppLang, isIOS } from '../../utils/helper'
import { loginValidationSchema } from '../../utils/validator'
import { useFormik } from 'formik'
import { strings } from '../../i18n'
import { setAuthCompleted, setUserInfo } from '../../redux/reducers/authReducer'
import styles from './styles'

interface LoginPageProps {
  navigation: any
}

const LoginPage: React.FC<LoginPageProps> = ({ navigation }) => {
  const dispatch = useDispatch() // Initialize dispatch

  // useFormik
  const {
    handleChange,
    handleSubmit,
    setFieldTouched,
    values,
    errors,
    touched,
    isValid,
  } = useFormik({
    validationSchema: loginValidationSchema(),
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (userValues) => {
      handelUserLogin(userValues)
      Keyboard.dismiss()
    },
    validateOnChange: true,
  })

  // Determine if the form is valid based on the isValid property
  const isFormValid = isValid && Object.keys(touched).length > 0

  /**
   * handelUserLogin
   */
  const handelUserLogin = async (userValues: {
    email: string
    password: string
  }) => {
    const loginData = {
      username: userValues?.email,
      password: userValues?.password,
    }
    dispatch(setAuthCompleted())
    dispatch(setUserInfo(loginData))
  }

  /**
   * emailProps
   */
  const emailProps = () => {
    return {
      labelText: strings('auth.login.email'),
      placeholder: strings('auth.login.enterEmail'),
      value: values?.email,
      textInputName: 'email',
      errorMessage: errors?.email,
      onChangeText: (text) => {
        handleChange('email')(text)
      },
      onBlur: () => {
        setFieldTouched('email')
      },
      isErrorMsgRequired: errors?.email,
    }
  }

  /**
   * passwordProps
   */
  const passwordProps = () => {
    return {
      labelText: strings('auth.login.password'),
      placeholder: strings('auth.login.enterPassword'),
      value: values?.password,
      textInputName: 'password',
      errorMessage: errors?.password,
      secureTextEntry: true,
      onChangeText: (text) => {
        handleChange('password')(text)
      },
      onBlur: () => {
        setFieldTouched('password')
      },
      isErrorMsgRequired: errors?.password,
    }
  }

  return (
    <View style={styles.container}>
      {/*  */}
      <TouchableOpacity style={styles.langTouch} onPress={changeAppLang}>
        <Text style={styles.languageText}>{strings('common.language')}</Text>
      </TouchableOpacity>

      {/*  */}
      <Text style={styles.title}>{strings('auth.login.title')}</Text>

      {/*  */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          style={styles.avoidingView}
          behavior={isIOS() ? 'padding' : 'height'}
          keyboardVerticalOffset={5}
        >
          {/* Input */}
          {InputField(emailProps())}
          {InputField(passwordProps())}

          {/* Submit */}
          <Button
            buttonStyle={styles.buttonStyle}
            text={strings('auth.login.login')}
            textStyle={styles.btnTxtStyle}
            onPress={handleSubmit}
            disabled={!isFormValid}
          />
          {/*  */}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default LoginPage
