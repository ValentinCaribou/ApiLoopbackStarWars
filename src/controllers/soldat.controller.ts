import {
  repository,
} from '@loopback/repository';
import {
  get,
  requestBody,
} from '@loopback/rest';
import {Personnel} from '../models';
import {PersonnelRepository} from '../repositories';

export class SoldatController {
  constructor(
    @repository(PersonnelRepository)
    public personnelRepository : PersonnelRepository,
  ) {}

  @get('/portArme', {
    responses: {
      '200': {
        description: 'Personnel model instance',
      },
    },
  })
  async arme(
    @requestBody() user: Personnel,
  ): Promise<string> {
    console.log(user);
    if (user.grade.includes("soldat")){
      return "autoriser à garder sont arme de service"
    } else {
      return "Accréditation insuffisante !"
    }
  }
}
