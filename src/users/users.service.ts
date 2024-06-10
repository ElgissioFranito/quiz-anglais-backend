import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dtos/user.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel("User") private userModel: Model<UserDocument>,
    ) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const userFounded = await this.userModel.findOne({
            name: createUserDto.name
        }).exec();

        if (userFounded) {
           return userFounded; 
        }

        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

}
