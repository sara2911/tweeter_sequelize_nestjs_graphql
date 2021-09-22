
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateTweetInput {
    content: string;
    userId: string;
}

export interface CreateUserInput {
    name: string;
    email: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface Tweet {
    id: string;
    content: string;
    userId: string;
    User: User;
}

export interface IQuery {
    findAllUser(): User[] | Promise<User[]>;
}

export interface IMutation {
    create(createTweetInput: CreateTweetInput): Tweet | Promise<Tweet>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
}

type Nullable<T> = T | null;
