import base64Url from 'base64-url';
import jsonwebtoken, { SignOptions, VerifyOptions, DecodeOptions } from 'jsonwebtoken';
import { IJWTService } from 'abstractions/services';

const SECRET_KEY = 'addfsfsfssd';
const EXPIRES_TIME = '48h';

class JWTService implements IJWTService {
  public generateToken(payload: object, options?: SignOptions, toBase64?: boolean): Promise<string> {
    return new Promise((resolve, reject) => {
      const payloadObject = { ...payload };

      jsonwebtoken.sign(payloadObject, SECRET_KEY, { expiresIn: EXPIRES_TIME, ...options }, (err, token) => {
        if (err) return reject(err);

        const finalToken = toBase64 ? base64Url.encode(token) : token;

        resolve(finalToken);
      });
    });
  }

  public verifyToken<T>(token: string, options?: VerifyOptions, isBase64?: boolean): Promise<T> {
    return new Promise((resolve, reject) => {
      const inputToken = isBase64 ? base64Url.decode(token) : token;

      jsonwebtoken.verify(inputToken, SECRET_KEY, { maxAge: EXPIRES_TIME, ...options }, (err, payload) => {
        if (err) return reject(err);

        resolve(payload as T);
      });
    });
  }

  public decodeToken<T>(token: string, options?: DecodeOptions): Promise<T> {
    return new Promise((resolve, reject) => {
      const payload = jsonwebtoken.decode(token, options);

      if (!payload) return reject('Empty payload');

      resolve(payload as T);
    });
  }
}

export default JWTService;
