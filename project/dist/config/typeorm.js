"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const config = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dropSchema: false,
    synchronize: true,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    Migration: ['dist/migrations/*{.ts,.js}']
};
exports.default = (0, config_1.registerAs)('typeorm', () => config);
//# sourceMappingURL=typeorm.js.map