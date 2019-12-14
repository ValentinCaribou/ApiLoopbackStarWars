import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Propulsion extends Entity {
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
  consommation: number;

  @property({
    type: 'number',
    required: true,
  })
  vitesse: number;

  @property({
    type: 'number',
    required: true,
  })
  nbPropulseur: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Propulsion>) {
    super(data);
  }
}

export interface PropulsionRelations {
  // describe navigational properties here
}

export type PropulsionWithRelations = Propulsion & PropulsionRelations;
