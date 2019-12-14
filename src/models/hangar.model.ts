import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Hangar extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  nbChasseurs: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Hangar>) {
    super(data);
  }
}

export interface HangarRelations {
  // describe navigational properties here
}

export type HangarWithRelations = Hangar & HangarRelations;
