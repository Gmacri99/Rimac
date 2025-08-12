export interface DatosUsuario {
  tipoDocumento: string;
  nroDocumento: number | '';
  celular: string;
}

export interface ValidacionProps extends Omit<DatosUsuario, 'tipoDocumento'> {
  comunicaciones: boolean;
  privacidad: boolean;
}

export interface ValidacionResultado {
  valido: boolean;
  mensaje?: string;
}

export interface InputState {
  nroDocumento: boolean;
  celular: boolean;
}