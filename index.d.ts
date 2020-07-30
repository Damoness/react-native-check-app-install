
type func = (key:string) => Promise<boolean>

export class AppInstalledChecker{
    static  getAppList:()=>Array<string>;
    
    static isAppInstalled:func;


    static checkURLScheme:(proto:string,query:string|null)=>Promise<boolean>
    static checkPackageName:func;
    static isAppInstalledAndroid:func;
    static isAppInstalledIOS:func;
}
