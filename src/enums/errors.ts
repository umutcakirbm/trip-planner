export enum Errors {
  FETCH_ERROR = 'FETCH_ERROR',
}

export const ErrorsMapping: Record<Errors, string> = {
  [Errors.FETCH_ERROR]: 'Error! Make sure you are connected to the internet',
};
