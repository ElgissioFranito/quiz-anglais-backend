import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto, UpdateQuestionDto, nextQuestionDto } from './dtos/question.dto';

@Controller('questions')
export class QuestionsController {
    constructor(private readonly questionsService: QuestionsService) { }

    @Get()
    findAll() {
        return this.questionsService.findAll();
    }

    @Post()
    create(@Body() createQuestionDto: CreateQuestionDto) {
        return this.questionsService.create(createQuestionDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.questionsService.findOne(id);
    }

    @Post('getNext')
    getNext(@Body() nextQuestionDto: nextQuestionDto) {
        return this.questionsService.getNext(nextQuestionDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateQuestionDto: UpdateQuestionDto) {
        return this.questionsService.update(id, updateQuestionDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.questionsService.remove(id);
    }
}
