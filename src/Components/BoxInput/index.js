import { Input } from "../Input";
import { Label } from "../Label";
import { FieldContent } from "./style";

export const BoxInput = ({
  fieldWidth = 100,
  editable = false,
  textLabel,
  placeholder,
  fieldValue = null,
  onChangeText = null,
  keyType = "default",
  maxLength,
  onBlur
}) => {
  return (
    <FieldContent fieldWidth={fieldWidth}>
      <Label textLabel={textLabel} />

      <Input
        onBlur={onBlur}
        editable={editable}
        placeholder={placeholder}
        keyType={keyType}
        maxLength={maxLength}
        fieldValue={fieldValue}
        onChangeText={onChangeText}      
      />
    </FieldContent>
  );
};