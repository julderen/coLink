import { SignOptions, VerifyOptions, DecodeOptions } from 'jsonwebtoken';

interface IJWTService {
  generateToken(payload: object, options?: SignOptions, toBase64?: boolean): Promise<string>;
  verifyToken<T>(token: string, options?: VerifyOptions, isBase64?: boolean): Promise<T>;
  decodeToken<T>(token: string, options?: DecodeOptions): Promise<T>;
}

// rollup fix
declare const IJWTService: IJWTService;

export default IJWTService;
