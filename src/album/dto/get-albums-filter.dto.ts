import { IsNotEmpty } from 'class-validator';

export class GetAlbumsFilterDto {
    @IsNotEmpty()
    search: string;
}