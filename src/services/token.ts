export enum KeyName {
  Token = 'fit-friends-token',
  RefreshToken = 'fit-friends-refresh-token'
}

export type Token = string;

export const getItem = (key: KeyName): Token => {
  const item = localStorage.getItem(key);
  return item ?? '';
};

export const saveItem = (key: KeyName, item: Token): void => {
  localStorage.setItem(key, item);
};

export const dropItem = (key: KeyName): void => {
  localStorage.removeItem(key);
};
