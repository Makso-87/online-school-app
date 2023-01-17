import { Base } from './Base';
import { Column, ManyToMany, OneToMany } from 'typeorm';
import { Field } from 'type-graphql';
import { User } from './User';

export class SchoolClass extends Base {
  @Column({ default: '' })
  @Field()
  name!: string;

  @ManyToMany(() => User, (user) => user)
  pupils!: User[];

  @ManyToMany(() => User, (user) => user)
  teacher!: User[];
}
