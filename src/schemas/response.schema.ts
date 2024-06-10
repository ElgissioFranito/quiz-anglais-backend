// reponse.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReponseDocument = Reponse & Document;

@Schema({ collection: 'responses' })
export class Reponse {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  questionId: string;

  @Prop({ required: true })
  response: string;

  @Prop({ required: true })
  isCorrecte: boolean;
}

export const ReponseSchema = SchemaFactory.createForClass(Reponse);
