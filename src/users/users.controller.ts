import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }
    
    @Post('create')
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }
}
