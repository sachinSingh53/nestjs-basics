import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middlewares/logger/logger.middleware';
import { SongsController } from './songs/songs.controller';
import { UserModule } from './user/user.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [SongsModule, UserModule, BookmarksModule, AuthModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    //method - 1
    // consumer.apply(LoggerMiddleware).forRoutes('songs');

    // method - 2
    // consumer.apply(LoggerMiddleware)
    //   .forRoutes({path:'songs',method:RequestMethod.POST})

    //method - 3
    consumer.apply(LoggerMiddleware)
      .forRoutes(SongsController)
  }

}
