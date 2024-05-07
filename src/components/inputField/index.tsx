import React from 'react'
import {
  TextInput,
  Text,
  View,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native'
import { COLOR_RED, COLOR_GRAY, COLOR_GRAY_999 } from '../../utils/colors'
import styles from './styles'
import { isRTL } from '../../i18n'

interface InputFieldProps extends TextInputProps {
  textInputName?: string
  inputBoxStyle?: StyleProp<ViewStyle>
  secureInput?: StyleProp<ViewStyle>
  customStyle?: boolean
  validationErrorStyle?: StyleProp<TextStyle>
  isEditable?: boolean | null
  numberOfRow?: number
  labelText?: string
  labelTextStyle?: StyleProp<TextStyle>
  selectionColor?: string
  errorColor?: string
  inputContainer?: StyleProp<ViewStyle>
  textInputRef?: React.RefObject<TextInput>
  errorMessage?: string
  isErrorMsgRequired?: boolean
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  textInputName,
  placeholderTextColor = COLOR_GRAY,
  inputBoxStyle,
  secureInput,
  customStyle = false,
  onChangeText,
  onBlur,
  secureTextEntry,
  validationErrorStyle,
  value,
  isEditable = null,
  numberOfRow,
  labelText,
  keyboardType,
  errorMessage,
  isErrorMsgRequired = false,
  labelTextStyle,
  selectionColor,
  errorColor = COLOR_RED,
  inputContainer,
  textInputRef,
  defaultValue,
  onKeyPress,
  autoCorrect = false,
  autoCapitalize = 'none',
  onSubmitEditing,
  returnKeyType = 'default',
  blurOnSubmit,
}) => {
  const inputFieldStyle = customStyle
    ? secureTextEntry
      ? secureInput
      : inputBoxStyle
    : { ...styles.commonInputBox, ...inputBoxStyle }
  const editableProps = isEditable !== null ? editable : true

  return (
    <View>
      <View style={[styles.textInputContainer, inputContainer]}>
        {labelText && (
          <Text numberOfLines={1} style={[styles.inputLabel, labelTextStyle]}>
            {labelText}
          </Text>
        )}
        <TextInput
          name={textInputName}
          selectionColor={selectionColor}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          style={[
            inputFieldStyle,
            {
              borderColor:
                isErrorMsgRequired && errorMessage
                  ? errorColor
                  : COLOR_GRAY_999,
            },
          ]}
          secureTextEntry={secureTextEntry}
          onChangeText={(text) => {
            onChangeText && onChangeText(text) // Added null check
          }}
          onBlur={onBlur}
          value={value}
          editable={editableProps}
          blurOnSubmit={blurOnSubmit}
          numberOfLines={numberOfRow}
          keyboardType={keyboardType}
          ref={textInputRef}
          defaultValue={defaultValue}
          onKeyPress={onKeyPress}
          autoCorrect={autoCorrect}
          autoCapitalize={autoCapitalize}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          textAlign={isRTL() ? 'right' : 'left'}
        />

        {isErrorMsgRequired && errorMessage && (
          <Text style={[styles.error, validationErrorStyle]}>
            {errorMessage}
          </Text>
        )}
      </View>
    </View>
  )
}

export default InputField
