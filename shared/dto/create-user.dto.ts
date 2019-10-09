import { ApiModelProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiModelProperty()
  readonly first_name: string;
  @ApiModelProperty()
  readonly last_name: string;
  @ApiModelProperty()
  readonly email: string;
  @ApiModelProperty()
  readonly  dni:  string;
  @ApiModelProperty()
  password: string;
  // password_hash: string;
}