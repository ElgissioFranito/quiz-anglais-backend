import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuestionDto, UpdateQuestionDto, nextQuestionDto } from './dtos/question.dto';
import { Question, QuestionDocument } from 'src/schemas/question.schema';
import { randomInt } from 'crypto';

@Injectable()
export class QuestionsService {
    constructor(
        @InjectModel("Question") private questionModel: Model<QuestionDocument>,
    ) { }

    async create(createQuestionDto: CreateQuestionDto): Promise<Question> {
        const createdQuestion = new this.questionModel(createQuestionDto);
        return createdQuestion.save();
    }

    async findAll(): Promise<Question[]> {
        return this.questionModel.find().exec();
    }

    async findOne(id: string): Promise<Question> {
        return this.questionModel.findById(id).exec();
    }

    async getNext(nextQuestionDto: nextQuestionDto): Promise<Question> {
        let questionsFound = [];

        if (nextQuestionDto.level && nextQuestionDto.categories) {
            questionsFound = await this.questionModel.find({
                level: nextQuestionDto.level,
                categories: nextQuestionDto.categories
            }).exec();
        } else if (nextQuestionDto.level && !nextQuestionDto.categories) {
            questionsFound = await this.questionModel.find({
                level: nextQuestionDto.level
            }).exec();
        } else if (!nextQuestionDto.level && nextQuestionDto.categories) {
            questionsFound = await this.questionModel.find({
                categories: nextQuestionDto.categories
            }).exec();
        } else {
            questionsFound = await this.questionModel.find().exec();
        }

        const questionsFoundLength = questionsFound.length;
        const randomNumber = randomInt(questionsFoundLength);

        return questionsFound[randomNumber];
    }

    async update(id: string, updateQuestionDto: UpdateQuestionDto): Promise<Question> {
        return this.questionModel.findByIdAndUpdate(id, updateQuestionDto, { new: true }).exec();
    }

    async remove(id: string): Promise<Question> {
        return this.questionModel.findByIdAndDelete(id).exec();
    }
}
