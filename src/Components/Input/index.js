import { InputText } from "./style"

export const Input = ({
    placeholder,
    editable,
    fieldValue,
    onChangeText,
    keyType,
    maxLength,
    onBlur

}) => {
    return (
        <InputText
            onBlur={onBlur}
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyType}
            maxLength={maxLength}
            value={fieldValue}
            onChangeText={onChangeText}
        />
    )
}