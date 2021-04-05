import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { TrackModule } from './track/track.module';
import { AlbumModule } from './album/album.module';
import { ArtistModule } from './artist/artist.module';
import { GenreModule } from './genre/genre.module';
import { ControllerModule } from './controller/controller.module';
import { ServiceModule } from './service/service.module';
import { GenrController } from './genr/genr.controller';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TrackModule,
    AuthModule,
    AlbumModule,
    ArtistModule,
    GenreModule,
    ControllerModule,
    ServiceModule,],
  controllers: [GenrController],
})
export class AppModule {}