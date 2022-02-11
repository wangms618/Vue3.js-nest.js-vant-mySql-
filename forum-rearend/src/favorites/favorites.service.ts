import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { FavoritesEntity } from './favorites.entity';

@Injectable()
export class FavoritesService {
    constructor(
        @InjectRepository(FavoritesEntity)
        private readonly favoritesRepository: Repository<FavoritesEntity>

    ) { }
}
