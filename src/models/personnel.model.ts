import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Personnel extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nom: string;

  @property({
    type: 'string',
    required: true,
  })
  prenom: string;

  @property({
    type: 'string',
    required: true,
  })
  grade: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Personnel>) {
    super(data);
  }
}

export interface PersonnelRelations {
  // describe navigational properties here
}

export type PersonnelWithRelations = Personnel & PersonnelRelations;
