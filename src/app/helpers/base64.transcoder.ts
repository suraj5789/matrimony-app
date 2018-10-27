import { Base64 } from 'js-base64';
export default class Base64TransCoder {
    public static SEPERATOR_KEY: string = '@';
    public static encode(str : string) : string {
        return Base64.encode(str);
    }

    public static decode(str : string) : string {
        return Base64.decode(str);
    }
}