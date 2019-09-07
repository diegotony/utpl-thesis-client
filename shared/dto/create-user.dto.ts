export class CreateUserDto {
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly  dni:  string;
  password: string;
  // password_hash: string;
}