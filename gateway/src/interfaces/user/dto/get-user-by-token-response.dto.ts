import { ApiProperty } from '@nestjs/swagger';
import { IUser } from '../user.interface';

export class GetUserByTokenResponseDto {
  @ApiProperty({ example: 'user_get_by_id_success' })
  message: string;
  @ApiProperty({
    example: {
      user: {
        email: 'test@bionictest.com1',
        is_confirmed: true,
        id: '4a73mf3bfb8h1ecf6b476ba2',
      },
    },
    nullable: true,
  })
  data: {
    user: IUser;
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
