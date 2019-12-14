import {
  repository,
} from '@loopback/repository';
import {
  get,
  requestBody,
} from '@loopback/rest';
import {Personnel} from '../models';
import {PersonnelRepository} from '../repositories';

export class TechniciensController {
  constructor(
    @repository(PersonnelRepository)
    public personnelRepository : PersonnelRepository,
  ) {}

  @get('/reparation', {
    responses: {
      '200': {
        description: 'Personnel model instance',
      },
    },
  })
  async reparation(
    @requestBody() user: Personnel,
  ): Promise<string> {
    console.log(user);
    if (user.grade.includes("techniciens")){
      return "Réparation des partie endommager"
    } else {
      return "Accréditation insuffisante !"
    }
  }

  @get('/maintenance', {
    responses: {
      '200': {
        description: 'Personnel model instance',
      },
    },
  })
  async maintenance(
    @requestBody() user: Personnel,
  ): Promise<string> {
    console.log(user);
    if (user.grade.includes("techniciens")){
      return "Autoriser à effectuer la maintenance"
    } else {
      return "Accréditation insuffisante !"
    }
  }

  @get('/cargaison', {
    responses: {
      '200': {
        description: 'Personnel model instance',
      },
    },
  })
  async cargaison(
    @requestBody() user: Personnel,
  ): Promise<string> {
    console.log(user);
    if (user.grade.includes("techniciens")){
      return "Chargement / déchargement de la cargaison"
    } else {
      return "Accréditation insuffisante !"
    }
  }

  @get('/AutorisationDecollageChasseurs', {
    responses: {
      '200': {
        description: 'Personnel model instance',
      },
    },
  })
  async decollageChasseur(
    @requestBody() user: Personnel,
  ): Promise<string> {
    console.log(user);
    if (user.grade.includes("officier")){
      return "Décollage des chasseurs autoriser !"
    } else {
      return "Accréditation insuffisante !"
    }
  }
}
