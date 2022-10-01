export interface ButtonInterface {
  text: string;
  onClick: () =>
    | any
    | ((FormEvent) => Promise<void>)
    | ((e: any) => Promise<void>);
}

export interface InputInterface {
  id?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onInput?: (any) => void;
  onChange?: (any) => void;
}
