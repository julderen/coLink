import { MD5, SHA256 } from 'crypto-js';

function encryptPassword(email: string, password: string): string {
  return SHA256(`${email}.newCoLink.${password}`).toString();
}

export {
  encryptPassword
};
