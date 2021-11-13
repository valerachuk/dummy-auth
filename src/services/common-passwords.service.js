import commonPasswordsCsv from './1k-common-passwords';

const commonPasswords = commonPasswordsCsv.split(/\w+/);

export function isCommonPassword (password) {
  return commonPasswords.some(commonPassword => password.toLowerCase() === commonPassword);
}
