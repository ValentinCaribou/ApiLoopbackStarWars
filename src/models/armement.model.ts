import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Armement extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Armement>) {
    super(data);
  }
}

export interface ArmementRelations {
  // describe navigational properties here
}

export type ArmementWithRelations = Armement & ArmementRelations;
