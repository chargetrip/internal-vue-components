// FORM
export interface FormQuestionOption {
  value: string | boolean;
  label: string;
}
export interface CheckboxTreeValue extends FormQuestionOption {
  children?: FormQuestionOption[];
}

export interface FormValues {
  [name: string]: string | null;
}

export interface SignInValues {
  password: string | null;
  email: string | null;
  fullName: string | null;
  terms: boolean;
}

export interface FormQuestionClass {
  valid: boolean;
  "in-valid": boolean;
  touched: boolean;
  error: boolean;
}

export interface FormQuestion {
  placeholder?: string;
  validator?: (arg: object) => boolean;
  value: string | number | null | boolean;
  class?: FormQuestionClass;
  validators?: object;
}

export interface Form {
  submit?: (values: object) => void;
  [name: string]: FormQuestion | Function | undefined;
}
