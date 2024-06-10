// question.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionDocument = Question & Document;

@Schema({ collection: 'questions' })
export class Question {
  @Prop({ required: true })
  questionText: string;

  @Prop({ required: true })
  options: string[];

  @Prop({ required: true })
  correctAnswer: string;

  @Prop({ required: true })
  level: 'easy' | 'normal' | 'difficult';

  @Prop({ required: true })
  categories: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
