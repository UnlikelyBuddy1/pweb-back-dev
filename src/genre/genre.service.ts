import { InjectRepository } from '@nestjs/typeorm';
import { Genre } from 'src/entities/genre.entity';
import { User } from 'src/entities/user.entity';
import { GenreRepository } from './genre.repository';
import { createGenreDto } from './dto/create-genre-dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { GetGenresFilterDto } from './dto/get-genre-filter.dto';

@Injectable()
export class GenreService {
    constructor(
        @InjectRepository(GenreRepository)
        private genreRepository : GenreRepository,
    ) { }

    async getGenreById(id: number, user : User): Promise<Genre>{
        const found = await this.genreRepository.findOne({where : {id}});
        if(!found) {
            throw new NotFoundException(`Genre with ID "${id}" not found`);
        }
        return found;
    }

    async createGenre(createGenreDto: createGenreDto, user: User): Promise<Genre> {
        return this.genreRepository.createGenre(createGenreDto, user);
    }

    async getGenres(filterDto: GetGenresFilterDto, user: User): Promise<Genre> {
        return this.genreRepository.getGenres(filterDto, user);
    }

    async deleteGenre(id: number, user: User): Promise<void> {
        const result = await this.genreRepository.delete(id);
        if(result.affected===0) {
            throw new NotFoundException(`Genre with ID "${id}" not found`);
        }
    }
}