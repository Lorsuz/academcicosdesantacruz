import { ObjectId } from 'mongoose';

export interface FromDatabaseForClient {
	_id: ObjectId;
	fullName: string;
	email: string;
	password: string;
	phone: string;
	profileImage: string;
	isAdmin: boolean;
	verified: boolean;
	createdAt: NativeDate;
	updatedAt: NativeDate;
}

export interface FromClientForRegister {
	fullName: string;
	email: string;
	password: string;
	phone: string;
	profileImage?: string;
	isAdmin?: boolean;
};

export interface FromClientForLogin {
	email: string;
	password: string;
};

export interface FromClientForUpdate {
	fullName: string;
	email: string;
	phone: string;
	profileImage: string;
};

export interface FromClientForChangePassword {
	password: string;
	newPassword: string;
};

export interface FromClientForDelete {
	email: string;
	password: string;
};

export interface ForImportAllUsers {
	users: FromClientForRegister[];
};