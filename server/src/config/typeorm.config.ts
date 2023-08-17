import { TypeOrmModuleOptions } from "@nestjs/typeorm"

export const typeormconfig: TypeOrmModuleOptions ={
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'password',
    database: 'quiz',
    entities: [__dirname+'/../**/*.entity{.ts,.js}'],
    synchronize: true,
  };