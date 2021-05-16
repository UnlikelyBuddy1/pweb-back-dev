import { IsNotEmpty, IsOptional} from 'class-validator';

export class createTrackDto {
    @IsNotEmpty()
    title : string;

    @IsOptional()
    path :string;

    @IsOptional()
    genreIds: number[];

    @IsOptional()
    albumIds: number[];

    @IsOptional()
    artistIds: number[];
}