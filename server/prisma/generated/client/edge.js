Object.defineProperty(exports, '__esModule', { value: true });

const {
	PrismaClientKnownRequestError,
	PrismaClientUnknownRequestError,
	PrismaClientRustPanicError,
	PrismaClientInitializationError,
	PrismaClientValidationError,
	NotFoundError,
	getPrismaClient,
	sqltag,
	empty,
	join,
	raw,
	Decimal,
	Debug,
	objectEnumValues,
	makeStrictEnum,
	Extensions,
	warnOnce,
	defineDmmfProperty,
	Public,
	detectRuntime
} = require('./runtime/edge.js');

const Prisma = {};

exports.Prisma = Prisma;
exports.$Enums = {};

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
	client: '5.9.1',
	engine: '23fdc5965b1e05fc54e5f26ed3de66776b93de64'
};

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.NotFoundError = NotFoundError;
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = Public.validator;

/**
 * Extensions
 */
Prisma.getExtensionContext = Extensions.getExtensionContext;
Prisma.defineExtension = Extensions.defineExtension;

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
	DbNull: objectEnumValues.classes.DbNull,
	JsonNull: objectEnumValues.classes.JsonNull,
	AnyNull: objectEnumValues.classes.AnyNull
};

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
	ReadUncommitted: 'ReadUncommitted',
	ReadCommitted: 'ReadCommitted',
	RepeatableRead: 'RepeatableRead',
	Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
	id: 'id',
	name: 'name',
	email: 'email',
	password: 'password'
};

exports.Prisma.SortOrder = {
	asc: 'asc',
	desc: 'desc'
};

exports.Prisma.QueryMode = {
	default: 'default',
	insensitive: 'insensitive'
};

exports.Prisma.ModelName = {
	User: 'User'
};
/**
 * Create the Client
 */
const config = {
	generator: {
		name: 'client',
		provider: {
			fromEnvVar: null,
			value: 'prisma-client-js'
		},
		output: {
			value: 'D:\\ProjectDevelopment\\Doing\\academicosdesantacruz\\server\\prisma\\generated\\client',
			fromEnvVar: null
		},
		config: {
			engineType: 'library'
		},
		binaryTargets: [
			{
				fromEnvVar: null,
				value: 'windows',
				native: true
			}
		],
		previewFeatures: [],
		isCustomOutput: true
	},
	relativeEnvPaths: {
		rootEnvPath: '../../../.env',
		schemaEnvPath: '../../../.env'
	},
	relativePath: '../..',
	clientVersion: '5.9.1',
	engineVersion: '23fdc5965b1e05fc54e5f26ed3de66776b93de64',
	datasourceNames: ['db'],
	activeProvider: 'postgresql',
	postinstall: true,
	inlineDatasources: {
		db: {
			url: {
				fromEnvVar: 'DATABASE_URL',
				value: null
			}
		}
	},
	inlineSchema:
		'ZGF0YXNvdXJjZSBkYiB7DQogIC8vIHByb3ZpZGVyID0gInNxbGl0ZSINCiAgLy8gdXJsICAgICAgPSAiZmlsZTouLi9kYXRhYmFzZS9kYXRhYmFzZS5zcWxpdGUiDQogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiDQogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQ0KfQ0KDQpnZW5lcmF0b3IgY2xpZW50IHsNCiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyINCiAgb3V0cHV0ICAgPSAiLi9nZW5lcmF0ZWQvY2xpZW50Ig0KfQ0KDQptb2RlbCBVc2VyIHsNCiAgaWQgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KCW5hbWUgIFN0cmluZw0KICBlbWFpbCBTdHJpbmcgIEB1bmlxdWUNCiAgcGFzc3dvcmQgIFN0cmluZw0KfQ0KDQo=',
	inlineSchemaHash: '97179c59a8db33a307b72a422b871ddb00d4b8945c89705f674811042e3169fa',
	noEngine: false
};
config.dirname = '/';

config.runtimeDataModel = JSON.parse(
	'{"models":{"User":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}'
);
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);
config.getQueryEngineWasmModule = undefined;

config.injectableEdgeEnv = () => ({
	parsed: {
		DATABASE_URL:
			(typeof globalThis !== 'undefined' && globalThis['DATABASE_URL']) ||
			(typeof process !== 'undefined' && process.env && process.env.DATABASE_URL) ||
			undefined
	}
});

if (
	(typeof globalThis !== 'undefined' && globalThis['DEBUG']) ||
	(typeof process !== 'undefined' && process.env && process.env.DEBUG) ||
	undefined
) {
	Debug.enable(
		(typeof globalThis !== 'undefined' && globalThis['DEBUG']) ||
			(typeof process !== 'undefined' && process.env && process.env.DEBUG) ||
			undefined
	);
}

const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);
