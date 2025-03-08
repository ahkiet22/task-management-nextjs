export interface TUserLogin {
  email: string;
  password: string;
}

export interface TUserRegister extends TUserLogin {
  fullName: string;
}
