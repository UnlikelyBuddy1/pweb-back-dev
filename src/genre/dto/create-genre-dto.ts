import { Optional } from '@nestjs/common';
import { IsNotEmpty } from 'class-validator';


export class createGenreDto {
    @IsNotEmpty()
    name : string;

    @Optional()
    trackIds :number[];

    @Optional()
    albumIds: number[];
}