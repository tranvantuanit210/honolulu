import { UsecaseProxyModule } from 'src/infrastructures/usecase-proxy/usecase-proxy.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentConfigModule } from './infrastructures/config/environment-config/environment-config.module';
import { UserModule } from './presentations/user/user.module';

@Module({
  imports: [UsecaseProxyModule.register(), UserModule, EnvironmentConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
