export interface ButtonInterface {
  text: string;
  disabled?: boolean;
  onClick:
    | (() => any)
    | ((FormEvent) => Promise<void>)
    | ((e: any) => Promise<void>)
    | ((event: any) => void);
}

export interface InputInterface {
  id?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onInput?: (any) => void;
  onChange?: (any) => void;
  label?: string;
}

export interface FieldInterface {
  name: string;
  value: string;
}
