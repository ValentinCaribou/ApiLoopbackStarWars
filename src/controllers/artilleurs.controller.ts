import {
  repository,
} from '@loopback/repository';
import {
  get,
  requestBody,
} from '@loopback/rest';
import {Personnel} from '../models';
import {PersonnelRepository} from '../repositories';

export class ArtilleursController {
  constructor(
    @repository(PersonnelRepository)
    public personnelRepository : PersonnelRepository,
  ) {}

  @get('/useCanon', {
    responses: {
      '200': {
        description: 'Personnel model instance',
      },
    },
  })
  async useCanon(
    @requestBody() user: Personnel,
  ): Promise<string> {
    console.log(user);
    if (user.grade.includes("artilleurs")){
      return "Autorisation d'utiliser les canon !"
    } else {
      return "Accréditation insuffisante !"
    }
  }

  @get('/trajet', {
    responses: {
      '200': {
        description: 'Personnel model instance',
      },
    },
  })
  async trajet(
    @requestBody() user: Personnel,
  ): Promise<string> {
    console.log(user);
    return "Dernier voyage vers Coruscant"
  }

  @get('/autorisationCombat', {
    responses: {
      '200': {
        description: 'Personnel model instance',
      },
    },
  })
  async autorisationCombat(
    @requestBody() user: Personnel,
  ): Promise<string> {
    console.log(user);
    if (user.grade.includes("artilleurs")){
      return "Autoriser à engager le combat !"
    } else {
      return "fuyer pauvres fou ! "
    }
  }
}
