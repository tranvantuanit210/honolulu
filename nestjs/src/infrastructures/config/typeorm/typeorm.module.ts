import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentConfigModule } from '../environment-config/environment-config.module';
import { EnvironmentConfigService } from '../environment-config/environment-config.service';
import * as TypeormNaming from 'typeorm-naming-strategies';

export const getTypeOrmModuleOptions = (
  config: EnvironmentConfigService,
): TypeOrmModuleOptions =>
  ({
    type: 'postgres',
    host: config.getDatabaseHost(), // localhost // db
    port: config.getDatabasePort(),
    username: config.getDatabaseUser(),
    password: config.getDatabasePassword(),
    database: config.getDatabaseName(),
    ssl: true,
    entities: [__dirname + './../../**/*.table{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: config.getDatabaseSync(),
    schema: config.getDatabaseSchema(),
    migrationsRun: true,
    migrations: [__dirname + '/migrations**/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migrations',
    },
    logging: true,
    namingStrategy: new TypeormNaming.SnakeNamingStrategy(),
  }) as TypeOrmModuleOptions;
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      useFactory: getTypeOrmModuleOptions,
    }),
  ],
})
export class TypeOrmConfigModule {}
