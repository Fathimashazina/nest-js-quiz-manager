// import { ConfigModule, ConfigService } from '@nestjs/config';
// import {
//   TypeOrmModuleAsyncOptions,
//   TypeOrmModuleOptions,
// } from '@nestjs/typeorm';

import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrations:[__dirname+'/../migrations/*{.ts,.js}'],
      cli:{
        migrationsDir:__dirname+'/../migrations'
      },
      extra:{
        charset:'utf8mb4_unicode_ci',
      },
      synchronize: true,
      logging: true,
    };
  },
};

export const tyoeOrmConfig:TypeOrmModuleOptions={
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations:[__dirname+'/../migrations/*{.ts,.js}'],
  cli:{
    migrationsDir:__dirname+'/../migrations'
  },
  extra:{
    charset:'utf8mb4_unicode_ci',
  },
  logging: true,
}

// export default class TypeOrmConfig {
//   static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
//     return {
//       type: 'postgres',
//       host: configService.get('DB_HOST'),
//       port: configService.get('DB_PORT'),
//       username: configService.get('DB_USERNAME'),
//       password: configService.get('DB_PASSWORD'),
//       database: configService.get('DB_NAME'),
//       entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//       synchronize: true,
//       logging: true,
//     };
//   }
// }

// export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
//   imports: [ConfigModule],
//   useFactory: async (
//     configService: ConfigService,
//   ): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
//   inject: [ConfigService],
// };
