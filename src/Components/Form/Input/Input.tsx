import { Form } from "react-bootstrap";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
type InputProps<TFieldValue extends FieldValues> = {
  label: string;
  type?: string;
  name: Path<TFieldValue>;
  error?: string;
  register: UseFormRegister<TFieldValue>;
};

function Input<TFieldValue extends FieldValues>({
  label,
  name,
  type = "text",
  register,
  error,
}: InputProps<TFieldValue>) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={label}
        {...register(name)}
        isInvalid={!!error}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
}

export default Input;
