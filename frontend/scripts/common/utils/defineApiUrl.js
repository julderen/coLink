import { PRODUCTION_API_URL, DEVELOPMENT_API_URL } from 'constants/UrlConstants';

export const defineApiUrl = path => `${DEVELOPMENT_API_URL}/${path}`;
