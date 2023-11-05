export enum SORT_TYPE {
  ascending = 'ascending',
  descending = 'descending',
}

const ascendingSort = (a: string, b: string) => {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
};

const descendingSort = (a: string, b: string) => {
  if (a < b) {
    return 1;
  }

  if (a > b) {
    return -1;
  }

  return 0;
};

export const alphabeticalSort = {
  [SORT_TYPE.ascending]: ascendingSort,
  [SORT_TYPE.descending]: descendingSort,
};
