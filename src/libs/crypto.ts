
import CryptoJS from 'crypto-js';

export class Crypto {
    static encryptSHA1(data: string): string {
        return CryptoJS.SHA1(data).toString();
    }
}