export interface User {
    id: number,
    username: string,
    hash: 
        {
            salt: string,
            iv: string,
            cipherText: string
        },   
    accountType: string
}
