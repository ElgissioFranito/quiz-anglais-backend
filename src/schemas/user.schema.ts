import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//Le type UserDocument sera utilisé pour représenter les documents MongoDB de la collection "users"
export type UserDocument = User & Document;

@Schema(
  {
    collection: 'users',          // si ne suis pas le convention : users(db) => User(schemaClassName) (ici c'est pas nécessaire)
    versionKey: false             // si vous ne voulez pas le champ "__v : 0" dans les documents créés
  })

export class User {
  @Prop({ required: true })
  name: string;

  @Prop()
  mail: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
