import gql from 'graphql-tag';
import * as Urql from '@urql/vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Club = {
  __typename?: 'Club';
  _count: ClubCount;
  clubAdmin?: Maybe<Array<ClubAdmin>>;
  clubEvent?: Maybe<Array<ClubEvent>>;
  clubInfoChangeRequest?: Maybe<Array<ClubInfoChangeRequest>>;
  clubMember?: Maybe<Array<ClubMember>>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  label: Scalars['String'];
  logo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  status: ClubStatusEnum;
  thumbnail?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type ClubAdmin = {
  __typename?: 'ClubAdmin';
  _count: ClubAdminCount;
  club: Club;
  clubAdminStatus: ClubAdminStatusEnum;
  clubId: Scalars['String'];
  clubRequest?: Maybe<Array<ClubInfoChangeRequest>>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  role: ClubAdminRoleEnum;
  roleLabel: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type ClubAdminCount = {
  __typename?: 'ClubAdminCount';
  clubRequest: Scalars['Int'];
};

export type ClubAdminCreateManyClubInput = {
  clubAdminStatus?: InputMaybe<ClubAdminStatusEnum>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  role: ClubAdminRoleEnum;
  roleLabel: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type ClubAdminCreateManyClubInputEnvelope = {
  data: Array<ClubAdminCreateManyClubInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubAdminCreateManyUserInput = {
  clubAdminStatus?: InputMaybe<ClubAdminStatusEnum>;
  clubId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  role: ClubAdminRoleEnum;
  roleLabel: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubAdminCreateManyUserInputEnvelope = {
  data: Array<ClubAdminCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubAdminCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubAdminWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubAdminCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubAdminCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubAdminCreateManyClubInputEnvelope>;
};

export type ClubAdminCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ClubAdminWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubAdminCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ClubAdminCreateWithoutUserInput>>;
  createMany?: InputMaybe<ClubAdminCreateManyUserInputEnvelope>;
};

export type ClubAdminCreateNestedOneWithoutClubRequestInput = {
  connect?: InputMaybe<ClubAdminWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubAdminCreateOrConnectWithoutClubRequestInput>;
  create?: InputMaybe<ClubAdminCreateWithoutClubRequestInput>;
};

export type ClubAdminCreateOrConnectWithoutClubInput = {
  create: ClubAdminCreateWithoutClubInput;
  where: ClubAdminWhereUniqueInput;
};

export type ClubAdminCreateOrConnectWithoutClubRequestInput = {
  create: ClubAdminCreateWithoutClubRequestInput;
  where: ClubAdminWhereUniqueInput;
};

export type ClubAdminCreateOrConnectWithoutUserInput = {
  create: ClubAdminCreateWithoutUserInput;
  where: ClubAdminWhereUniqueInput;
};

export type ClubAdminCreateWithoutClubInput = {
  clubAdminStatus?: InputMaybe<ClubAdminStatusEnum>;
  clubRequest?: InputMaybe<ClubInfoChangeRequestCreateNestedManyWithoutRequesterInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  role: ClubAdminRoleEnum;
  roleLabel: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutClubAdminInput;
};

export type ClubAdminCreateWithoutClubRequestInput = {
  club: ClubCreateNestedOneWithoutClubAdminInput;
  clubAdminStatus?: InputMaybe<ClubAdminStatusEnum>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  role: ClubAdminRoleEnum;
  roleLabel: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutClubAdminInput;
};

export type ClubAdminCreateWithoutUserInput = {
  club: ClubCreateNestedOneWithoutClubAdminInput;
  clubAdminStatus?: InputMaybe<ClubAdminStatusEnum>;
  clubRequest?: InputMaybe<ClubInfoChangeRequestCreateNestedManyWithoutRequesterInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  role: ClubAdminRoleEnum;
  roleLabel: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubAdminListRelationFilter = {
  every?: InputMaybe<ClubAdminWhereInput>;
  none?: InputMaybe<ClubAdminWhereInput>;
  some?: InputMaybe<ClubAdminWhereInput>;
};

export type ClubAdminOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum ClubAdminOrderByRelevanceFieldEnum {
  ClubId = 'clubId',
  Id = 'id',
  RoleLabel = 'roleLabel',
  UserId = 'userId'
}

export type ClubAdminOrderByRelevanceInput = {
  fields: Array<ClubAdminOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type ClubAdminOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<ClubAdminOrderByRelevanceInput>;
  club?: InputMaybe<ClubOrderByWithRelationAndSearchRelevanceInput>;
  clubAdminStatus?: InputMaybe<SortOrder>;
  clubId?: InputMaybe<SortOrder>;
  clubRequest?: InputMaybe<ClubInfoChangeRequestOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  roleLabel?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrder>;
};

export type ClubAdminRelationFilter = {
  is?: InputMaybe<ClubAdminWhereInput>;
  isNot?: InputMaybe<ClubAdminWhereInput>;
};

export enum ClubAdminRoleEnum {
  AssistantSecretary = 'ASSISTANT_SECRETARY',
  AssistantTreasurer = 'ASSISTANT_TREASURER',
  Commitee = 'COMMITEE',
  President = 'PRESIDENT',
  Secretary = 'SECRETARY',
  Treasurer = 'TREASURER',
  VicePresident = 'VICE_PRESIDENT'
}

export enum ClubAdminScalarFieldEnum {
  ClubAdminStatus = 'clubAdminStatus',
  ClubId = 'clubId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Role = 'role',
  RoleLabel = 'roleLabel',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type ClubAdminScalarWhereInput = {
  AND?: InputMaybe<Array<ClubAdminScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClubAdminScalarWhereInput>>;
  OR?: InputMaybe<Array<ClubAdminScalarWhereInput>>;
  clubAdminStatus?: InputMaybe<EnumClubAdminStatusEnumFilter>;
  clubId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumClubAdminRoleEnumFilter>;
  roleLabel?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum ClubAdminStatusEnum {
  Active = 'ACTIVE',
  InReview = 'IN_REVIEW',
  Retired = 'RETIRED'
}

export type ClubAdminUpdateManyMutationInput = {
  clubAdminStatus?: InputMaybe<EnumClubAdminStatusEnumFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumClubAdminRoleEnumFieldUpdateOperationsInput>;
  roleLabel?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubAdminUpdateManyWithWhereWithoutClubInput = {
  data: ClubAdminUpdateManyMutationInput;
  where: ClubAdminScalarWhereInput;
};

export type ClubAdminUpdateManyWithWhereWithoutUserInput = {
  data: ClubAdminUpdateManyMutationInput;
  where: ClubAdminScalarWhereInput;
};

export type ClubAdminUpdateManyWithoutClubNestedInput = {
  connect?: InputMaybe<Array<ClubAdminWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubAdminCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubAdminCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubAdminCreateManyClubInputEnvelope>;
  delete?: InputMaybe<Array<ClubAdminWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubAdminScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubAdminWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubAdminWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubAdminUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<ClubAdminUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<ClubAdminUpsertWithWhereUniqueWithoutClubInput>>;
};

export type ClubAdminUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ClubAdminWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubAdminCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ClubAdminCreateWithoutUserInput>>;
  createMany?: InputMaybe<ClubAdminCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ClubAdminWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubAdminScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubAdminWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubAdminWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubAdminUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ClubAdminUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ClubAdminUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ClubAdminUpdateOneRequiredWithoutClubRequestNestedInput = {
  connect?: InputMaybe<ClubAdminWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubAdminCreateOrConnectWithoutClubRequestInput>;
  create?: InputMaybe<ClubAdminCreateWithoutClubRequestInput>;
  update?: InputMaybe<ClubAdminUpdateWithoutClubRequestInput>;
  upsert?: InputMaybe<ClubAdminUpsertWithoutClubRequestInput>;
};

export type ClubAdminUpdateWithWhereUniqueWithoutClubInput = {
  data: ClubAdminUpdateWithoutClubInput;
  where: ClubAdminWhereUniqueInput;
};

export type ClubAdminUpdateWithWhereUniqueWithoutUserInput = {
  data: ClubAdminUpdateWithoutUserInput;
  where: ClubAdminWhereUniqueInput;
};

export type ClubAdminUpdateWithoutClubInput = {
  clubAdminStatus?: InputMaybe<EnumClubAdminStatusEnumFieldUpdateOperationsInput>;
  clubRequest?: InputMaybe<ClubInfoChangeRequestUpdateManyWithoutRequesterNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumClubAdminRoleEnumFieldUpdateOperationsInput>;
  roleLabel?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutClubAdminNestedInput>;
};

export type ClubAdminUpdateWithoutClubRequestInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubAdminNestedInput>;
  clubAdminStatus?: InputMaybe<EnumClubAdminStatusEnumFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumClubAdminRoleEnumFieldUpdateOperationsInput>;
  roleLabel?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutClubAdminNestedInput>;
};

export type ClubAdminUpdateWithoutUserInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubAdminNestedInput>;
  clubAdminStatus?: InputMaybe<EnumClubAdminStatusEnumFieldUpdateOperationsInput>;
  clubRequest?: InputMaybe<ClubInfoChangeRequestUpdateManyWithoutRequesterNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumClubAdminRoleEnumFieldUpdateOperationsInput>;
  roleLabel?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubAdminUpsertWithWhereUniqueWithoutClubInput = {
  create: ClubAdminCreateWithoutClubInput;
  update: ClubAdminUpdateWithoutClubInput;
  where: ClubAdminWhereUniqueInput;
};

export type ClubAdminUpsertWithWhereUniqueWithoutUserInput = {
  create: ClubAdminCreateWithoutUserInput;
  update: ClubAdminUpdateWithoutUserInput;
  where: ClubAdminWhereUniqueInput;
};

export type ClubAdminUpsertWithoutClubRequestInput = {
  create: ClubAdminCreateWithoutClubRequestInput;
  update: ClubAdminUpdateWithoutClubRequestInput;
};

export type ClubAdminUserIdClubIdCompoundUniqueInput = {
  clubId: Scalars['String'];
  userId: Scalars['String'];
};

export type ClubAdminWhereInput = {
  AND?: InputMaybe<Array<ClubAdminWhereInput>>;
  NOT?: InputMaybe<Array<ClubAdminWhereInput>>;
  OR?: InputMaybe<Array<ClubAdminWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubAdminStatus?: InputMaybe<EnumClubAdminStatusEnumFilter>;
  clubId?: InputMaybe<StringFilter>;
  clubRequest?: InputMaybe<ClubInfoChangeRequestListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumClubAdminRoleEnumFilter>;
  roleLabel?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ClubAdminWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  userId_clubId?: InputMaybe<ClubAdminUserIdClubIdCompoundUniqueInput>;
};

export type ClubCount = {
  __typename?: 'ClubCount';
  clubAdmin: Scalars['Int'];
  clubEvent: Scalars['Int'];
  clubInfoChangeRequest: Scalars['Int'];
  clubMember: Scalars['Int'];
};

export type ClubCreateInput = {
  clubAdmin?: InputMaybe<ClubAdminCreateNestedManyWithoutClubInput>;
  clubEvent?: InputMaybe<ClubEventCreateNestedManyWithoutClubInput>;
  clubInfoChangeRequest?: InputMaybe<ClubInfoChangeRequestCreateNestedManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
  logo?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  status?: InputMaybe<ClubStatusEnum>;
  thumbnail?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCreateNestedOneWithoutClubAdminInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubAdminInput>;
  create?: InputMaybe<ClubCreateWithoutClubAdminInput>;
};

export type ClubCreateNestedOneWithoutClubEventInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubEventInput>;
  create?: InputMaybe<ClubCreateWithoutClubEventInput>;
};

export type ClubCreateNestedOneWithoutClubInfoChangeRequestInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubInfoChangeRequestInput>;
  create?: InputMaybe<ClubCreateWithoutClubInfoChangeRequestInput>;
};

export type ClubCreateNestedOneWithoutClubMemberInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubMemberInput>;
  create?: InputMaybe<ClubCreateWithoutClubMemberInput>;
};

export type ClubCreateOrConnectWithoutClubAdminInput = {
  create: ClubCreateWithoutClubAdminInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutClubEventInput = {
  create: ClubCreateWithoutClubEventInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutClubInfoChangeRequestInput = {
  create: ClubCreateWithoutClubInfoChangeRequestInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutClubMemberInput = {
  create: ClubCreateWithoutClubMemberInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateWithoutClubAdminInput = {
  clubEvent?: InputMaybe<ClubEventCreateNestedManyWithoutClubInput>;
  clubInfoChangeRequest?: InputMaybe<ClubInfoChangeRequestCreateNestedManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
  logo?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  status?: InputMaybe<ClubStatusEnum>;
  thumbnail?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCreateWithoutClubEventInput = {
  clubAdmin?: InputMaybe<ClubAdminCreateNestedManyWithoutClubInput>;
  clubInfoChangeRequest?: InputMaybe<ClubInfoChangeRequestCreateNestedManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
  logo?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  status?: InputMaybe<ClubStatusEnum>;
  thumbnail?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCreateWithoutClubInfoChangeRequestInput = {
  clubAdmin?: InputMaybe<ClubAdminCreateNestedManyWithoutClubInput>;
  clubEvent?: InputMaybe<ClubEventCreateNestedManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
  logo?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  status?: InputMaybe<ClubStatusEnum>;
  thumbnail?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCreateWithoutClubMemberInput = {
  clubAdmin?: InputMaybe<ClubAdminCreateNestedManyWithoutClubInput>;
  clubEvent?: InputMaybe<ClubEventCreateNestedManyWithoutClubInput>;
  clubInfoChangeRequest?: InputMaybe<ClubInfoChangeRequestCreateNestedManyWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
  logo?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  status?: InputMaybe<ClubStatusEnum>;
  thumbnail?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubEvent = {
  __typename?: 'ClubEvent';
  _count: ClubEventCount;
  changed: Scalars['Boolean'];
  club: Club;
  clubEventMember?: Maybe<Array<ClubEventMember>>;
  clubId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  endAt: Scalars['DateTime'];
  eventEndJobId?: Maybe<Scalars['String']>;
  eventStartJobId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  memberOnly: Scalars['Boolean'];
  name: Scalars['String'];
  requestJobId?: Maybe<Scalars['String']>;
  startAt: Scalars['DateTime'];
  status: ClubEventStatusEnum;
  thumbnail?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type ClubEventCount = {
  __typename?: 'ClubEventCount';
  clubEventMember: Scalars['Int'];
};

export type ClubEventCreateInput = {
  changed?: InputMaybe<Scalars['Boolean']>;
  club: ClubCreateNestedOneWithoutClubEventInput;
  clubEventMember?: InputMaybe<ClubEventMemberCreateNestedManyWithoutEventInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  endAt: Scalars['DateTime'];
  eventEndJobId?: InputMaybe<Scalars['String']>;
  eventStartJobId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  memberOnly?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  requestJobId?: InputMaybe<Scalars['String']>;
  startAt: Scalars['DateTime'];
  status?: InputMaybe<ClubEventStatusEnum>;
  thumbnail?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubEventCreateManyClubInput = {
  changed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  endAt: Scalars['DateTime'];
  eventEndJobId?: InputMaybe<Scalars['String']>;
  eventStartJobId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  memberOnly?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  requestJobId?: InputMaybe<Scalars['String']>;
  startAt: Scalars['DateTime'];
  status?: InputMaybe<ClubEventStatusEnum>;
  thumbnail?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubEventCreateManyClubInputEnvelope = {
  data: Array<ClubEventCreateManyClubInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubEventCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubEventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubEventCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubEventCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubEventCreateManyClubInputEnvelope>;
};

export type ClubEventCreateNestedOneWithoutClubEventMemberInput = {
  connect?: InputMaybe<ClubEventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubEventCreateOrConnectWithoutClubEventMemberInput>;
  create?: InputMaybe<ClubEventCreateWithoutClubEventMemberInput>;
};

export type ClubEventCreateOrConnectWithoutClubEventMemberInput = {
  create: ClubEventCreateWithoutClubEventMemberInput;
  where: ClubEventWhereUniqueInput;
};

export type ClubEventCreateOrConnectWithoutClubInput = {
  create: ClubEventCreateWithoutClubInput;
  where: ClubEventWhereUniqueInput;
};

export type ClubEventCreateWithoutClubEventMemberInput = {
  changed?: InputMaybe<Scalars['Boolean']>;
  club: ClubCreateNestedOneWithoutClubEventInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  endAt: Scalars['DateTime'];
  eventEndJobId?: InputMaybe<Scalars['String']>;
  eventStartJobId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  memberOnly?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  requestJobId?: InputMaybe<Scalars['String']>;
  startAt: Scalars['DateTime'];
  status?: InputMaybe<ClubEventStatusEnum>;
  thumbnail?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubEventCreateWithoutClubInput = {
  changed?: InputMaybe<Scalars['Boolean']>;
  clubEventMember?: InputMaybe<ClubEventMemberCreateNestedManyWithoutEventInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  endAt: Scalars['DateTime'];
  eventEndJobId?: InputMaybe<Scalars['String']>;
  eventStartJobId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  memberOnly?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  requestJobId?: InputMaybe<Scalars['String']>;
  startAt: Scalars['DateTime'];
  status?: InputMaybe<ClubEventStatusEnum>;
  thumbnail?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubEventListRelationFilter = {
  every?: InputMaybe<ClubEventWhereInput>;
  none?: InputMaybe<ClubEventWhereInput>;
  some?: InputMaybe<ClubEventWhereInput>;
};

export type ClubEventMember = {
  __typename?: 'ClubEventMember';
  attendance: ClubMemberEventAttendanceEnum;
  createdAt: Scalars['DateTime'];
  event: ClubEvent;
  eventId: Scalars['String'];
  id: Scalars['ID'];
  status: ClubMemberEventStatusEnum;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type ClubEventMemberCreateManyEventInput = {
  attendance?: InputMaybe<ClubMemberEventAttendanceEnum>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ClubMemberEventStatusEnum>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type ClubEventMemberCreateManyEventInputEnvelope = {
  data: Array<ClubEventMemberCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubEventMemberCreateManyUserInput = {
  attendance?: InputMaybe<ClubMemberEventAttendanceEnum>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ClubMemberEventStatusEnum>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubEventMemberCreateManyUserInputEnvelope = {
  data: Array<ClubEventMemberCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubEventMemberCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<ClubEventMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubEventMemberCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<ClubEventMemberCreateWithoutEventInput>>;
  createMany?: InputMaybe<ClubEventMemberCreateManyEventInputEnvelope>;
};

export type ClubEventMemberCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ClubEventMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubEventMemberCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ClubEventMemberCreateWithoutUserInput>>;
  createMany?: InputMaybe<ClubEventMemberCreateManyUserInputEnvelope>;
};

export type ClubEventMemberCreateOrConnectWithoutEventInput = {
  create: ClubEventMemberCreateWithoutEventInput;
  where: ClubEventMemberWhereUniqueInput;
};

export type ClubEventMemberCreateOrConnectWithoutUserInput = {
  create: ClubEventMemberCreateWithoutUserInput;
  where: ClubEventMemberWhereUniqueInput;
};

export type ClubEventMemberCreateWithoutEventInput = {
  attendance?: InputMaybe<ClubMemberEventAttendanceEnum>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ClubMemberEventStatusEnum>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutClubEventMemberInput;
};

export type ClubEventMemberCreateWithoutUserInput = {
  attendance?: InputMaybe<ClubMemberEventAttendanceEnum>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  event: ClubEventCreateNestedOneWithoutClubEventMemberInput;
  id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ClubMemberEventStatusEnum>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubEventMemberListRelationFilter = {
  every?: InputMaybe<ClubEventMemberWhereInput>;
  none?: InputMaybe<ClubEventMemberWhereInput>;
  some?: InputMaybe<ClubEventMemberWhereInput>;
};

export type ClubEventMemberOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum ClubEventMemberOrderByRelevanceFieldEnum {
  EventId = 'eventId',
  Id = 'id',
  UserId = 'userId'
}

export type ClubEventMemberOrderByRelevanceInput = {
  fields: Array<ClubEventMemberOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type ClubEventMemberOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<ClubEventMemberOrderByRelevanceInput>;
  attendance?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  event?: InputMaybe<ClubEventOrderByWithRelationAndSearchRelevanceInput>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum ClubEventMemberScalarFieldEnum {
  Attendance = 'attendance',
  CreatedAt = 'createdAt',
  EventId = 'eventId',
  Id = 'id',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type ClubEventMemberScalarWhereInput = {
  AND?: InputMaybe<Array<ClubEventMemberScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClubEventMemberScalarWhereInput>>;
  OR?: InputMaybe<Array<ClubEventMemberScalarWhereInput>>;
  attendance?: InputMaybe<EnumClubMemberEventAttendanceEnumFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  eventId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumClubMemberEventStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ClubEventMemberUpdateManyMutationInput = {
  attendance?: InputMaybe<EnumClubMemberEventAttendanceEnumFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumClubMemberEventStatusEnumFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubEventMemberUpdateManyWithWhereWithoutEventInput = {
  data: ClubEventMemberUpdateManyMutationInput;
  where: ClubEventMemberScalarWhereInput;
};

export type ClubEventMemberUpdateManyWithWhereWithoutUserInput = {
  data: ClubEventMemberUpdateManyMutationInput;
  where: ClubEventMemberScalarWhereInput;
};

export type ClubEventMemberUpdateManyWithoutEventNestedInput = {
  connect?: InputMaybe<Array<ClubEventMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubEventMemberCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<ClubEventMemberCreateWithoutEventInput>>;
  createMany?: InputMaybe<ClubEventMemberCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<ClubEventMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubEventMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubEventMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubEventMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubEventMemberUpdateWithWhereUniqueWithoutEventInput>>;
  updateMany?: InputMaybe<Array<ClubEventMemberUpdateManyWithWhereWithoutEventInput>>;
  upsert?: InputMaybe<Array<ClubEventMemberUpsertWithWhereUniqueWithoutEventInput>>;
};

export type ClubEventMemberUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ClubEventMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubEventMemberCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ClubEventMemberCreateWithoutUserInput>>;
  createMany?: InputMaybe<ClubEventMemberCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ClubEventMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubEventMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubEventMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubEventMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubEventMemberUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ClubEventMemberUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ClubEventMemberUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ClubEventMemberUpdateWithWhereUniqueWithoutEventInput = {
  data: ClubEventMemberUpdateWithoutEventInput;
  where: ClubEventMemberWhereUniqueInput;
};

export type ClubEventMemberUpdateWithWhereUniqueWithoutUserInput = {
  data: ClubEventMemberUpdateWithoutUserInput;
  where: ClubEventMemberWhereUniqueInput;
};

export type ClubEventMemberUpdateWithoutEventInput = {
  attendance?: InputMaybe<EnumClubMemberEventAttendanceEnumFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumClubMemberEventStatusEnumFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutClubEventMemberNestedInput>;
};

export type ClubEventMemberUpdateWithoutUserInput = {
  attendance?: InputMaybe<EnumClubMemberEventAttendanceEnumFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<ClubEventUpdateOneRequiredWithoutClubEventMemberNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumClubMemberEventStatusEnumFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubEventMemberUpsertWithWhereUniqueWithoutEventInput = {
  create: ClubEventMemberCreateWithoutEventInput;
  update: ClubEventMemberUpdateWithoutEventInput;
  where: ClubEventMemberWhereUniqueInput;
};

export type ClubEventMemberUpsertWithWhereUniqueWithoutUserInput = {
  create: ClubEventMemberCreateWithoutUserInput;
  update: ClubEventMemberUpdateWithoutUserInput;
  where: ClubEventMemberWhereUniqueInput;
};

export type ClubEventMemberUserIdEventIdCompoundUniqueInput = {
  eventId: Scalars['String'];
  userId: Scalars['String'];
};

export type ClubEventMemberWhereInput = {
  AND?: InputMaybe<Array<ClubEventMemberWhereInput>>;
  NOT?: InputMaybe<Array<ClubEventMemberWhereInput>>;
  OR?: InputMaybe<Array<ClubEventMemberWhereInput>>;
  attendance?: InputMaybe<EnumClubMemberEventAttendanceEnumFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<ClubEventRelationFilter>;
  eventId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumClubMemberEventStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ClubEventMemberWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  userId_eventId?: InputMaybe<ClubEventMemberUserIdEventIdCompoundUniqueInput>;
};

export type ClubEventOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum ClubEventOrderByRelevanceFieldEnum {
  ClubId = 'clubId',
  Description = 'description',
  EventEndJobId = 'eventEndJobId',
  EventStartJobId = 'eventStartJobId',
  Id = 'id',
  Name = 'name',
  RequestJobId = 'requestJobId',
  Thumbnail = 'thumbnail'
}

export type ClubEventOrderByRelevanceInput = {
  fields: Array<ClubEventOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type ClubEventOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<ClubEventOrderByRelevanceInput>;
  changed?: InputMaybe<SortOrder>;
  club?: InputMaybe<ClubOrderByWithRelationAndSearchRelevanceInput>;
  clubEventMember?: InputMaybe<ClubEventMemberOrderByRelationAggregateInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  endAt?: InputMaybe<SortOrder>;
  eventEndJobId?: InputMaybe<SortOrder>;
  eventStartJobId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  memberOnly?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  requestJobId?: InputMaybe<SortOrder>;
  startAt?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  thumbnail?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubEventRelationFilter = {
  is?: InputMaybe<ClubEventWhereInput>;
  isNot?: InputMaybe<ClubEventWhereInput>;
};

export enum ClubEventScalarFieldEnum {
  Changed = 'changed',
  ClubId = 'clubId',
  CreatedAt = 'createdAt',
  Description = 'description',
  EndAt = 'endAt',
  EventEndJobId = 'eventEndJobId',
  EventStartJobId = 'eventStartJobId',
  Id = 'id',
  MemberOnly = 'memberOnly',
  Name = 'name',
  RequestJobId = 'requestJobId',
  StartAt = 'startAt',
  Status = 'status',
  Thumbnail = 'thumbnail',
  UpdatedAt = 'updatedAt'
}

export type ClubEventScalarWhereInput = {
  AND?: InputMaybe<Array<ClubEventScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClubEventScalarWhereInput>>;
  OR?: InputMaybe<Array<ClubEventScalarWhereInput>>;
  changed?: InputMaybe<BoolFilter>;
  clubId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  endAt?: InputMaybe<DateTimeFilter>;
  eventEndJobId?: InputMaybe<StringNullableFilter>;
  eventStartJobId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  memberOnly?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  requestJobId?: InputMaybe<StringNullableFilter>;
  startAt?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumClubEventStatusEnumFilter>;
  thumbnail?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ClubEventUpdateInput = {
  changed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubEventNestedInput>;
  clubEventMember?: InputMaybe<ClubEventMemberUpdateManyWithoutEventNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventEndJobId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  eventStartJobId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  memberOnly?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  requestJobId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  startAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumClubEventStatusEnumFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubEventUpdateManyMutationInput = {
  changed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventEndJobId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  eventStartJobId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  memberOnly?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  requestJobId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  startAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumClubEventStatusEnumFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubEventUpdateManyWithWhereWithoutClubInput = {
  data: ClubEventUpdateManyMutationInput;
  where: ClubEventScalarWhereInput;
};

export type ClubEventUpdateManyWithoutClubNestedInput = {
  connect?: InputMaybe<Array<ClubEventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubEventCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubEventCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubEventCreateManyClubInputEnvelope>;
  delete?: InputMaybe<Array<ClubEventWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubEventScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubEventWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubEventWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubEventUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<ClubEventUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<ClubEventUpsertWithWhereUniqueWithoutClubInput>>;
};

export type ClubEventUpdateOneRequiredWithoutClubEventMemberNestedInput = {
  connect?: InputMaybe<ClubEventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubEventCreateOrConnectWithoutClubEventMemberInput>;
  create?: InputMaybe<ClubEventCreateWithoutClubEventMemberInput>;
  update?: InputMaybe<ClubEventUpdateWithoutClubEventMemberInput>;
  upsert?: InputMaybe<ClubEventUpsertWithoutClubEventMemberInput>;
};

export type ClubEventUpdateWithWhereUniqueWithoutClubInput = {
  data: ClubEventUpdateWithoutClubInput;
  where: ClubEventWhereUniqueInput;
};

export type ClubEventUpdateWithoutClubEventMemberInput = {
  changed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubEventNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventEndJobId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  eventStartJobId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  memberOnly?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  requestJobId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  startAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumClubEventStatusEnumFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubEventUpdateWithoutClubInput = {
  changed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  clubEventMember?: InputMaybe<ClubEventMemberUpdateManyWithoutEventNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventEndJobId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  eventStartJobId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  memberOnly?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  requestJobId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  startAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumClubEventStatusEnumFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubEventUpsertWithWhereUniqueWithoutClubInput = {
  create: ClubEventCreateWithoutClubInput;
  update: ClubEventUpdateWithoutClubInput;
  where: ClubEventWhereUniqueInput;
};

export type ClubEventUpsertWithoutClubEventMemberInput = {
  create: ClubEventCreateWithoutClubEventMemberInput;
  update: ClubEventUpdateWithoutClubEventMemberInput;
};

export type ClubEventWhereInput = {
  AND?: InputMaybe<Array<ClubEventWhereInput>>;
  NOT?: InputMaybe<Array<ClubEventWhereInput>>;
  OR?: InputMaybe<Array<ClubEventWhereInput>>;
  changed?: InputMaybe<BoolFilter>;
  club?: InputMaybe<ClubRelationFilter>;
  clubEventMember?: InputMaybe<ClubEventMemberListRelationFilter>;
  clubId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  endAt?: InputMaybe<DateTimeFilter>;
  eventEndJobId?: InputMaybe<StringNullableFilter>;
  eventStartJobId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  memberOnly?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  requestJobId?: InputMaybe<StringNullableFilter>;
  startAt?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumClubEventStatusEnumFilter>;
  thumbnail?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ClubEventWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ClubInfoChangeAdminRequest = {
  __typename?: 'ClubInfoChangeAdminRequest';
  club: ClubInfoChangeRequest;
  clubChangeRequestId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  label: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type ClubInfoChangeAdminRequestCreateManyClubInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  label: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type ClubInfoChangeAdminRequestCreateManyClubInputEnvelope = {
  data: Array<ClubInfoChangeAdminRequestCreateManyClubInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubInfoChangeAdminRequestCreateManyUserInput = {
  clubChangeRequestId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  label: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubInfoChangeAdminRequestCreateManyUserInputEnvelope = {
  data: Array<ClubInfoChangeAdminRequestCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubInfoChangeAdminRequestCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubInfoChangeAdminRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubInfoChangeAdminRequestCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubInfoChangeAdminRequestCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubInfoChangeAdminRequestCreateManyClubInputEnvelope>;
};

export type ClubInfoChangeAdminRequestCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ClubInfoChangeAdminRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubInfoChangeAdminRequestCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ClubInfoChangeAdminRequestCreateWithoutUserInput>>;
  createMany?: InputMaybe<ClubInfoChangeAdminRequestCreateManyUserInputEnvelope>;
};

export type ClubInfoChangeAdminRequestCreateOrConnectWithoutClubInput = {
  create: ClubInfoChangeAdminRequestCreateWithoutClubInput;
  where: ClubInfoChangeAdminRequestWhereUniqueInput;
};

export type ClubInfoChangeAdminRequestCreateOrConnectWithoutUserInput = {
  create: ClubInfoChangeAdminRequestCreateWithoutUserInput;
  where: ClubInfoChangeAdminRequestWhereUniqueInput;
};

export type ClubInfoChangeAdminRequestCreateWithoutClubInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  label: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutClubInfoChangeAdminRequestInput;
};

export type ClubInfoChangeAdminRequestCreateWithoutUserInput = {
  club: ClubInfoChangeRequestCreateNestedOneWithoutClubInfoChangeAdminRequestInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  label: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubInfoChangeAdminRequestListRelationFilter = {
  every?: InputMaybe<ClubInfoChangeAdminRequestWhereInput>;
  none?: InputMaybe<ClubInfoChangeAdminRequestWhereInput>;
  some?: InputMaybe<ClubInfoChangeAdminRequestWhereInput>;
};

export type ClubInfoChangeAdminRequestOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ClubInfoChangeAdminRequestScalarWhereInput = {
  AND?: InputMaybe<Array<ClubInfoChangeAdminRequestScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClubInfoChangeAdminRequestScalarWhereInput>>;
  OR?: InputMaybe<Array<ClubInfoChangeAdminRequestScalarWhereInput>>;
  clubChangeRequestId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ClubInfoChangeAdminRequestUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubInfoChangeAdminRequestUpdateManyWithWhereWithoutClubInput = {
  data: ClubInfoChangeAdminRequestUpdateManyMutationInput;
  where: ClubInfoChangeAdminRequestScalarWhereInput;
};

export type ClubInfoChangeAdminRequestUpdateManyWithWhereWithoutUserInput = {
  data: ClubInfoChangeAdminRequestUpdateManyMutationInput;
  where: ClubInfoChangeAdminRequestScalarWhereInput;
};

export type ClubInfoChangeAdminRequestUpdateManyWithoutClubNestedInput = {
  connect?: InputMaybe<Array<ClubInfoChangeAdminRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubInfoChangeAdminRequestCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubInfoChangeAdminRequestCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubInfoChangeAdminRequestCreateManyClubInputEnvelope>;
  delete?: InputMaybe<Array<ClubInfoChangeAdminRequestWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubInfoChangeAdminRequestScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubInfoChangeAdminRequestWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubInfoChangeAdminRequestWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubInfoChangeAdminRequestUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<ClubInfoChangeAdminRequestUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<ClubInfoChangeAdminRequestUpsertWithWhereUniqueWithoutClubInput>>;
};

export type ClubInfoChangeAdminRequestUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ClubInfoChangeAdminRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubInfoChangeAdminRequestCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ClubInfoChangeAdminRequestCreateWithoutUserInput>>;
  createMany?: InputMaybe<ClubInfoChangeAdminRequestCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ClubInfoChangeAdminRequestWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubInfoChangeAdminRequestScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubInfoChangeAdminRequestWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubInfoChangeAdminRequestWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubInfoChangeAdminRequestUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ClubInfoChangeAdminRequestUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ClubInfoChangeAdminRequestUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ClubInfoChangeAdminRequestUpdateWithWhereUniqueWithoutClubInput = {
  data: ClubInfoChangeAdminRequestUpdateWithoutClubInput;
  where: ClubInfoChangeAdminRequestWhereUniqueInput;
};

export type ClubInfoChangeAdminRequestUpdateWithWhereUniqueWithoutUserInput = {
  data: ClubInfoChangeAdminRequestUpdateWithoutUserInput;
  where: ClubInfoChangeAdminRequestWhereUniqueInput;
};

export type ClubInfoChangeAdminRequestUpdateWithoutClubInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutClubInfoChangeAdminRequestNestedInput>;
};

export type ClubInfoChangeAdminRequestUpdateWithoutUserInput = {
  club?: InputMaybe<ClubInfoChangeRequestUpdateOneRequiredWithoutClubInfoChangeAdminRequestNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubInfoChangeAdminRequestUpsertWithWhereUniqueWithoutClubInput = {
  create: ClubInfoChangeAdminRequestCreateWithoutClubInput;
  update: ClubInfoChangeAdminRequestUpdateWithoutClubInput;
  where: ClubInfoChangeAdminRequestWhereUniqueInput;
};

export type ClubInfoChangeAdminRequestUpsertWithWhereUniqueWithoutUserInput = {
  create: ClubInfoChangeAdminRequestCreateWithoutUserInput;
  update: ClubInfoChangeAdminRequestUpdateWithoutUserInput;
  where: ClubInfoChangeAdminRequestWhereUniqueInput;
};

export type ClubInfoChangeAdminRequestWhereInput = {
  AND?: InputMaybe<Array<ClubInfoChangeAdminRequestWhereInput>>;
  NOT?: InputMaybe<Array<ClubInfoChangeAdminRequestWhereInput>>;
  OR?: InputMaybe<Array<ClubInfoChangeAdminRequestWhereInput>>;
  club?: InputMaybe<ClubInfoChangeRequestRelationFilter>;
  clubChangeRequestId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ClubInfoChangeAdminRequestWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ClubInfoChangeRequest = {
  __typename?: 'ClubInfoChangeRequest';
  _count: ClubInfoChangeRequestCount;
  changeDescription: Scalars['String'];
  changeStatus: RequestStatusEnum;
  club: Club;
  clubId: Scalars['String'];
  clubInfoChangeAdminRequest?: Maybe<Array<ClubInfoChangeAdminRequest>>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  expireDate: Scalars['DateTime'];
  id: Scalars['ID'];
  jobId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  requester: ClubAdmin;
  requesterId: Scalars['String'];
  status: RequestStatusEnum;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ClubInfoChangeRequestCount = {
  __typename?: 'ClubInfoChangeRequestCount';
  clubInfoChangeAdminRequest: Scalars['Int'];
};

export type ClubInfoChangeRequestCreateInput = {
  changeDescription: Scalars['String'];
  changeStatus: RequestStatusEnum;
  club: ClubCreateNestedOneWithoutClubInfoChangeRequestInput;
  clubInfoChangeAdminRequest?: InputMaybe<ClubInfoChangeAdminRequestCreateNestedManyWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  expireDate: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  jobId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  requester: ClubAdminCreateNestedOneWithoutClubRequestInput;
  status: RequestStatusEnum;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubInfoChangeRequestCreateManyClubInput = {
  changeDescription: Scalars['String'];
  changeStatus: RequestStatusEnum;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  expireDate: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  jobId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  requesterId: Scalars['String'];
  status: RequestStatusEnum;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubInfoChangeRequestCreateManyClubInputEnvelope = {
  data: Array<ClubInfoChangeRequestCreateManyClubInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubInfoChangeRequestCreateManyRequesterInput = {
  changeDescription: Scalars['String'];
  changeStatus: RequestStatusEnum;
  clubId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  expireDate: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  jobId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  status: RequestStatusEnum;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubInfoChangeRequestCreateManyRequesterInputEnvelope = {
  data: Array<ClubInfoChangeRequestCreateManyRequesterInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubInfoChangeRequestCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubInfoChangeRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubInfoChangeRequestCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubInfoChangeRequestCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubInfoChangeRequestCreateManyClubInputEnvelope>;
};

export type ClubInfoChangeRequestCreateNestedManyWithoutRequesterInput = {
  connect?: InputMaybe<Array<ClubInfoChangeRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubInfoChangeRequestCreateOrConnectWithoutRequesterInput>>;
  create?: InputMaybe<Array<ClubInfoChangeRequestCreateWithoutRequesterInput>>;
  createMany?: InputMaybe<ClubInfoChangeRequestCreateManyRequesterInputEnvelope>;
};

export type ClubInfoChangeRequestCreateNestedOneWithoutClubInfoChangeAdminRequestInput = {
  connect?: InputMaybe<ClubInfoChangeRequestWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubInfoChangeRequestCreateOrConnectWithoutClubInfoChangeAdminRequestInput>;
  create?: InputMaybe<ClubInfoChangeRequestCreateWithoutClubInfoChangeAdminRequestInput>;
};

export type ClubInfoChangeRequestCreateOrConnectWithoutClubInfoChangeAdminRequestInput = {
  create: ClubInfoChangeRequestCreateWithoutClubInfoChangeAdminRequestInput;
  where: ClubInfoChangeRequestWhereUniqueInput;
};

export type ClubInfoChangeRequestCreateOrConnectWithoutClubInput = {
  create: ClubInfoChangeRequestCreateWithoutClubInput;
  where: ClubInfoChangeRequestWhereUniqueInput;
};

export type ClubInfoChangeRequestCreateOrConnectWithoutRequesterInput = {
  create: ClubInfoChangeRequestCreateWithoutRequesterInput;
  where: ClubInfoChangeRequestWhereUniqueInput;
};

export type ClubInfoChangeRequestCreateWithoutClubInfoChangeAdminRequestInput = {
  changeDescription: Scalars['String'];
  changeStatus: RequestStatusEnum;
  club: ClubCreateNestedOneWithoutClubInfoChangeRequestInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  expireDate: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  jobId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  requester: ClubAdminCreateNestedOneWithoutClubRequestInput;
  status: RequestStatusEnum;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubInfoChangeRequestCreateWithoutClubInput = {
  changeDescription: Scalars['String'];
  changeStatus: RequestStatusEnum;
  clubInfoChangeAdminRequest?: InputMaybe<ClubInfoChangeAdminRequestCreateNestedManyWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  expireDate: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  jobId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  requester: ClubAdminCreateNestedOneWithoutClubRequestInput;
  status: RequestStatusEnum;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubInfoChangeRequestCreateWithoutRequesterInput = {
  changeDescription: Scalars['String'];
  changeStatus: RequestStatusEnum;
  club: ClubCreateNestedOneWithoutClubInfoChangeRequestInput;
  clubInfoChangeAdminRequest?: InputMaybe<ClubInfoChangeAdminRequestCreateNestedManyWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  expireDate: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  jobId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  status: RequestStatusEnum;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubInfoChangeRequestListRelationFilter = {
  every?: InputMaybe<ClubInfoChangeRequestWhereInput>;
  none?: InputMaybe<ClubInfoChangeRequestWhereInput>;
  some?: InputMaybe<ClubInfoChangeRequestWhereInput>;
};

export type ClubInfoChangeRequestOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ClubInfoChangeRequestRelationFilter = {
  is?: InputMaybe<ClubInfoChangeRequestWhereInput>;
  isNot?: InputMaybe<ClubInfoChangeRequestWhereInput>;
};

export type ClubInfoChangeRequestScalarWhereInput = {
  AND?: InputMaybe<Array<ClubInfoChangeRequestScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClubInfoChangeRequestScalarWhereInput>>;
  OR?: InputMaybe<Array<ClubInfoChangeRequestScalarWhereInput>>;
  changeDescription?: InputMaybe<StringFilter>;
  changeStatus?: InputMaybe<EnumRequestStatusEnumFilter>;
  clubId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  expireDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  jobId?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  requesterId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumRequestStatusEnumFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ClubInfoChangeRequestUpdateManyMutationInput = {
  changeDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  changeStatus?: InputMaybe<EnumRequestStatusEnumFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  expireDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  jobId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumRequestStatusEnumFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubInfoChangeRequestUpdateManyWithWhereWithoutClubInput = {
  data: ClubInfoChangeRequestUpdateManyMutationInput;
  where: ClubInfoChangeRequestScalarWhereInput;
};

export type ClubInfoChangeRequestUpdateManyWithWhereWithoutRequesterInput = {
  data: ClubInfoChangeRequestUpdateManyMutationInput;
  where: ClubInfoChangeRequestScalarWhereInput;
};

export type ClubInfoChangeRequestUpdateManyWithoutClubNestedInput = {
  connect?: InputMaybe<Array<ClubInfoChangeRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubInfoChangeRequestCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubInfoChangeRequestCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubInfoChangeRequestCreateManyClubInputEnvelope>;
  delete?: InputMaybe<Array<ClubInfoChangeRequestWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubInfoChangeRequestScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubInfoChangeRequestWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubInfoChangeRequestWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubInfoChangeRequestUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<ClubInfoChangeRequestUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<ClubInfoChangeRequestUpsertWithWhereUniqueWithoutClubInput>>;
};

export type ClubInfoChangeRequestUpdateManyWithoutRequesterNestedInput = {
  connect?: InputMaybe<Array<ClubInfoChangeRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubInfoChangeRequestCreateOrConnectWithoutRequesterInput>>;
  create?: InputMaybe<Array<ClubInfoChangeRequestCreateWithoutRequesterInput>>;
  createMany?: InputMaybe<ClubInfoChangeRequestCreateManyRequesterInputEnvelope>;
  delete?: InputMaybe<Array<ClubInfoChangeRequestWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubInfoChangeRequestScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubInfoChangeRequestWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubInfoChangeRequestWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubInfoChangeRequestUpdateWithWhereUniqueWithoutRequesterInput>>;
  updateMany?: InputMaybe<Array<ClubInfoChangeRequestUpdateManyWithWhereWithoutRequesterInput>>;
  upsert?: InputMaybe<Array<ClubInfoChangeRequestUpsertWithWhereUniqueWithoutRequesterInput>>;
};

export type ClubInfoChangeRequestUpdateOneRequiredWithoutClubInfoChangeAdminRequestNestedInput = {
  connect?: InputMaybe<ClubInfoChangeRequestWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubInfoChangeRequestCreateOrConnectWithoutClubInfoChangeAdminRequestInput>;
  create?: InputMaybe<ClubInfoChangeRequestCreateWithoutClubInfoChangeAdminRequestInput>;
  update?: InputMaybe<ClubInfoChangeRequestUpdateWithoutClubInfoChangeAdminRequestInput>;
  upsert?: InputMaybe<ClubInfoChangeRequestUpsertWithoutClubInfoChangeAdminRequestInput>;
};

export type ClubInfoChangeRequestUpdateWithWhereUniqueWithoutClubInput = {
  data: ClubInfoChangeRequestUpdateWithoutClubInput;
  where: ClubInfoChangeRequestWhereUniqueInput;
};

export type ClubInfoChangeRequestUpdateWithWhereUniqueWithoutRequesterInput = {
  data: ClubInfoChangeRequestUpdateWithoutRequesterInput;
  where: ClubInfoChangeRequestWhereUniqueInput;
};

export type ClubInfoChangeRequestUpdateWithoutClubInfoChangeAdminRequestInput = {
  changeDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  changeStatus?: InputMaybe<EnumRequestStatusEnumFieldUpdateOperationsInput>;
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubInfoChangeRequestNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  expireDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  jobId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  requester?: InputMaybe<ClubAdminUpdateOneRequiredWithoutClubRequestNestedInput>;
  status?: InputMaybe<EnumRequestStatusEnumFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubInfoChangeRequestUpdateWithoutClubInput = {
  changeDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  changeStatus?: InputMaybe<EnumRequestStatusEnumFieldUpdateOperationsInput>;
  clubInfoChangeAdminRequest?: InputMaybe<ClubInfoChangeAdminRequestUpdateManyWithoutClubNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  expireDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  jobId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  requester?: InputMaybe<ClubAdminUpdateOneRequiredWithoutClubRequestNestedInput>;
  status?: InputMaybe<EnumRequestStatusEnumFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubInfoChangeRequestUpdateWithoutRequesterInput = {
  changeDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  changeStatus?: InputMaybe<EnumRequestStatusEnumFieldUpdateOperationsInput>;
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubInfoChangeRequestNestedInput>;
  clubInfoChangeAdminRequest?: InputMaybe<ClubInfoChangeAdminRequestUpdateManyWithoutClubNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  expireDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  jobId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumRequestStatusEnumFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubInfoChangeRequestUpsertWithWhereUniqueWithoutClubInput = {
  create: ClubInfoChangeRequestCreateWithoutClubInput;
  update: ClubInfoChangeRequestUpdateWithoutClubInput;
  where: ClubInfoChangeRequestWhereUniqueInput;
};

export type ClubInfoChangeRequestUpsertWithWhereUniqueWithoutRequesterInput = {
  create: ClubInfoChangeRequestCreateWithoutRequesterInput;
  update: ClubInfoChangeRequestUpdateWithoutRequesterInput;
  where: ClubInfoChangeRequestWhereUniqueInput;
};

export type ClubInfoChangeRequestUpsertWithoutClubInfoChangeAdminRequestInput = {
  create: ClubInfoChangeRequestCreateWithoutClubInfoChangeAdminRequestInput;
  update: ClubInfoChangeRequestUpdateWithoutClubInfoChangeAdminRequestInput;
};

export type ClubInfoChangeRequestWhereInput = {
  AND?: InputMaybe<Array<ClubInfoChangeRequestWhereInput>>;
  NOT?: InputMaybe<Array<ClubInfoChangeRequestWhereInput>>;
  OR?: InputMaybe<Array<ClubInfoChangeRequestWhereInput>>;
  changeDescription?: InputMaybe<StringFilter>;
  changeStatus?: InputMaybe<EnumRequestStatusEnumFilter>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<StringFilter>;
  clubInfoChangeAdminRequest?: InputMaybe<ClubInfoChangeAdminRequestListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  expireDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  jobId?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  requester?: InputMaybe<ClubAdminRelationFilter>;
  requesterId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumRequestStatusEnumFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ClubInfoChangeRequestWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ClubMember = {
  __typename?: 'ClubMember';
  club: Club;
  clubId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isAdmin: Scalars['Boolean'];
  status: ClubMemberStatusEnum;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type ClubMemberCreateManyClubInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  status: ClubMemberStatusEnum;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type ClubMemberCreateManyClubInputEnvelope = {
  data: Array<ClubMemberCreateManyClubInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubMemberCreateManyUserInput = {
  clubId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  status: ClubMemberStatusEnum;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubMemberCreateManyUserInputEnvelope = {
  data: Array<ClubMemberCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubMemberCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubMemberCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubMemberCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubMemberCreateManyClubInputEnvelope>;
};

export type ClubMemberCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubMemberCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ClubMemberCreateWithoutUserInput>>;
  createMany?: InputMaybe<ClubMemberCreateManyUserInputEnvelope>;
};

export type ClubMemberCreateOrConnectWithoutClubInput = {
  create: ClubMemberCreateWithoutClubInput;
  where: ClubMemberWhereUniqueInput;
};

export type ClubMemberCreateOrConnectWithoutUserInput = {
  create: ClubMemberCreateWithoutUserInput;
  where: ClubMemberWhereUniqueInput;
};

export type ClubMemberCreateWithoutClubInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  status: ClubMemberStatusEnum;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutClubMemberInput;
};

export type ClubMemberCreateWithoutUserInput = {
  club: ClubCreateNestedOneWithoutClubMemberInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  status: ClubMemberStatusEnum;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export enum ClubMemberEventAttendanceEnum {
  Absent = 'ABSENT',
  Leave = 'LEAVE',
  Present = 'PRESENT'
}

export enum ClubMemberEventStatusEnum {
  Joined = 'JOINED',
  Left = 'LEFT'
}

export type ClubMemberListRelationFilter = {
  every?: InputMaybe<ClubMemberWhereInput>;
  none?: InputMaybe<ClubMemberWhereInput>;
  some?: InputMaybe<ClubMemberWhereInput>;
};

export type ClubMemberOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum ClubMemberOrderByRelevanceFieldEnum {
  ClubId = 'clubId',
  Id = 'id',
  UserId = 'userId'
}

export type ClubMemberOrderByRelevanceInput = {
  fields: Array<ClubMemberOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type ClubMemberOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<ClubMemberOrderByRelevanceInput>;
  club?: InputMaybe<ClubOrderByWithRelationAndSearchRelevanceInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isAdmin?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum ClubMemberScalarFieldEnum {
  ClubId = 'clubId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  IsAdmin = 'isAdmin',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type ClubMemberScalarWhereInput = {
  AND?: InputMaybe<Array<ClubMemberScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClubMemberScalarWhereInput>>;
  OR?: InputMaybe<Array<ClubMemberScalarWhereInput>>;
  clubId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  isAdmin?: InputMaybe<BoolFilter>;
  status?: InputMaybe<EnumClubMemberStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum ClubMemberStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Left = 'LEFT',
  Premium = 'PREMIUM'
}

export type ClubMemberUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumClubMemberStatusEnumFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubMemberUpdateManyWithWhereWithoutClubInput = {
  data: ClubMemberUpdateManyMutationInput;
  where: ClubMemberScalarWhereInput;
};

export type ClubMemberUpdateManyWithWhereWithoutUserInput = {
  data: ClubMemberUpdateManyMutationInput;
  where: ClubMemberScalarWhereInput;
};

export type ClubMemberUpdateManyWithoutClubNestedInput = {
  connect?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubMemberCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubMemberCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubMemberCreateManyClubInputEnvelope>;
  delete?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubMemberUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<ClubMemberUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<ClubMemberUpsertWithWhereUniqueWithoutClubInput>>;
};

export type ClubMemberUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubMemberCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ClubMemberCreateWithoutUserInput>>;
  createMany?: InputMaybe<ClubMemberCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubMemberUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ClubMemberUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ClubMemberUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ClubMemberUpdateWithWhereUniqueWithoutClubInput = {
  data: ClubMemberUpdateWithoutClubInput;
  where: ClubMemberWhereUniqueInput;
};

export type ClubMemberUpdateWithWhereUniqueWithoutUserInput = {
  data: ClubMemberUpdateWithoutUserInput;
  where: ClubMemberWhereUniqueInput;
};

export type ClubMemberUpdateWithoutClubInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumClubMemberStatusEnumFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutClubMemberNestedInput>;
};

export type ClubMemberUpdateWithoutUserInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubMemberNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumClubMemberStatusEnumFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubMemberUpsertWithWhereUniqueWithoutClubInput = {
  create: ClubMemberCreateWithoutClubInput;
  update: ClubMemberUpdateWithoutClubInput;
  where: ClubMemberWhereUniqueInput;
};

export type ClubMemberUpsertWithWhereUniqueWithoutUserInput = {
  create: ClubMemberCreateWithoutUserInput;
  update: ClubMemberUpdateWithoutUserInput;
  where: ClubMemberWhereUniqueInput;
};

export type ClubMemberUserIdClubIdCompoundUniqueInput = {
  clubId: Scalars['String'];
  userId: Scalars['String'];
};

export type ClubMemberWhereInput = {
  AND?: InputMaybe<Array<ClubMemberWhereInput>>;
  NOT?: InputMaybe<Array<ClubMemberWhereInput>>;
  OR?: InputMaybe<Array<ClubMemberWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  isAdmin?: InputMaybe<BoolFilter>;
  status?: InputMaybe<EnumClubMemberStatusEnumFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ClubMemberWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  userId_clubId?: InputMaybe<ClubMemberUserIdClubIdCompoundUniqueInput>;
};

export enum ClubOrderByRelevanceFieldEnum {
  Description = 'description',
  Id = 'id',
  Label = 'label',
  Logo = 'logo',
  Name = 'name',
  Thumbnail = 'thumbnail'
}

export type ClubOrderByRelevanceInput = {
  fields: Array<ClubOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type ClubOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<ClubOrderByRelevanceInput>;
  clubAdmin?: InputMaybe<ClubAdminOrderByRelationAggregateInput>;
  clubEvent?: InputMaybe<ClubEventOrderByRelationAggregateInput>;
  clubInfoChangeRequest?: InputMaybe<ClubInfoChangeRequestOrderByRelationAggregateInput>;
  clubMember?: InputMaybe<ClubMemberOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  thumbnail?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubRelationFilter = {
  is?: InputMaybe<ClubWhereInput>;
  isNot?: InputMaybe<ClubWhereInput>;
};

export enum ClubScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Label = 'label',
  Logo = 'logo',
  Name = 'name',
  Status = 'status',
  Thumbnail = 'thumbnail',
  UpdatedAt = 'updatedAt'
}

export enum ClubStatusEnum {
  Active = 'ACTIVE',
  Deprecated = 'DEPRECATED',
  Inactive = 'INACTIVE',
  Invalidated = 'INVALIDATED'
}

export type ClubUpdateOneRequiredWithoutClubAdminNestedInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubAdminInput>;
  create?: InputMaybe<ClubCreateWithoutClubAdminInput>;
  update?: InputMaybe<ClubUpdateWithoutClubAdminInput>;
  upsert?: InputMaybe<ClubUpsertWithoutClubAdminInput>;
};

export type ClubUpdateOneRequiredWithoutClubEventNestedInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubEventInput>;
  create?: InputMaybe<ClubCreateWithoutClubEventInput>;
  update?: InputMaybe<ClubUpdateWithoutClubEventInput>;
  upsert?: InputMaybe<ClubUpsertWithoutClubEventInput>;
};

export type ClubUpdateOneRequiredWithoutClubInfoChangeRequestNestedInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubInfoChangeRequestInput>;
  create?: InputMaybe<ClubCreateWithoutClubInfoChangeRequestInput>;
  update?: InputMaybe<ClubUpdateWithoutClubInfoChangeRequestInput>;
  upsert?: InputMaybe<ClubUpsertWithoutClubInfoChangeRequestInput>;
};

export type ClubUpdateOneRequiredWithoutClubMemberNestedInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubMemberInput>;
  create?: InputMaybe<ClubCreateWithoutClubMemberInput>;
  update?: InputMaybe<ClubUpdateWithoutClubMemberInput>;
  upsert?: InputMaybe<ClubUpsertWithoutClubMemberInput>;
};

export type ClubUpdateWithoutClubAdminInput = {
  clubEvent?: InputMaybe<ClubEventUpdateManyWithoutClubNestedInput>;
  clubInfoChangeRequest?: InputMaybe<ClubInfoChangeRequestUpdateManyWithoutClubNestedInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutClubNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumClubStatusEnumFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateWithoutClubEventInput = {
  clubAdmin?: InputMaybe<ClubAdminUpdateManyWithoutClubNestedInput>;
  clubInfoChangeRequest?: InputMaybe<ClubInfoChangeRequestUpdateManyWithoutClubNestedInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutClubNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumClubStatusEnumFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateWithoutClubInfoChangeRequestInput = {
  clubAdmin?: InputMaybe<ClubAdminUpdateManyWithoutClubNestedInput>;
  clubEvent?: InputMaybe<ClubEventUpdateManyWithoutClubNestedInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutClubNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumClubStatusEnumFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateWithoutClubMemberInput = {
  clubAdmin?: InputMaybe<ClubAdminUpdateManyWithoutClubNestedInput>;
  clubEvent?: InputMaybe<ClubEventUpdateManyWithoutClubNestedInput>;
  clubInfoChangeRequest?: InputMaybe<ClubInfoChangeRequestUpdateManyWithoutClubNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumClubStatusEnumFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpsertWithoutClubAdminInput = {
  create: ClubCreateWithoutClubAdminInput;
  update: ClubUpdateWithoutClubAdminInput;
};

export type ClubUpsertWithoutClubEventInput = {
  create: ClubCreateWithoutClubEventInput;
  update: ClubUpdateWithoutClubEventInput;
};

export type ClubUpsertWithoutClubInfoChangeRequestInput = {
  create: ClubCreateWithoutClubInfoChangeRequestInput;
  update: ClubUpdateWithoutClubInfoChangeRequestInput;
};

export type ClubUpsertWithoutClubMemberInput = {
  create: ClubCreateWithoutClubMemberInput;
  update: ClubUpdateWithoutClubMemberInput;
};

export type ClubWhereInput = {
  AND?: InputMaybe<Array<ClubWhereInput>>;
  NOT?: InputMaybe<Array<ClubWhereInput>>;
  OR?: InputMaybe<Array<ClubWhereInput>>;
  clubAdmin?: InputMaybe<ClubAdminListRelationFilter>;
  clubEvent?: InputMaybe<ClubEventListRelationFilter>;
  clubInfoChangeRequest?: InputMaybe<ClubInfoChangeRequestListRelationFilter>;
  clubMember?: InputMaybe<ClubMemberListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  logo?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumClubStatusEnumFilter>;
  thumbnail?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ClubWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumClubAdminRoleEnumFieldUpdateOperationsInput = {
  set?: InputMaybe<ClubAdminRoleEnum>;
};

export type EnumClubAdminRoleEnumFilter = {
  equals?: InputMaybe<ClubAdminRoleEnum>;
  in?: InputMaybe<Array<ClubAdminRoleEnum>>;
  not?: InputMaybe<NestedEnumClubAdminRoleEnumFilter>;
  notIn?: InputMaybe<Array<ClubAdminRoleEnum>>;
};

export type EnumClubAdminStatusEnumFieldUpdateOperationsInput = {
  set?: InputMaybe<ClubAdminStatusEnum>;
};

export type EnumClubAdminStatusEnumFilter = {
  equals?: InputMaybe<ClubAdminStatusEnum>;
  in?: InputMaybe<Array<ClubAdminStatusEnum>>;
  not?: InputMaybe<NestedEnumClubAdminStatusEnumFilter>;
  notIn?: InputMaybe<Array<ClubAdminStatusEnum>>;
};

export type EnumClubEventStatusEnumFieldUpdateOperationsInput = {
  set?: InputMaybe<ClubEventStatusEnum>;
};

export type EnumClubEventStatusEnumFilter = {
  equals?: InputMaybe<ClubEventStatusEnum>;
  in?: InputMaybe<Array<ClubEventStatusEnum>>;
  not?: InputMaybe<NestedEnumClubEventStatusEnumFilter>;
  notIn?: InputMaybe<Array<ClubEventStatusEnum>>;
};

export type EnumClubMemberEventAttendanceEnumFieldUpdateOperationsInput = {
  set?: InputMaybe<ClubMemberEventAttendanceEnum>;
};

export type EnumClubMemberEventAttendanceEnumFilter = {
  equals?: InputMaybe<ClubMemberEventAttendanceEnum>;
  in?: InputMaybe<Array<ClubMemberEventAttendanceEnum>>;
  not?: InputMaybe<NestedEnumClubMemberEventAttendanceEnumFilter>;
  notIn?: InputMaybe<Array<ClubMemberEventAttendanceEnum>>;
};

export type EnumClubMemberEventStatusEnumFieldUpdateOperationsInput = {
  set?: InputMaybe<ClubMemberEventStatusEnum>;
};

export type EnumClubMemberEventStatusEnumFilter = {
  equals?: InputMaybe<ClubMemberEventStatusEnum>;
  in?: InputMaybe<Array<ClubMemberEventStatusEnum>>;
  not?: InputMaybe<NestedEnumClubMemberEventStatusEnumFilter>;
  notIn?: InputMaybe<Array<ClubMemberEventStatusEnum>>;
};

export type EnumClubMemberStatusEnumFieldUpdateOperationsInput = {
  set?: InputMaybe<ClubMemberStatusEnum>;
};

export type EnumClubMemberStatusEnumFilter = {
  equals?: InputMaybe<ClubMemberStatusEnum>;
  in?: InputMaybe<Array<ClubMemberStatusEnum>>;
  not?: InputMaybe<NestedEnumClubMemberStatusEnumFilter>;
  notIn?: InputMaybe<Array<ClubMemberStatusEnum>>;
};

export type EnumClubStatusEnumFieldUpdateOperationsInput = {
  set?: InputMaybe<ClubStatusEnum>;
};

export type EnumClubStatusEnumFilter = {
  equals?: InputMaybe<ClubStatusEnum>;
  in?: InputMaybe<Array<ClubStatusEnum>>;
  not?: InputMaybe<NestedEnumClubStatusEnumFilter>;
  notIn?: InputMaybe<Array<ClubStatusEnum>>;
};

export type EnumRequestStatusEnumFieldUpdateOperationsInput = {
  set?: InputMaybe<RequestStatusEnum>;
};

export type EnumRequestStatusEnumFilter = {
  equals?: InputMaybe<RequestStatusEnum>;
  in?: InputMaybe<Array<RequestStatusEnum>>;
  not?: InputMaybe<NestedEnumRequestStatusEnumFilter>;
  notIn?: InputMaybe<Array<RequestStatusEnum>>;
};

export type EnumStudentStatusEnumFieldUpdateOperationsInput = {
  set?: InputMaybe<StudentStatusEnum>;
};

export type EnumStudentStatusEnumFilter = {
  equals?: InputMaybe<StudentStatusEnum>;
  in?: InputMaybe<Array<StudentStatusEnum>>;
  not?: InputMaybe<NestedEnumStudentStatusEnumFilter>;
  notIn?: InputMaybe<Array<StudentStatusEnum>>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createClubEvent: ClubEvent;
  createClubInfoChangeRequest: ClubInfoChangeRequest;
  createOneClub: Club;
  joinClub?: Maybe<ClubMember>;
  joinEvent: ClubEventMember;
  leaveClub?: Maybe<ClubMember>;
  leaveEvent: ClubEventMember;
  loginClubAdmin: Token;
  loginSuperAdmin: Token;
  loginUser: Token;
  refreshToken: Scalars['String'];
  updateClubEvent: ClubEvent;
  updateClubEventStatus: ClubEvent;
  updateClubInfoChangeRequestStatus: ClubInfoChangeRequest;
  updateEventAttendance: ClubEventMember;
  userSignUp: Token;
};


export type MutationCreateClubEventArgs = {
  data: ClubEventCreateInput;
};


export type MutationCreateClubInfoChangeRequestArgs = {
  data: ClubInfoChangeRequestCreateInput;
};


export type MutationCreateOneClubArgs = {
  data: ClubCreateInput;
};


export type MutationJoinClubArgs = {
  clubId: Scalars['String'];
};


export type MutationJoinEventArgs = {
  eventId: Scalars['String'];
};


export type MutationLeaveClubArgs = {
  clubId: Scalars['String'];
};


export type MutationLeaveEventArgs = {
  eventId: Scalars['String'];
};


export type MutationLoginClubAdminArgs = {
  data: LoginInput;
};


export type MutationLoginSuperAdminArgs = {
  data: LoginInput;
};


export type MutationLoginUserArgs = {
  data: LoginInput;
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationUpdateClubEventArgs = {
  data: ClubEventUpdateInput;
  where: ClubEventWhereUniqueInput;
};


export type MutationUpdateClubEventStatusArgs = {
  eventId: Scalars['String'];
  status: ClubEventStatusEnum;
};


export type MutationUpdateClubInfoChangeRequestStatusArgs = {
  data: UpdateInfoChangeRequestStatusInput;
};


export type MutationUpdateEventAttendanceArgs = {
  attendance: ClubMemberEventAttendanceEnum;
  memberId: Scalars['String'];
};


export type MutationUserSignUpArgs = {
  data: UserSignUpInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumClubAdminRoleEnumFilter = {
  equals?: InputMaybe<ClubAdminRoleEnum>;
  in?: InputMaybe<Array<ClubAdminRoleEnum>>;
  not?: InputMaybe<NestedEnumClubAdminRoleEnumFilter>;
  notIn?: InputMaybe<Array<ClubAdminRoleEnum>>;
};

export type NestedEnumClubAdminStatusEnumFilter = {
  equals?: InputMaybe<ClubAdminStatusEnum>;
  in?: InputMaybe<Array<ClubAdminStatusEnum>>;
  not?: InputMaybe<NestedEnumClubAdminStatusEnumFilter>;
  notIn?: InputMaybe<Array<ClubAdminStatusEnum>>;
};

export type NestedEnumClubEventStatusEnumFilter = {
  equals?: InputMaybe<ClubEventStatusEnum>;
  in?: InputMaybe<Array<ClubEventStatusEnum>>;
  not?: InputMaybe<NestedEnumClubEventStatusEnumFilter>;
  notIn?: InputMaybe<Array<ClubEventStatusEnum>>;
};

export type NestedEnumClubMemberEventAttendanceEnumFilter = {
  equals?: InputMaybe<ClubMemberEventAttendanceEnum>;
  in?: InputMaybe<Array<ClubMemberEventAttendanceEnum>>;
  not?: InputMaybe<NestedEnumClubMemberEventAttendanceEnumFilter>;
  notIn?: InputMaybe<Array<ClubMemberEventAttendanceEnum>>;
};

export type NestedEnumClubMemberEventStatusEnumFilter = {
  equals?: InputMaybe<ClubMemberEventStatusEnum>;
  in?: InputMaybe<Array<ClubMemberEventStatusEnum>>;
  not?: InputMaybe<NestedEnumClubMemberEventStatusEnumFilter>;
  notIn?: InputMaybe<Array<ClubMemberEventStatusEnum>>;
};

export type NestedEnumClubMemberStatusEnumFilter = {
  equals?: InputMaybe<ClubMemberStatusEnum>;
  in?: InputMaybe<Array<ClubMemberStatusEnum>>;
  not?: InputMaybe<NestedEnumClubMemberStatusEnumFilter>;
  notIn?: InputMaybe<Array<ClubMemberStatusEnum>>;
};

export type NestedEnumClubStatusEnumFilter = {
  equals?: InputMaybe<ClubStatusEnum>;
  in?: InputMaybe<Array<ClubStatusEnum>>;
  not?: InputMaybe<NestedEnumClubStatusEnumFilter>;
  notIn?: InputMaybe<Array<ClubStatusEnum>>;
};

export type NestedEnumRequestStatusEnumFilter = {
  equals?: InputMaybe<RequestStatusEnum>;
  in?: InputMaybe<Array<RequestStatusEnum>>;
  not?: InputMaybe<NestedEnumRequestStatusEnumFilter>;
  notIn?: InputMaybe<Array<RequestStatusEnum>>;
};

export type NestedEnumStudentStatusEnumFilter = {
  equals?: InputMaybe<StudentStatusEnum>;
  in?: InputMaybe<Array<StudentStatusEnum>>;
  not?: InputMaybe<NestedEnumStudentStatusEnumFilter>;
  notIn?: InputMaybe<Array<StudentStatusEnum>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  clubTotalCount: Scalars['Int'];
  countTotalClubEvent: Scalars['Int'];
  countTotalClubMember: Scalars['Int'];
  countTotalEventMember: Scalars['Int'];
  findManyClub: Array<Club>;
  findManyClubAdmin: Array<ClubAdmin>;
  findManyClubEvent: Array<ClubEvent>;
  findManyClubMember: Array<ClubMember>;
  findManyEventMember: Array<ClubEventMember>;
  findManyUser: Array<User>;
  findOneClub: Club;
  findOneClubEvent: ClubEvent;
  findOneUser: User;
  getClubsByAdmin: Array<Club>;
  getMe: User;
  getMeEventMember?: Maybe<ClubEventMember>;
  getMeMember?: Maybe<ClubMember>;
  getMyClubs?: Maybe<Array<ClubMember>>;
  getMyEvents?: Maybe<Array<ClubEventMember>>;
};


export type QueryCountTotalClubMemberArgs = {
  clubId: Scalars['String'];
};


export type QueryCountTotalEventMemberArgs = {
  eventId: Scalars['String'];
};


export type QueryFindManyClubArgs = {
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubWhereInput>;
};


export type QueryFindManyClubAdminArgs = {
  cursor?: InputMaybe<ClubAdminWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubAdminScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubAdminOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubAdminWhereInput>;
};


export type QueryFindManyClubEventArgs = {
  cursor?: InputMaybe<ClubEventWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubEventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubEventOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubEventWhereInput>;
};


export type QueryFindManyClubMemberArgs = {
  cursor?: InputMaybe<ClubMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubMemberOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubMemberWhereInput>;
};


export type QueryFindManyEventMemberArgs = {
  cursor?: InputMaybe<ClubEventMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubEventMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubEventMemberOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubEventMemberWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindOneClubArgs = {
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubWhereInput>;
};


export type QueryFindOneClubEventArgs = {
  cursor?: InputMaybe<ClubEventWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubEventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubEventOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubEventWhereInput>;
};


export type QueryFindOneUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGetMeEventMemberArgs = {
  eventId: Scalars['String'];
};


export type QueryGetMeMemberArgs = {
  clubId: Scalars['String'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum StudentStatusEnum {
  Active = 'ACTIVE',
  Graduated = 'GRADUATED',
  Inactive = 'INACTIVE'
}

export type Token = {
  __typename?: 'Token';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type UpdateInfoChangeRequestStatusInput = {
  requestId: Scalars['String'];
  status: RequestStatusEnum;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  clubAdmin?: Maybe<Array<ClubAdmin>>;
  clubEventMember?: Maybe<Array<ClubEventMember>>;
  clubInfoChangeAdminRequest?: Maybe<Array<ClubInfoChangeAdminRequest>>;
  clubMember?: Maybe<Array<ClubMember>>;
  contactNumber?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  password: Scalars['String'];
  status: StudentStatusEnum;
  tpNumber: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserCount = {
  __typename?: 'UserCount';
  clubAdmin: Scalars['Int'];
  clubEventMember: Scalars['Int'];
  clubInfoChangeAdminRequest: Scalars['Int'];
  clubMember: Scalars['Int'];
};

export type UserCreateNestedOneWithoutClubAdminInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClubAdminInput>;
  create?: InputMaybe<UserCreateWithoutClubAdminInput>;
};

export type UserCreateNestedOneWithoutClubEventMemberInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClubEventMemberInput>;
  create?: InputMaybe<UserCreateWithoutClubEventMemberInput>;
};

export type UserCreateNestedOneWithoutClubInfoChangeAdminRequestInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClubInfoChangeAdminRequestInput>;
  create?: InputMaybe<UserCreateWithoutClubInfoChangeAdminRequestInput>;
};

export type UserCreateNestedOneWithoutClubMemberInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClubMemberInput>;
  create?: InputMaybe<UserCreateWithoutClubMemberInput>;
};

export type UserCreateOrConnectWithoutClubAdminInput = {
  create: UserCreateWithoutClubAdminInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutClubEventMemberInput = {
  create: UserCreateWithoutClubEventMemberInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutClubInfoChangeAdminRequestInput = {
  create: UserCreateWithoutClubInfoChangeAdminRequestInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutClubMemberInput = {
  create: UserCreateWithoutClubMemberInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutClubAdminInput = {
  clubEventMember?: InputMaybe<ClubEventMemberCreateNestedManyWithoutUserInput>;
  clubInfoChangeAdminRequest?: InputMaybe<ClubInfoChangeAdminRequestCreateNestedManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  contactNumber?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  status?: InputMaybe<StudentStatusEnum>;
  tpNumber: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserCreateWithoutClubEventMemberInput = {
  clubAdmin?: InputMaybe<ClubAdminCreateNestedManyWithoutUserInput>;
  clubInfoChangeAdminRequest?: InputMaybe<ClubInfoChangeAdminRequestCreateNestedManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  contactNumber?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  status?: InputMaybe<StudentStatusEnum>;
  tpNumber: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserCreateWithoutClubInfoChangeAdminRequestInput = {
  clubAdmin?: InputMaybe<ClubAdminCreateNestedManyWithoutUserInput>;
  clubEventMember?: InputMaybe<ClubEventMemberCreateNestedManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  contactNumber?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  status?: InputMaybe<StudentStatusEnum>;
  tpNumber: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserCreateWithoutClubMemberInput = {
  clubAdmin?: InputMaybe<ClubAdminCreateNestedManyWithoutUserInput>;
  clubEventMember?: InputMaybe<ClubEventMemberCreateNestedManyWithoutUserInput>;
  clubInfoChangeAdminRequest?: InputMaybe<ClubInfoChangeAdminRequestCreateNestedManyWithoutUserInput>;
  contactNumber?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  status?: InputMaybe<StudentStatusEnum>;
  tpNumber: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export enum UserOrderByRelevanceFieldEnum {
  ContactNumber = 'contactNumber',
  Email = 'email',
  Id = 'id',
  Password = 'password',
  TpNumber = 'tpNumber',
  Username = 'username'
}

export type UserOrderByRelevanceInput = {
  fields: Array<UserOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type UserOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<UserOrderByRelevanceInput>;
  clubAdmin?: InputMaybe<ClubAdminOrderByRelationAggregateInput>;
  clubEventMember?: InputMaybe<ClubEventMemberOrderByRelationAggregateInput>;
  clubInfoChangeAdminRequest?: InputMaybe<ClubInfoChangeAdminRequestOrderByRelationAggregateInput>;
  clubMember?: InputMaybe<ClubMemberOrderByRelationAggregateInput>;
  contactNumber?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  tpNumber?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  ContactNumber = 'contactNumber',
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Password = 'password',
  Status = 'status',
  TpNumber = 'tpNumber',
  UpdatedAt = 'updatedAt',
  Username = 'username'
}

export type UserSignUpInput = {
  contactNumber: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  tpNumber: Scalars['String'];
  username: Scalars['String'];
};

export type UserUpdateOneRequiredWithoutClubAdminNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClubAdminInput>;
  create?: InputMaybe<UserCreateWithoutClubAdminInput>;
  update?: InputMaybe<UserUpdateWithoutClubAdminInput>;
  upsert?: InputMaybe<UserUpsertWithoutClubAdminInput>;
};

export type UserUpdateOneRequiredWithoutClubEventMemberNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClubEventMemberInput>;
  create?: InputMaybe<UserCreateWithoutClubEventMemberInput>;
  update?: InputMaybe<UserUpdateWithoutClubEventMemberInput>;
  upsert?: InputMaybe<UserUpsertWithoutClubEventMemberInput>;
};

export type UserUpdateOneRequiredWithoutClubInfoChangeAdminRequestNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClubInfoChangeAdminRequestInput>;
  create?: InputMaybe<UserCreateWithoutClubInfoChangeAdminRequestInput>;
  update?: InputMaybe<UserUpdateWithoutClubInfoChangeAdminRequestInput>;
  upsert?: InputMaybe<UserUpsertWithoutClubInfoChangeAdminRequestInput>;
};

export type UserUpdateOneRequiredWithoutClubMemberNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClubMemberInput>;
  create?: InputMaybe<UserCreateWithoutClubMemberInput>;
  update?: InputMaybe<UserUpdateWithoutClubMemberInput>;
  upsert?: InputMaybe<UserUpsertWithoutClubMemberInput>;
};

export type UserUpdateWithoutClubAdminInput = {
  clubEventMember?: InputMaybe<ClubEventMemberUpdateManyWithoutUserNestedInput>;
  clubInfoChangeAdminRequest?: InputMaybe<ClubInfoChangeAdminRequestUpdateManyWithoutUserNestedInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutUserNestedInput>;
  contactNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumStudentStatusEnumFieldUpdateOperationsInput>;
  tpNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutClubEventMemberInput = {
  clubAdmin?: InputMaybe<ClubAdminUpdateManyWithoutUserNestedInput>;
  clubInfoChangeAdminRequest?: InputMaybe<ClubInfoChangeAdminRequestUpdateManyWithoutUserNestedInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutUserNestedInput>;
  contactNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumStudentStatusEnumFieldUpdateOperationsInput>;
  tpNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutClubInfoChangeAdminRequestInput = {
  clubAdmin?: InputMaybe<ClubAdminUpdateManyWithoutUserNestedInput>;
  clubEventMember?: InputMaybe<ClubEventMemberUpdateManyWithoutUserNestedInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutUserNestedInput>;
  contactNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumStudentStatusEnumFieldUpdateOperationsInput>;
  tpNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutClubMemberInput = {
  clubAdmin?: InputMaybe<ClubAdminUpdateManyWithoutUserNestedInput>;
  clubEventMember?: InputMaybe<ClubEventMemberUpdateManyWithoutUserNestedInput>;
  clubInfoChangeAdminRequest?: InputMaybe<ClubInfoChangeAdminRequestUpdateManyWithoutUserNestedInput>;
  contactNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumStudentStatusEnumFieldUpdateOperationsInput>;
  tpNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutClubAdminInput = {
  create: UserCreateWithoutClubAdminInput;
  update: UserUpdateWithoutClubAdminInput;
};

export type UserUpsertWithoutClubEventMemberInput = {
  create: UserCreateWithoutClubEventMemberInput;
  update: UserUpdateWithoutClubEventMemberInput;
};

export type UserUpsertWithoutClubInfoChangeAdminRequestInput = {
  create: UserCreateWithoutClubInfoChangeAdminRequestInput;
  update: UserUpdateWithoutClubInfoChangeAdminRequestInput;
};

export type UserUpsertWithoutClubMemberInput = {
  create: UserCreateWithoutClubMemberInput;
  update: UserUpdateWithoutClubMemberInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  clubAdmin?: InputMaybe<ClubAdminListRelationFilter>;
  clubEventMember?: InputMaybe<ClubEventMemberListRelationFilter>;
  clubInfoChangeAdminRequest?: InputMaybe<ClubInfoChangeAdminRequestListRelationFilter>;
  clubMember?: InputMaybe<ClubMemberListRelationFilter>;
  contactNumber?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStudentStatusEnumFilter>;
  tpNumber?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  contactNumber?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  tpNumber?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export enum ClubEventStatusEnum {
  Awaiting = 'AWAITING',
  Cancelled = 'CANCELLED',
  Finished = 'FINISHED',
  InReview = 'IN_REVIEW',
  Ongoing = 'ONGOING'
}

export enum ClubMemberEventAttendanceEnum {
  Absent = 'ABSENT',
  Leave = 'LEAVE',
  Present = 'PRESENT'
}

export enum RequestStatusEnum {
  Approved = 'APPROVED',
  Rejected = 'REJECTED',
  UnderReview = 'UNDER_REVIEW'
}

export type LoginSuperAdminMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginSuperAdminMutation = { __typename?: 'Mutation', loginSuperAdmin: { __typename?: 'Token', accessToken: string, refreshToken: string } };

export type LoginClubAdminMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginClubAdminMutation = { __typename?: 'Mutation', loginClubAdmin: { __typename?: 'Token', accessToken: string, refreshToken: string } };

export type LoginUserMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'Token', accessToken: string, refreshToken: string } };

export type RefreshTokenMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: string };

export type TokenFragmentFragment = { __typename?: 'Token', accessToken: string, refreshToken: string };

export type FindManyClubAdminQueryVariables = Exact<{
  cursor?: InputMaybe<ClubAdminWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubAdminScalarFieldEnum> | ClubAdminScalarFieldEnum>;
  orderBy?: InputMaybe<Array<ClubAdminOrderByWithRelationAndSearchRelevanceInput> | ClubAdminOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubAdminWhereInput>;
}>;


export type FindManyClubAdminQuery = { __typename?: 'Query', findManyClubAdmin: Array<{ __typename?: 'ClubAdmin', id: string, clubAdminStatus: ClubAdminStatusEnum, clubId: string, createdAt: any, role: ClubAdminRoleEnum, roleLabel: string, updatedAt: any, userId: string, user: { __typename?: 'User', id: string, username: string, contactNumber?: string | null, email: string, status: StudentStatusEnum, tpNumber: string, createdAt: any, updatedAt: any } }> };

export type ClubAdminFieldFragment = { __typename?: 'ClubAdmin', id: string, clubAdminStatus: ClubAdminStatusEnum, clubId: string, createdAt: any, role: ClubAdminRoleEnum, roleLabel: string, updatedAt: any, userId: string };

export type CountTotalClubEventQueryVariables = Exact<{ [key: string]: never; }>;


export type CountTotalClubEventQuery = { __typename?: 'Query', countTotalClubEvent: number };

export type FindManyClubEventQueryVariables = Exact<{
  cursor?: InputMaybe<ClubEventWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubEventScalarFieldEnum> | ClubEventScalarFieldEnum>;
  orderBy?: InputMaybe<Array<ClubEventOrderByWithRelationAndSearchRelevanceInput> | ClubEventOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubEventWhereInput>;
}>;


export type FindManyClubEventQuery = { __typename?: 'Query', findManyClubEvent: Array<{ __typename?: 'ClubEvent', id: string, clubId: string, createdAt: any, updatedAt: any, name: string, description: string, startAt: any, endAt: any, status: ClubEventStatusEnum, thumbnail?: string | null, club: { __typename?: 'Club', id: string, createdAt: any, description: string, name: string, status: ClubStatusEnum, updatedAt: any, label: string } }> };

export type FindOneClubEventQueryVariables = Exact<{
  cursor?: InputMaybe<ClubEventWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubEventScalarFieldEnum> | ClubEventScalarFieldEnum>;
  orderBy?: InputMaybe<Array<ClubEventOrderByWithRelationAndSearchRelevanceInput> | ClubEventOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubEventWhereInput>;
}>;


export type FindOneClubEventQuery = { __typename?: 'Query', findOneClubEvent: { __typename?: 'ClubEvent', id: string, clubId: string, createdAt: any, updatedAt: any, name: string, description: string, startAt: any, endAt: any, status: ClubEventStatusEnum, thumbnail?: string | null } };

export type FindOneClubEventWithClubQueryVariables = Exact<{
  cursor?: InputMaybe<ClubEventWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubEventScalarFieldEnum> | ClubEventScalarFieldEnum>;
  orderBy?: InputMaybe<Array<ClubEventOrderByWithRelationAndSearchRelevanceInput> | ClubEventOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubEventWhereInput>;
}>;


export type FindOneClubEventWithClubQuery = { __typename?: 'Query', findOneClubEvent: { __typename?: 'ClubEvent', id: string, clubId: string, createdAt: any, updatedAt: any, name: string, description: string, startAt: any, endAt: any, status: ClubEventStatusEnum, thumbnail?: string | null, club: { __typename?: 'Club', id: string, createdAt: any, description: string, name: string, status: ClubStatusEnum, updatedAt: any, label: string } } };

export type CreateClubEventMutationVariables = Exact<{
  data: ClubEventCreateInput;
}>;


export type CreateClubEventMutation = { __typename?: 'Mutation', createClubEvent: { __typename?: 'ClubEvent', id: string, clubId: string, createdAt: any, updatedAt: any, name: string, description: string, startAt: any, endAt: any, status: ClubEventStatusEnum, thumbnail?: string | null } };

export type UpdateClubEventMutationVariables = Exact<{
  data: ClubEventUpdateInput;
  where: ClubEventWhereUniqueInput;
}>;


export type UpdateClubEventMutation = { __typename?: 'Mutation', updateClubEvent: { __typename?: 'ClubEvent', id: string, clubId: string, createdAt: any, updatedAt: any, name: string, description: string, startAt: any, endAt: any, status: ClubEventStatusEnum, thumbnail?: string | null } };

export type ClubEventFieldFragment = { __typename?: 'ClubEvent', id: string, clubId: string, createdAt: any, updatedAt: any, name: string, description: string, startAt: any, endAt: any, status: ClubEventStatusEnum, thumbnail?: string | null };

export type GetMeMemberQueryVariables = Exact<{
  clubId: Scalars['String'];
}>;


export type GetMeMemberQuery = { __typename?: 'Query', getMeMember?: { __typename?: 'ClubMember', id: string, clubId: string, createdAt: any, deletedAt?: any | null, isAdmin: boolean, status: ClubMemberStatusEnum, updatedAt: any, userId: string } | null };

export type FindManyClubMemberQueryVariables = Exact<{
  cursor?: InputMaybe<ClubMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubMemberScalarFieldEnum> | ClubMemberScalarFieldEnum>;
  orderBy?: InputMaybe<Array<ClubMemberOrderByWithRelationAndSearchRelevanceInput> | ClubMemberOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubMemberWhereInput>;
}>;


export type FindManyClubMemberQuery = { __typename?: 'Query', findManyClubMember: Array<{ __typename?: 'ClubMember', id: string, clubId: string, createdAt: any, deletedAt?: any | null, isAdmin: boolean, status: ClubMemberStatusEnum, updatedAt: any, userId: string, user: { __typename?: 'User', id: string, username: string, contactNumber?: string | null, email: string, status: StudentStatusEnum, tpNumber: string, createdAt: any, updatedAt: any } }> };

export type CountTotalClubMemberQueryVariables = Exact<{
  clubId: Scalars['String'];
}>;


export type CountTotalClubMemberQuery = { __typename?: 'Query', countTotalClubMember: number };

export type GetMyClubsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyClubsQuery = { __typename?: 'Query', getMyClubs?: Array<{ __typename?: 'ClubMember', club: { __typename?: 'Club', id: string, createdAt: any, description: string, name: string, status: ClubStatusEnum, updatedAt: any, label: string } }> | null };

export type JoinClubMutationVariables = Exact<{
  clubId: Scalars['String'];
}>;


export type JoinClubMutation = { __typename?: 'Mutation', joinClub?: { __typename?: 'ClubMember', id: string, clubId: string, createdAt: any, deletedAt?: any | null, isAdmin: boolean, status: ClubMemberStatusEnum, updatedAt: any, userId: string } | null };

export type LeaveClubMutationVariables = Exact<{
  clubId: Scalars['String'];
}>;


export type LeaveClubMutation = { __typename?: 'Mutation', leaveClub?: { __typename?: 'ClubMember', id: string, clubId: string, createdAt: any, deletedAt?: any | null, isAdmin: boolean, status: ClubMemberStatusEnum, updatedAt: any, userId: string } | null };

export type ClubMemberFieldFragment = { __typename?: 'ClubMember', id: string, clubId: string, createdAt: any, deletedAt?: any | null, isAdmin: boolean, status: ClubMemberStatusEnum, updatedAt: any, userId: string };

export type FindManyClubQueryVariables = Exact<{
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum> | ClubScalarFieldEnum>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationAndSearchRelevanceInput> | ClubOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubWhereInput>;
}>;


export type FindManyClubQuery = { __typename?: 'Query', findManyClub: Array<{ __typename?: 'Club', id: string, createdAt: any, description: string, name: string, status: ClubStatusEnum, updatedAt: any, label: string }> };

export type FindOneClubQueryVariables = Exact<{
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum> | ClubScalarFieldEnum>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationAndSearchRelevanceInput> | ClubOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubWhereInput>;
}>;


export type FindOneClubQuery = { __typename?: 'Query', findOneClub: { __typename?: 'Club', id: string, createdAt: any, description: string, name: string, status: ClubStatusEnum, updatedAt: any, label: string } };

export type ClubTotalCountQueryVariables = Exact<{ [key: string]: never; }>;


export type ClubTotalCountQuery = { __typename?: 'Query', clubTotalCount: number };

export type GetClubsByAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClubsByAdminQuery = { __typename?: 'Query', getClubsByAdmin: Array<{ __typename?: 'Club', id: string, createdAt: any, description: string, name: string, status: ClubStatusEnum, updatedAt: any, label: string }> };

export type CreateOneClubMutationVariables = Exact<{
  data: ClubCreateInput;
}>;


export type CreateOneClubMutation = { __typename?: 'Mutation', createOneClub: { __typename?: 'Club', id: string, createdAt: any, description: string, name: string, status: ClubStatusEnum, updatedAt: any, label: string, clubAdmin?: Array<{ __typename?: 'ClubAdmin', id: string, clubAdminStatus: ClubAdminStatusEnum, clubId: string, createdAt: any, role: ClubAdminRoleEnum, roleLabel: string, updatedAt: any, userId: string }> | null } };

export type ClubFieldFragment = { __typename?: 'Club', id: string, createdAt: any, description: string, name: string, status: ClubStatusEnum, updatedAt: any, label: string };

export type GetMeEventMemberQueryVariables = Exact<{
  eventId: Scalars['String'];
}>;


export type GetMeEventMemberQuery = { __typename?: 'Query', getMeEventMember?: { __typename?: 'ClubEventMember', id: string, eventId: string, userId: string, status: ClubMemberEventStatusEnum, attendance: ClubMemberEventAttendanceEnum, createdAt: any, updatedAt: any } | null };

export type CountTotalEventMemberQueryVariables = Exact<{
  eventId: Scalars['String'];
}>;


export type CountTotalEventMemberQuery = { __typename?: 'Query', countTotalEventMember: number };

export type FindManyEventMemberQueryVariables = Exact<{
  cursor?: InputMaybe<ClubEventMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubEventMemberScalarFieldEnum> | ClubEventMemberScalarFieldEnum>;
  orderBy?: InputMaybe<Array<ClubEventMemberOrderByWithRelationAndSearchRelevanceInput> | ClubEventMemberOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubEventMemberWhereInput>;
}>;


export type FindManyEventMemberQuery = { __typename?: 'Query', findManyEventMember: Array<{ __typename?: 'ClubEventMember', id: string, eventId: string, userId: string, status: ClubMemberEventStatusEnum, attendance: ClubMemberEventAttendanceEnum, createdAt: any, updatedAt: any, user: { __typename?: 'User', id: string, username: string, contactNumber?: string | null, email: string, status: StudentStatusEnum, tpNumber: string, createdAt: any, updatedAt: any } }> };

export type GetMyEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyEventsQuery = { __typename?: 'Query', getMyEvents?: Array<{ __typename?: 'ClubEventMember', event: { __typename?: 'ClubEvent', id: string, clubId: string, createdAt: any, updatedAt: any, name: string, description: string, startAt: any, endAt: any, status: ClubEventStatusEnum, thumbnail?: string | null, club: { __typename?: 'Club', id: string, createdAt: any, description: string, name: string, status: ClubStatusEnum, updatedAt: any, label: string } } }> | null };

export type JoinClubEventMutationVariables = Exact<{
  eventId: Scalars['String'];
}>;


export type JoinClubEventMutation = { __typename?: 'Mutation', joinEvent: { __typename?: 'ClubEventMember', id: string, eventId: string, userId: string, status: ClubMemberEventStatusEnum, attendance: ClubMemberEventAttendanceEnum, createdAt: any, updatedAt: any } };

export type LeaveClubEventMutationVariables = Exact<{
  eventId: Scalars['String'];
}>;


export type LeaveClubEventMutation = { __typename?: 'Mutation', leaveEvent: { __typename?: 'ClubEventMember', id: string, eventId: string, userId: string, status: ClubMemberEventStatusEnum, attendance: ClubMemberEventAttendanceEnum, createdAt: any, updatedAt: any } };

export type UpdateEventAttendanceMutationVariables = Exact<{
  memberId: Scalars['String'];
  attendance: ClubMemberEventAttendanceEnum;
}>;


export type UpdateEventAttendanceMutation = { __typename?: 'Mutation', updateEventAttendance: { __typename?: 'ClubEventMember', id: string, eventId: string, userId: string, status: ClubMemberEventStatusEnum, attendance: ClubMemberEventAttendanceEnum, createdAt: any, updatedAt: any, user: { __typename?: 'User', id: string, username: string, contactNumber?: string | null, email: string, status: StudentStatusEnum, tpNumber: string, createdAt: any, updatedAt: any } } };

export type EventMemberFieldFragment = { __typename?: 'ClubEventMember', id: string, eventId: string, userId: string, status: ClubMemberEventStatusEnum, attendance: ClubMemberEventAttendanceEnum, createdAt: any, updatedAt: any };

export type GetUserSelectionsQueryVariables = Exact<{
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum> | UserScalarFieldEnum>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationAndSearchRelevanceInput> | UserOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
}>;


export type GetUserSelectionsQuery = { __typename?: 'Query', findManyUser: Array<{ __typename?: 'User', id: string, username: string }> };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', getMe: { __typename?: 'User', id: string, username: string, contactNumber?: string | null, email: string, status: StudentStatusEnum, tpNumber: string, createdAt: any, updatedAt: any } };

export type UserFieldFragment = { __typename?: 'User', id: string, username: string, contactNumber?: string | null, email: string, status: StudentStatusEnum, tpNumber: string, createdAt: any, updatedAt: any };

export const TokenFragmentFragmentDoc = gql`
    fragment TokenFragment on Token {
  accessToken
  refreshToken
}
    `;
export const ClubAdminFieldFragmentDoc = gql`
    fragment ClubAdminField on ClubAdmin {
  id
  clubAdminStatus
  clubId
  createdAt
  role
  roleLabel
  updatedAt
  userId
}
    `;
export const ClubEventFieldFragmentDoc = gql`
    fragment ClubEventField on ClubEvent {
  id
  clubId
  createdAt
  updatedAt
  name
  description
  startAt
  endAt
  status
  thumbnail
}
    `;
export const ClubMemberFieldFragmentDoc = gql`
    fragment ClubMemberField on ClubMember {
  id
  clubId
  createdAt
  deletedAt
  isAdmin
  status
  updatedAt
  userId
}
    `;
export const ClubFieldFragmentDoc = gql`
    fragment ClubField on Club {
  id
  createdAt
  description
  name
  status
  updatedAt
  label
}
    `;
export const EventMemberFieldFragmentDoc = gql`
    fragment EventMemberField on ClubEventMember {
  id
  eventId
  userId
  status
  attendance
  createdAt
  updatedAt
}
    `;
export const UserFieldFragmentDoc = gql`
    fragment UserField on User {
  id
  username
  contactNumber
  email
  status
  tpNumber
  createdAt
  updatedAt
}
    `;
export const LoginSuperAdminDocument = gql`
    mutation loginSuperAdmin($data: LoginInput!) {
  loginSuperAdmin(data: $data) {
    ...TokenFragment
  }
}
    ${TokenFragmentFragmentDoc}`;

export function useLoginSuperAdminMutation() {
  return Urql.useMutation<LoginSuperAdminMutation, LoginSuperAdminMutationVariables>(LoginSuperAdminDocument);
};
export const LoginClubAdminDocument = gql`
    mutation loginClubAdmin($data: LoginInput!) {
  loginClubAdmin(data: $data) {
    ...TokenFragment
  }
}
    ${TokenFragmentFragmentDoc}`;

export function useLoginClubAdminMutation() {
  return Urql.useMutation<LoginClubAdminMutation, LoginClubAdminMutationVariables>(LoginClubAdminDocument);
};
export const LoginUserDocument = gql`
    mutation loginUser($data: LoginInput!) {
  loginUser(data: $data) {
    ...TokenFragment
  }
}
    ${TokenFragmentFragmentDoc}`;

export function useLoginUserMutation() {
  return Urql.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument);
};
export const RefreshTokenDocument = gql`
    mutation refreshToken($token: String!) {
  refreshToken(refreshToken: $token)
}
    `;

export function useRefreshTokenMutation() {
  return Urql.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument);
};
export const FindManyClubAdminDocument = gql`
    query findManyClubAdmin($cursor: ClubAdminWhereUniqueInput, $distinct: [ClubAdminScalarFieldEnum!], $orderBy: [ClubAdminOrderByWithRelationAndSearchRelevanceInput!], $skip: Int, $take: Int, $where: ClubAdminWhereInput) {
  findManyClubAdmin(
    cursor: $cursor
    distinct: $distinct
    orderBy: $orderBy
    skip: $skip
    take: $take
    where: $where
  ) {
    ...ClubAdminField
    user {
      ...UserField
    }
  }
}
    ${ClubAdminFieldFragmentDoc}
${UserFieldFragmentDoc}`;

export function useFindManyClubAdminQuery(options: Omit<Urql.UseQueryArgs<never, FindManyClubAdminQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<FindManyClubAdminQuery>({ query: FindManyClubAdminDocument, ...options });
};
export const CountTotalClubEventDocument = gql`
    query countTotalClubEvent {
  countTotalClubEvent
}
    `;

export function useCountTotalClubEventQuery(options: Omit<Urql.UseQueryArgs<never, CountTotalClubEventQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CountTotalClubEventQuery>({ query: CountTotalClubEventDocument, ...options });
};
export const FindManyClubEventDocument = gql`
    query findManyClubEvent($cursor: ClubEventWhereUniqueInput, $distinct: [ClubEventScalarFieldEnum!], $orderBy: [ClubEventOrderByWithRelationAndSearchRelevanceInput!], $skip: Int, $take: Int, $where: ClubEventWhereInput) {
  findManyClubEvent(
    cursor: $cursor
    distinct: $distinct
    orderBy: $orderBy
    skip: $skip
    take: $take
    where: $where
  ) {
    ...ClubEventField
    club {
      ...ClubField
    }
  }
}
    ${ClubEventFieldFragmentDoc}
${ClubFieldFragmentDoc}`;

export function useFindManyClubEventQuery(options: Omit<Urql.UseQueryArgs<never, FindManyClubEventQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<FindManyClubEventQuery>({ query: FindManyClubEventDocument, ...options });
};
export const FindOneClubEventDocument = gql`
    query findOneClubEvent($cursor: ClubEventWhereUniqueInput, $distinct: [ClubEventScalarFieldEnum!], $orderBy: [ClubEventOrderByWithRelationAndSearchRelevanceInput!], $skip: Int, $take: Int, $where: ClubEventWhereInput) {
  findOneClubEvent(
    cursor: $cursor
    distinct: $distinct
    orderBy: $orderBy
    skip: $skip
    take: $take
    where: $where
  ) {
    ...ClubEventField
  }
}
    ${ClubEventFieldFragmentDoc}`;

export function useFindOneClubEventQuery(options: Omit<Urql.UseQueryArgs<never, FindOneClubEventQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<FindOneClubEventQuery>({ query: FindOneClubEventDocument, ...options });
};
export const FindOneClubEventWithClubDocument = gql`
    query findOneClubEventWithClub($cursor: ClubEventWhereUniqueInput, $distinct: [ClubEventScalarFieldEnum!], $orderBy: [ClubEventOrderByWithRelationAndSearchRelevanceInput!], $skip: Int, $take: Int, $where: ClubEventWhereInput) {
  findOneClubEvent(
    cursor: $cursor
    distinct: $distinct
    orderBy: $orderBy
    skip: $skip
    take: $take
    where: $where
  ) {
    ...ClubEventField
    club {
      ...ClubField
    }
  }
}
    ${ClubEventFieldFragmentDoc}
${ClubFieldFragmentDoc}`;

export function useFindOneClubEventWithClubQuery(options: Omit<Urql.UseQueryArgs<never, FindOneClubEventWithClubQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<FindOneClubEventWithClubQuery>({ query: FindOneClubEventWithClubDocument, ...options });
};
export const CreateClubEventDocument = gql`
    mutation createClubEvent($data: ClubEventCreateInput!) {
  createClubEvent(data: $data) {
    ...ClubEventField
  }
}
    ${ClubEventFieldFragmentDoc}`;

export function useCreateClubEventMutation() {
  return Urql.useMutation<CreateClubEventMutation, CreateClubEventMutationVariables>(CreateClubEventDocument);
};
export const UpdateClubEventDocument = gql`
    mutation updateClubEvent($data: ClubEventUpdateInput!, $where: ClubEventWhereUniqueInput!) {
  updateClubEvent(data: $data, where: $where) {
    ...ClubEventField
  }
}
    ${ClubEventFieldFragmentDoc}`;

export function useUpdateClubEventMutation() {
  return Urql.useMutation<UpdateClubEventMutation, UpdateClubEventMutationVariables>(UpdateClubEventDocument);
};
export const GetMeMemberDocument = gql`
    query getMeMember($clubId: String!) {
  getMeMember(clubId: $clubId) {
    ...ClubMemberField
  }
}
    ${ClubMemberFieldFragmentDoc}`;

export function useGetMeMemberQuery(options: Omit<Urql.UseQueryArgs<never, GetMeMemberQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetMeMemberQuery>({ query: GetMeMemberDocument, ...options });
};
export const FindManyClubMemberDocument = gql`
    query findManyClubMember($cursor: ClubMemberWhereUniqueInput, $distinct: [ClubMemberScalarFieldEnum!], $orderBy: [ClubMemberOrderByWithRelationAndSearchRelevanceInput!], $skip: Int, $take: Int, $where: ClubMemberWhereInput) {
  findManyClubMember(
    cursor: $cursor
    distinct: $distinct
    orderBy: $orderBy
    skip: $skip
    take: $take
    where: $where
  ) {
    ...ClubMemberField
    user {
      ...UserField
    }
  }
}
    ${ClubMemberFieldFragmentDoc}
${UserFieldFragmentDoc}`;

export function useFindManyClubMemberQuery(options: Omit<Urql.UseQueryArgs<never, FindManyClubMemberQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<FindManyClubMemberQuery>({ query: FindManyClubMemberDocument, ...options });
};
export const CountTotalClubMemberDocument = gql`
    query countTotalClubMember($clubId: String!) {
  countTotalClubMember(clubId: $clubId)
}
    `;

export function useCountTotalClubMemberQuery(options: Omit<Urql.UseQueryArgs<never, CountTotalClubMemberQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CountTotalClubMemberQuery>({ query: CountTotalClubMemberDocument, ...options });
};
export const GetMyClubsDocument = gql`
    query getMyClubs {
  getMyClubs {
    club {
      ...ClubField
    }
  }
}
    ${ClubFieldFragmentDoc}`;

export function useGetMyClubsQuery(options: Omit<Urql.UseQueryArgs<never, GetMyClubsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetMyClubsQuery>({ query: GetMyClubsDocument, ...options });
};
export const JoinClubDocument = gql`
    mutation joinClub($clubId: String!) {
  joinClub(clubId: $clubId) {
    ...ClubMemberField
  }
}
    ${ClubMemberFieldFragmentDoc}`;

export function useJoinClubMutation() {
  return Urql.useMutation<JoinClubMutation, JoinClubMutationVariables>(JoinClubDocument);
};
export const LeaveClubDocument = gql`
    mutation leaveClub($clubId: String!) {
  leaveClub(clubId: $clubId) {
    ...ClubMemberField
  }
}
    ${ClubMemberFieldFragmentDoc}`;

export function useLeaveClubMutation() {
  return Urql.useMutation<LeaveClubMutation, LeaveClubMutationVariables>(LeaveClubDocument);
};
export const FindManyClubDocument = gql`
    query findManyClub($cursor: ClubWhereUniqueInput, $distinct: [ClubScalarFieldEnum!], $orderBy: [ClubOrderByWithRelationAndSearchRelevanceInput!], $skip: Int, $take: Int, $where: ClubWhereInput) {
  findManyClub(
    cursor: $cursor
    distinct: $distinct
    orderBy: $orderBy
    skip: $skip
    take: $take
    where: $where
  ) {
    ...ClubField
  }
}
    ${ClubFieldFragmentDoc}`;

export function useFindManyClubQuery(options: Omit<Urql.UseQueryArgs<never, FindManyClubQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<FindManyClubQuery>({ query: FindManyClubDocument, ...options });
};
export const FindOneClubDocument = gql`
    query findOneClub($cursor: ClubWhereUniqueInput, $distinct: [ClubScalarFieldEnum!], $orderBy: [ClubOrderByWithRelationAndSearchRelevanceInput!], $skip: Int, $take: Int, $where: ClubWhereInput) {
  findOneClub(
    cursor: $cursor
    distinct: $distinct
    orderBy: $orderBy
    skip: $skip
    take: $take
    where: $where
  ) {
    ...ClubField
  }
}
    ${ClubFieldFragmentDoc}`;

export function useFindOneClubQuery(options: Omit<Urql.UseQueryArgs<never, FindOneClubQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<FindOneClubQuery>({ query: FindOneClubDocument, ...options });
};
export const ClubTotalCountDocument = gql`
    query clubTotalCount {
  clubTotalCount
}
    `;

export function useClubTotalCountQuery(options: Omit<Urql.UseQueryArgs<never, ClubTotalCountQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ClubTotalCountQuery>({ query: ClubTotalCountDocument, ...options });
};
export const GetClubsByAdminDocument = gql`
    query getClubsByAdmin {
  getClubsByAdmin {
    ...ClubField
  }
}
    ${ClubFieldFragmentDoc}`;

export function useGetClubsByAdminQuery(options: Omit<Urql.UseQueryArgs<never, GetClubsByAdminQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetClubsByAdminQuery>({ query: GetClubsByAdminDocument, ...options });
};
export const CreateOneClubDocument = gql`
    mutation createOneClub($data: ClubCreateInput!) {
  createOneClub(data: $data) {
    ...ClubField
    clubAdmin {
      ...ClubAdminField
    }
  }
}
    ${ClubFieldFragmentDoc}
${ClubAdminFieldFragmentDoc}`;

export function useCreateOneClubMutation() {
  return Urql.useMutation<CreateOneClubMutation, CreateOneClubMutationVariables>(CreateOneClubDocument);
};
export const GetMeEventMemberDocument = gql`
    query getMeEventMember($eventId: String!) {
  getMeEventMember(eventId: $eventId) {
    ...EventMemberField
  }
}
    ${EventMemberFieldFragmentDoc}`;

export function useGetMeEventMemberQuery(options: Omit<Urql.UseQueryArgs<never, GetMeEventMemberQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetMeEventMemberQuery>({ query: GetMeEventMemberDocument, ...options });
};
export const CountTotalEventMemberDocument = gql`
    query countTotalEventMember($eventId: String!) {
  countTotalEventMember(eventId: $eventId)
}
    `;

export function useCountTotalEventMemberQuery(options: Omit<Urql.UseQueryArgs<never, CountTotalEventMemberQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CountTotalEventMemberQuery>({ query: CountTotalEventMemberDocument, ...options });
};
export const FindManyEventMemberDocument = gql`
    query findManyEventMember($cursor: ClubEventMemberWhereUniqueInput, $distinct: [ClubEventMemberScalarFieldEnum!], $orderBy: [ClubEventMemberOrderByWithRelationAndSearchRelevanceInput!], $skip: Int, $take: Int, $where: ClubEventMemberWhereInput) {
  findManyEventMember(
    cursor: $cursor
    distinct: $distinct
    orderBy: $orderBy
    skip: $skip
    take: $take
    where: $where
  ) {
    ...EventMemberField
    user {
      ...UserField
    }
  }
}
    ${EventMemberFieldFragmentDoc}
${UserFieldFragmentDoc}`;

export function useFindManyEventMemberQuery(options: Omit<Urql.UseQueryArgs<never, FindManyEventMemberQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<FindManyEventMemberQuery>({ query: FindManyEventMemberDocument, ...options });
};
export const GetMyEventsDocument = gql`
    query getMyEvents {
  getMyEvents {
    event {
      ...ClubEventField
      club {
        ...ClubField
      }
    }
  }
}
    ${ClubEventFieldFragmentDoc}
${ClubFieldFragmentDoc}`;

export function useGetMyEventsQuery(options: Omit<Urql.UseQueryArgs<never, GetMyEventsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetMyEventsQuery>({ query: GetMyEventsDocument, ...options });
};
export const JoinClubEventDocument = gql`
    mutation joinClubEvent($eventId: String!) {
  joinEvent(eventId: $eventId) {
    ...EventMemberField
  }
}
    ${EventMemberFieldFragmentDoc}`;

export function useJoinClubEventMutation() {
  return Urql.useMutation<JoinClubEventMutation, JoinClubEventMutationVariables>(JoinClubEventDocument);
};
export const LeaveClubEventDocument = gql`
    mutation leaveClubEvent($eventId: String!) {
  leaveEvent(eventId: $eventId) {
    ...EventMemberField
  }
}
    ${EventMemberFieldFragmentDoc}`;

export function useLeaveClubEventMutation() {
  return Urql.useMutation<LeaveClubEventMutation, LeaveClubEventMutationVariables>(LeaveClubEventDocument);
};
export const UpdateEventAttendanceDocument = gql`
    mutation updateEventAttendance($memberId: String!, $attendance: clubMemberEventAttendanceEnum!) {
  updateEventAttendance(memberId: $memberId, attendance: $attendance) {
    ...EventMemberField
    user {
      ...UserField
    }
  }
}
    ${EventMemberFieldFragmentDoc}
${UserFieldFragmentDoc}`;

export function useUpdateEventAttendanceMutation() {
  return Urql.useMutation<UpdateEventAttendanceMutation, UpdateEventAttendanceMutationVariables>(UpdateEventAttendanceDocument);
};
export const GetUserSelectionsDocument = gql`
    query getUserSelections($cursor: UserWhereUniqueInput, $distinct: [UserScalarFieldEnum!], $orderBy: [UserOrderByWithRelationAndSearchRelevanceInput!], $skip: Int, $take: Int, $where: UserWhereInput) {
  findManyUser(
    cursor: $cursor
    distinct: $distinct
    orderBy: $orderBy
    skip: $skip
    take: $take
    where: $where
  ) {
    id
    username
  }
}
    `;

export function useGetUserSelectionsQuery(options: Omit<Urql.UseQueryArgs<never, GetUserSelectionsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUserSelectionsQuery>({ query: GetUserSelectionsDocument, ...options });
};
export const GetMeDocument = gql`
    query getMe {
  getMe {
    ...UserField
  }
}
    ${UserFieldFragmentDoc}`;

export function useGetMeQuery(options: Omit<Urql.UseQueryArgs<never, GetMeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetMeQuery>({ query: GetMeDocument, ...options });
};