import { Form } from "react-bootstrap";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
type InputProps<TFieldValue extends FieldValues> = {
  label: string;
  type?: string;
  name: Path<TFieldValue>;
  error?: string;
  success?: string;
  checkingMsg?: string;
  disabled?: boolean;
  register: UseFormRegister<TFieldValue>;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

function Input<TFieldValue extends FieldValues>({
  label,
  name,
  type = "text",
  register,
  error,
  onBlur,
  success,
  checkingMsg,
  disabled,
}: InputProps<TFieldValue>) {
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
    }
    register(name).onBlur(e);
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={label}
        {...register(name)}
        onBlur={onBlurHandler}
        isInvalid={!!error}
        disabled={disabled}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      <Form.Control.Feedback type="valid">{success}</Form.Control.Feedback>
      {checkingMsg && <Form.Text muted>{checkingMsg}</Form.Text>}
    </Form.Group>
  );
}

export default Input;
