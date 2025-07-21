export const getEnv = (key : string , defualtValue?: string): string =>{
    const value = process.env[key];
    if(value === undefined) {
        if (defualtValue === undefined){
            throw new Error (`Environment varaiable ${key} is not set`);
        }
        return defualtValue ;
    }
return value ;
}