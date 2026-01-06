declare const _default: (() => {
    type: string;
    host: string | undefined;
    port: number;
    username: string | undefined;
    password: string | undefined;
    database: string | undefined;
    dropSchema: boolean;
    synchronize: boolean;
    entities: string[];
    Migration: string[];
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    host: string | undefined;
    port: number;
    username: string | undefined;
    password: string | undefined;
    database: string | undefined;
    dropSchema: boolean;
    synchronize: boolean;
    entities: string[];
    Migration: string[];
}>;
export default _default;
