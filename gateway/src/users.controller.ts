import {
  Controller,
  Post,
  Put,
  Get,
  Body,
  Req,
  Inject,
  HttpStatus,
  HttpException,
  Param,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';

import { GetUserByTokenResponseDto } from './interfaces/user/dto/get-user-by-token-response.dto';


@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor() {}

  @Get()
  //@todo authorization should be here
  @ApiOkResponse({
    type: GetUserByTokenResponseDto,
  })
  public async getUserByToken(){}

  @Post()
  public async createUser() {}

  @Post('/login')
  public async loginUser() {}


  @Put('/logout')
  public async logoutUser() {}

  @Get('/confirm/:link')
  public async confirmUser(){}
}
