import { ApiProperty } from '@nestjs/swagger';
import { IUser } from '../user.interface';

export class CreateUserResponseDto {
  @ApiProperty({ example: 'user_create_success' })
  message: string;
  @ApiProperty({
    example: {
      user: {
        email: 'test@bionictest.com',
        is_confirmed: false,
        id: '4a73mf3bfb8h1ecf6b476ba2',
      },
    },
    nullable: true,
  })
  data: {
    user: IUser;
    token: string;
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
