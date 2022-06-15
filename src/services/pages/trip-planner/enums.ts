export enum ProductListState {
  WAITING_FOR_COUNTRY,
  WAITING_FOR_CITY,
  WAITING_FOR_DATE,
  NOT_FOUND,
  READY,
}

export const ProductListStateMapping: Record<ProductListState, string> = {
  [ProductListState.WAITING_FOR_COUNTRY]: 'Please select country',
  [ProductListState.WAITING_FOR_CITY]: 'Please select city ',
  [ProductListState.WAITING_FOR_DATE]: 'Please select date',
  [ProductListState.NOT_FOUND]: 'Nothing found, please try a different date',
  [ProductListState.READY]: '',
};
