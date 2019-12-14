import {DefaultCrudRepository} from '@loopback/repository';
import {Personnel, PersonnelRelations} from '../models';
import {PersonnelDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PersonnelRepository extends DefaultCrudRepository<
  Personnel,
  typeof Personnel.prototype.id,
  PersonnelRelations
> {
  constructor(
    @inject('datasources.personnel') dataSource: PersonnelDataSource,
  ) {
    super(Personnel, dataSource);
  }
}
