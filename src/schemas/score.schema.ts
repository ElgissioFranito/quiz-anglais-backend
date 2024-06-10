// score.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ScoreDocument = Score & Document;

@Schema({ collection: 'scores' })
export class Score {
  @Prop({ required: true })
  userId: string;

  @Prop()
  quizId?: string;

  @Prop({ required: true })
  score: number;
}

export const ScoreSchema = SchemaFactory.createForClass(Score);
