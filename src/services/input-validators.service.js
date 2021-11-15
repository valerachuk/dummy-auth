import commonPasswordsCsv from './1k-common-passwords.csv';

const commonPasswords = commonPasswordsCsv.split(/\s+/);

function isCommonPassword (password) {
  return commonPasswords.some(commonPassword => password.toLowerCase() === commonPassword);
}

export function commonPasswordValidator (errorMessage) {
  return fieldText => !isCommonPassword(fieldText) || errorMessage;
}

export function requiredValidator (errorMessage) {
  return fieldText => !!fieldText || errorMessage;
}
