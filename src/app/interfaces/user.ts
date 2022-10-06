export interface IUserInfo {
    accessToken: string,
    user: {
        confirmPassword: string,
        password: string,
        firstName: string,
        lastName: string,
        role?: number,
        id: number
    }
}

export interface IUserRegister {
    confirmPassword: string,
    password: string,
    firstName: string,
    lastName: string,
    role?: number,
}

export interface IUserLogin {
    email: string,
    password: string
}