/**
 * @flow
 */

// Code generated by Prisma (prisma@1.23.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import type { GraphQLSchema, DocumentNode } from "graphql";
import type { BasePrismaOptions as BPOType, Options } from "prisma-client-lib";
import { makePrismaClientClass, Model } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type NodePromise = Promise<Node>;

export type AtLeastOne<T> = $Shape<T>;

export interface Exists {
  authPayload(where?: AuthPayloadWhereInput): Promise<boolean>;
  user(where?: UserWhereInput): Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

interface PrismaInterface {
  $exists: Exists;
  $graphql: <T: any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  authPayloads: (args?: {
    where?: AuthPayloadWhereInput,
    orderBy?: AuthPayloadOrderByInput,
    skip?: Int,
    after?: String,
    before?: String,
    first?: Int,
    last?: Int
  }) => FragmentableArray<AuthPayload>;
  authPayloadsConnection: (args?: {
    where?: AuthPayloadWhereInput,
    orderBy?: AuthPayloadOrderByInput,
    skip?: Int,
    after?: String,
    before?: String,
    first?: Int,
    last?: Int
  }) => AuthPayloadConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (args?: {
    where?: UserWhereInput,
    orderBy?: UserOrderByInput,
    skip?: Int,
    after?: String,
    before?: String,
    first?: Int,
    last?: Int
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput,
    orderBy?: UserOrderByInput,
    skip?: Int,
    after?: String,
    before?: String,
    first?: Int,
    last?: Int
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createAuthPayload: (data: AuthPayloadCreateInput) => AuthPayloadPromise;
  updateManyAuthPayloads: (args: {
    data: AuthPayloadUpdateManyMutationInput,
    where?: AuthPayloadWhereInput
  }) => BatchPayloadPromise;
  deleteManyAuthPayloads: (
    where?: AuthPayloadWhereInput
  ) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput,
    where: UserWhereUniqueInput
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput,
    where?: UserWhereInput
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput,
    create: UserCreateInput,
    update: UserUpdateInput
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  authPayload: (
    where?: AuthPayloadSubscriptionWhereInput
  ) => AuthPayloadSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export type ClientConstructor<T> = (options?: BPOType) => T;

/**
 * Types
 */

export type AuthPayloadOrderByInput =
  | "token_ASC"
  | "token_DESC"
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "name_ASC"
  | "name_DESC"
  | "photoUrl_ASC"
  | "photoUrl_DESC"
  | "description_ASC"
  | "description_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserCreateInput {
  email: String;
  password: String;
  name?: String;
  photoUrl?: String;
  description?: String;
  friends?: UserCreateManyWithoutFriendsInput;
}

export interface AuthPayloadWhereInput {
  token?: String;
  token_not?: String;
  token_in?: String[];
  token_not_in?: String[];
  token_lt?: String;
  token_lte?: String;
  token_gt?: String;
  token_gte?: String;
  token_contains?: String;
  token_not_contains?: String;
  token_starts_with?: String;
  token_not_starts_with?: String;
  token_ends_with?: String;
  token_not_ends_with?: String;
  user?: UserWhereInput;
  AND?: AuthPayloadWhereInput[];
  OR?: AuthPayloadWhereInput[];
  NOT?: AuthPayloadWhereInput[];
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input,
  email?: String
}>;

export interface AuthPayloadUpdateManyMutationInput {
  token?: String;
}

export interface UserUpdateWithoutFriendsDataInput {
  email?: String;
  password?: String;
  name?: String;
  photoUrl?: String;
  description?: String;
}

export interface UserCreateWithoutFriendsInput {
  email: String;
  password: String;
  name?: String;
  photoUrl?: String;
  description?: String;
}

export interface UserUpdateWithWhereUniqueWithoutFriendsInput {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutFriendsDataInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[];
  id_not_in?: ID_Input[];
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  email?: String;
  email_not?: String;
  email_in?: String[];
  email_not_in?: String[];
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[];
  password_not_in?: String[];
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  name?: String;
  name_not?: String;
  name_in?: String[];
  name_not_in?: String[];
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  photoUrl?: String;
  photoUrl_not?: String;
  photoUrl_in?: String[];
  photoUrl_not_in?: String[];
  photoUrl_lt?: String;
  photoUrl_lte?: String;
  photoUrl_gt?: String;
  photoUrl_gte?: String;
  photoUrl_contains?: String;
  photoUrl_not_contains?: String;
  photoUrl_starts_with?: String;
  photoUrl_not_starts_with?: String;
  photoUrl_ends_with?: String;
  photoUrl_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[];
  description_not_in?: String[];
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[];
  createdAt_not_in?: DateTimeInput[];
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[];
  updatedAt_not_in?: DateTimeInput[];
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  friends_every?: UserWhereInput;
  friends_some?: UserWhereInput;
  friends_none?: UserWhereInput;
  AND?: UserWhereInput[];
  OR?: UserWhereInput[];
  NOT?: UserWhereInput[];
}

export interface UserUpdateManyWithoutFriendsInput {
  create?: UserCreateWithoutFriendsInput[];
  delete?: UserWhereUniqueInput[];
  connect?: UserWhereUniqueInput[];
  disconnect?: UserWhereUniqueInput[];
  update?: UserUpdateWithWhereUniqueWithoutFriendsInput[];
  upsert?: UserUpsertWithWhereUniqueWithoutFriendsInput[];
  deleteMany?: UserScalarWhereInput[];
  updateMany?: UserUpdateManyWithWhereNestedInput[];
}

export interface UserUpdateManyMutationInput {
  email?: String;
  password?: String;
  name?: String;
  photoUrl?: String;
  description?: String;
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput;
  data: UserUpdateManyDataInput;
}

export interface UserUpsertWithWhereUniqueWithoutFriendsInput {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutFriendsDataInput;
  create: UserCreateWithoutFriendsInput;
}

export interface UserCreateManyWithoutFriendsInput {
  create?: UserCreateWithoutFriendsInput[];
  connect?: UserWhereUniqueInput[];
}

export interface UserUpdateInput {
  email?: String;
  password?: String;
  name?: String;
  photoUrl?: String;
  description?: String;
  friends?: UserUpdateManyWithoutFriendsInput;
}

export interface UserCreateOneInput {
  create?: UserCreateInput;
  connect?: UserWhereUniqueInput;
}

export interface AuthPayloadCreateInput {
  token: String;
  user: UserCreateOneInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[];
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[];
  updatedFields_contains_some?: String[];
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[];
  OR?: UserSubscriptionWhereInput[];
  NOT?: UserSubscriptionWhereInput[];
}

export interface UserScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[];
  id_not_in?: ID_Input[];
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  email?: String;
  email_not?: String;
  email_in?: String[];
  email_not_in?: String[];
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[];
  password_not_in?: String[];
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  name?: String;
  name_not?: String;
  name_in?: String[];
  name_not_in?: String[];
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  photoUrl?: String;
  photoUrl_not?: String;
  photoUrl_in?: String[];
  photoUrl_not_in?: String[];
  photoUrl_lt?: String;
  photoUrl_lte?: String;
  photoUrl_gt?: String;
  photoUrl_gte?: String;
  photoUrl_contains?: String;
  photoUrl_not_contains?: String;
  photoUrl_starts_with?: String;
  photoUrl_not_starts_with?: String;
  photoUrl_ends_with?: String;
  photoUrl_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[];
  description_not_in?: String[];
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[];
  createdAt_not_in?: DateTimeInput[];
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[];
  updatedAt_not_in?: DateTimeInput[];
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  AND?: UserScalarWhereInput[];
  OR?: UserScalarWhereInput[];
  NOT?: UserScalarWhereInput[];
}

export interface UserUpdateManyDataInput {
  email?: String;
  password?: String;
  name?: String;
  photoUrl?: String;
  description?: String;
}

export interface AuthPayloadSubscriptionWhereInput {
  mutation_in?: MutationType[];
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[];
  updatedFields_contains_some?: String[];
  node?: AuthPayloadWhereInput;
  AND?: AuthPayloadSubscriptionWhereInput[];
  OR?: AuthPayloadSubscriptionWhereInput[];
  NOT?: AuthPayloadSubscriptionWhereInput[];
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  email: String;
  password: String;
  name?: String;
  photoUrl?: String;
  description?: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  name: () => Promise<String>;
  photoUrl: () => Promise<String>;
  description: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  photoUrl: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface AuthPayloadEdge {
  node: AuthPayload;
  cursor: String;
}

export interface AuthPayloadEdgePromise
  extends Promise<AuthPayloadEdge>,
    Fragmentable {
  node: <T: AuthPayloadPromise>() => T;
  cursor: () => Promise<String>;
}

export interface AuthPayloadEdgeSubscription
  extends Promise<AsyncIterator<AuthPayloadEdge>>,
    Fragmentable {
  node: <T: AuthPayloadSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AuthPayloadSubscriptionPayload {
  mutation: MutationType;
  node: AuthPayload;
  updatedFields: String[];
  previousValues: AuthPayloadPreviousValues;
}

export interface AuthPayloadSubscriptionPayloadPromise
  extends Promise<AuthPayloadSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T: AuthPayloadPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T: AuthPayloadPreviousValuesPromise>() => T;
}

export interface AuthPayloadSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<AuthPayloadSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T: AuthPayloadSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T: AuthPayloadPreviousValuesSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AuthPayload {
  token: String;
}

export interface AuthPayloadPromise extends Promise<AuthPayload>, Fragmentable {
  token: () => Promise<String>;
  user: <T: UserPromise>() => T;
}

export interface AuthPayloadSubscription
  extends Promise<AsyncIterator<AuthPayload>>,
    Fragmentable {
  token: () => Promise<AsyncIterator<String>>;
  user: <T: UserSubscription>() => T;
}

export interface User {
  id: ID_Output;
  email: String;
  password: String;
  name?: String;
  photoUrl?: String;
  description?: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  name: () => Promise<String>;
  photoUrl: () => Promise<String>;
  description: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  friends: <T: FragmentableArray<User>>(args?: {
    where?: UserWhereInput,
    orderBy?: UserOrderByInput,
    skip?: Int,
    after?: String,
    before?: String,
    first?: Int,
    last?: Int
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  photoUrl: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  friends: <T: Promise<AsyncIterator<UserSubscription>>>(args?: {
    where?: UserWhereInput,
    orderBy?: UserOrderByInput,
    skip?: Int,
    after?: String,
    before?: String,
    first?: Int,
    last?: Int
  }) => T;
}

export interface AuthPayloadPreviousValues {
  token: String;
}

export interface AuthPayloadPreviousValuesPromise
  extends Promise<AuthPayloadPreviousValues>,
    Fragmentable {
  token: () => Promise<String>;
}

export interface AuthPayloadPreviousValuesSubscription
  extends Promise<AsyncIterator<AuthPayloadPreviousValues>>,
    Fragmentable {
  token: () => Promise<AsyncIterator<String>>;
}

export interface AuthPayloadConnection {
  pageInfo: PageInfo;
  edges: AuthPayloadEdge[];
}

export interface AuthPayloadConnectionPromise
  extends Promise<AuthPayloadConnection>,
    Fragmentable {
  pageInfo: <T: PageInfoPromise>() => T;
  edges: <T: FragmentableArray<AuthPayloadEdge>>() => T;
  aggregate: <T: AggregateAuthPayloadPromise>() => T;
}

export interface AuthPayloadConnectionSubscription
  extends Promise<AsyncIterator<AuthPayloadConnection>>,
    Fragmentable {
  pageInfo: <T: PageInfoSubscription>() => T;
  edges: <T: Promise<AsyncIterator<AuthPayloadEdgeSubscription>>>() => T;
  aggregate: <T: AggregateAuthPayloadSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T: UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T: UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T: UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T: UserPreviousValuesSubscription>() => T;
}

export interface AggregateAuthPayload {
  count: Int;
}

export interface AggregateAuthPayloadPromise
  extends Promise<AggregateAuthPayload>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateAuthPayloadSubscription
  extends Promise<AsyncIterator<AggregateAuthPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T: PageInfoPromise>() => T;
  edges: <T: FragmentableArray<UserEdge>>() => T;
  aggregate: <T: AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T: PageInfoSubscription>() => T;
  edges: <T: Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T: AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T: UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T: UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "AuthPayload",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma: ClientConstructor<PrismaInterface> = makePrismaClientClass(
  { typeDefs, models, endpoint: `http://localhost:4466` }
);

export const prisma = new Prisma();
