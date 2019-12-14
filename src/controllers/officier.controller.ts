import {
  repository,
} from '@loopback/repository';
import {
  get,
  requestBody,
} from '@loopback/rest';
import {Personnel} from '../models';
import {PersonnelRepository} from '../repositories';

export class OfficierController {
  constructor(
    @repository(PersonnelRepository)
    public personnelRepository : PersonnelRepository,
  ) {}

  @get('/decollage', {
    responses: {
      '200': {
        description: 'Personnel model instance',
      },
    },
  })
  async decollage(
    @requestBody() user: Personnel,
  ): Promise<string> {
    console.log(user);
    if (user.grade.includes("officier")){
      return "Décollage autoriser !"
    } else {
      return "Accréditation insuffisante !"
    }
  }

  @get('/atterissage', {
    responses: {
      '200': {
        description: 'Personnel model instance',
      },
    },
  })
  async atterissage(
    @requestBody() user: Personnel,
  ): Promise<string> {
    console.log(user);
    if (user.grade.includes("officier")){
      return "Atterissage autoriser !"
    } else {
      return "Accréditation insuffisante !"
    }
  }

  @get('/ouvertureDesSas', {
    responses: {
      '200': {
        description: 'Personnel model instance',
      },
    },
  })
  async ouvertureSas(
    @requestBody() user: Personnel,
  ): Promise<string> {
    console.log(user);
    if (user.grade.includes("officier")){
      return "Ouverture du sas autoriser !"
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

  @get('/openFire', {
    responses: {
      '200': {
        description: 'Personnel model instance',
      },
    },
  })
  async openFire(
    @requestBody() user: Personnel,
  ): Promise<string> {
    console.log(user);
    if (user.grade.includes("officier")){
      return "Autorisation d'ouvrir le feu !"
    } else {
      return "Accréditation insuffisante !"
    }
  }
}
