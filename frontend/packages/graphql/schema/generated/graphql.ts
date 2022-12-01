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

export enum ClubAdminStatusEnum {
  Active = 'ACTIVE',
  InReview = 'IN_REVIEW',
  Retired = 'RETIRED'
}

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
  id: Scalars['ID'];
  memberOnly: Scalars['Boolean'];
  name: Scalars['String'];
  startAt: Scalars['DateTime'];
  status: ClubEventStatusEnum;
  thumbnail?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type ClubEventCount = {
  __typename?: 'ClubEventCount';
  clubEventMember: Scalars['Int'];
};

export type ClubEventCreateManyClubInput = {
  changed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  endAt: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  memberOnly?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
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
  id?: InputMaybe<Scalars['String']>;
  memberOnly?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
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
  id?: InputMaybe<Scalars['String']>;
  memberOnly?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
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
  event: ClubEvent;
  eventId: Scalars['String'];
  id: Scalars['ID'];
  status: ClubMemberEventStatusEnum;
  user: User;
  userId: Scalars['String'];
};

export type ClubEventMemberCreateManyEventInput = {
  attendance?: InputMaybe<ClubMemberEventAttendanceEnum>;
  id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ClubMemberEventStatusEnum>;
  userId: Scalars['String'];
};

export type ClubEventMemberCreateManyEventInputEnvelope = {
  data: Array<ClubEventMemberCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubEventMemberCreateManyUserInput = {
  attendance?: InputMaybe<ClubMemberEventAttendanceEnum>;
  eventId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ClubMemberEventStatusEnum>;
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
  id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ClubMemberEventStatusEnum>;
  user: UserCreateNestedOneWithoutClubEventMemberInput;
};

export type ClubEventMemberCreateWithoutUserInput = {
  attendance?: InputMaybe<ClubMemberEventAttendanceEnum>;
  event: ClubEventCreateNestedOneWithoutClubEventMemberInput;
  id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ClubMemberEventStatusEnum>;
};

export type ClubEventMemberListRelationFilter = {
  every?: InputMaybe<ClubEventMemberWhereInput>;
  none?: InputMaybe<ClubEventMemberWhereInput>;
  some?: InputMaybe<ClubEventMemberWhereInput>;
};

export type ClubEventMemberOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ClubEventMemberWhereInput = {
  AND?: InputMaybe<Array<ClubEventMemberWhereInput>>;
  NOT?: InputMaybe<Array<ClubEventMemberWhereInput>>;
  OR?: InputMaybe<Array<ClubEventMemberWhereInput>>;
  attendance?: InputMaybe<EnumClubMemberEventAttendanceEnumFilter>;
  event?: InputMaybe<ClubEventRelationFilter>;
  eventId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumClubMemberEventStatusEnumFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ClubEventMemberWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ClubEventOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ClubEventRelationFilter = {
  is?: InputMaybe<ClubEventWhereInput>;
  isNot?: InputMaybe<ClubEventWhereInput>;
};

export enum ClubEventStatusEnum {
  Awaiting = 'AWAITING',
  Cancelled = 'CANCELLED',
  InReview = 'IN_REVIEW',
  Ongoing = 'ONGOING'
}

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
  id?: InputMaybe<StringFilter>;
  memberOnly?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
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
  status: ClubMemberStatusEnum;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type ClubMemberCreateManyClubInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
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
  status: ClubMemberStatusEnum;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutClubMemberInput;
};

export type ClubMemberCreateWithoutUserInput = {
  club: ClubCreateNestedOneWithoutClubMemberInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
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

export enum ClubMemberStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Left = 'LEFT',
  Premium = 'PREMIUM'
}

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

export type EnumClubAdminRoleEnumFilter = {
  equals?: InputMaybe<ClubAdminRoleEnum>;
  in?: InputMaybe<Array<ClubAdminRoleEnum>>;
  not?: InputMaybe<NestedEnumClubAdminRoleEnumFilter>;
  notIn?: InputMaybe<Array<ClubAdminRoleEnum>>;
};

export type EnumClubAdminStatusEnumFilter = {
  equals?: InputMaybe<ClubAdminStatusEnum>;
  in?: InputMaybe<Array<ClubAdminStatusEnum>>;
  not?: InputMaybe<NestedEnumClubAdminStatusEnumFilter>;
  notIn?: InputMaybe<Array<ClubAdminStatusEnum>>;
};

export type EnumClubEventStatusEnumFilter = {
  equals?: InputMaybe<ClubEventStatusEnum>;
  in?: InputMaybe<Array<ClubEventStatusEnum>>;
  not?: InputMaybe<NestedEnumClubEventStatusEnumFilter>;
  notIn?: InputMaybe<Array<ClubEventStatusEnum>>;
};

export type EnumClubMemberEventAttendanceEnumFilter = {
  equals?: InputMaybe<ClubMemberEventAttendanceEnum>;
  in?: InputMaybe<Array<ClubMemberEventAttendanceEnum>>;
  not?: InputMaybe<NestedEnumClubMemberEventAttendanceEnumFilter>;
  notIn?: InputMaybe<Array<ClubMemberEventAttendanceEnum>>;
};

export type EnumClubMemberEventStatusEnumFilter = {
  equals?: InputMaybe<ClubMemberEventStatusEnum>;
  in?: InputMaybe<Array<ClubMemberEventStatusEnum>>;
  not?: InputMaybe<NestedEnumClubMemberEventStatusEnumFilter>;
  notIn?: InputMaybe<Array<ClubMemberEventStatusEnum>>;
};

export type EnumClubMemberStatusEnumFilter = {
  equals?: InputMaybe<ClubMemberStatusEnum>;
  in?: InputMaybe<Array<ClubMemberStatusEnum>>;
  not?: InputMaybe<NestedEnumClubMemberStatusEnumFilter>;
  notIn?: InputMaybe<Array<ClubMemberStatusEnum>>;
};

export type EnumClubStatusEnumFilter = {
  equals?: InputMaybe<ClubStatusEnum>;
  in?: InputMaybe<Array<ClubStatusEnum>>;
  not?: InputMaybe<NestedEnumClubStatusEnumFilter>;
  notIn?: InputMaybe<Array<ClubStatusEnum>>;
};

export type EnumRequestStatusEnumFilter = {
  equals?: InputMaybe<RequestStatusEnum>;
  in?: InputMaybe<Array<RequestStatusEnum>>;
  not?: InputMaybe<NestedEnumRequestStatusEnumFilter>;
  notIn?: InputMaybe<Array<RequestStatusEnum>>;
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
  createClubInfoChangeRequest: ClubInfoChangeRequest;
  createOneClub: Club;
  loginClubAdmin: Token;
  loginSuperAdmin: Token;
  loginUser: Token;
  updateClubInfoChangeRequestStatus: ClubInfoChangeRequest;
  userSignUp: Token;
};


export type MutationCreateClubInfoChangeRequestArgs = {
  data: ClubInfoChangeRequestCreateInput;
};


export type MutationCreateOneClubArgs = {
  data: ClubCreateInput;
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


export type MutationUpdateClubInfoChangeRequestStatusArgs = {
  data: UpdateInfoChangeRequestStatusInput;
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

export type Query = {
  __typename?: 'Query';
  clubTotalCount: Scalars['Int'];
  findManyClub: Array<Club>;
  findManyUser: Array<User>;
  findOneClub: Club;
  findOneUser: User;
};


export type QueryFindManyClubArgs = {
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubWhereInput>;
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


export type QueryFindOneUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

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

export type TokenFragmentFragment = { __typename?: 'Token', accessToken: string, refreshToken: string };

export type ClubAdminFieldFragment = { __typename?: 'ClubAdmin', id: string, clubAdminStatus: ClubAdminStatusEnum, clubId: string, createdAt: any, role: ClubAdminRoleEnum, roleLabel: string, updatedAt: any, userId: string };

export type FindManyClubQueryVariables = Exact<{
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum> | ClubScalarFieldEnum>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationAndSearchRelevanceInput> | ClubOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubWhereInput>;
}>;


export type FindManyClubQuery = { __typename?: 'Query', findManyClub: Array<{ __typename?: 'Club', id: string, createdAt: any, description: string, name: string, status: ClubStatusEnum, updatedAt: any, label: string }> };

export type ClubTotalCountQueryVariables = Exact<{ [key: string]: never; }>;


export type ClubTotalCountQuery = { __typename?: 'Query', clubTotalCount: number };

export type CreateOneClubMutationVariables = Exact<{
  data: ClubCreateInput;
}>;


export type CreateOneClubMutation = { __typename?: 'Mutation', createOneClub: { __typename?: 'Club', id: string, createdAt: any, description: string, name: string, status: ClubStatusEnum, updatedAt: any, label: string, clubAdmin?: Array<{ __typename?: 'ClubAdmin', id: string, clubAdminStatus: ClubAdminStatusEnum, clubId: string, createdAt: any, role: ClubAdminRoleEnum, roleLabel: string, updatedAt: any, userId: string }> | null } };

export type ClubFieldFragment = { __typename?: 'Club', id: string, createdAt: any, description: string, name: string, status: ClubStatusEnum, updatedAt: any, label: string };

export type GetUserSelectionsQueryVariables = Exact<{
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum> | UserScalarFieldEnum>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationAndSearchRelevanceInput> | UserOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
}>;


export type GetUserSelectionsQuery = { __typename?: 'Query', findManyUser: Array<{ __typename?: 'User', id: string, username: string }> };

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
export const ClubTotalCountDocument = gql`
    query clubTotalCount {
  clubTotalCount
}
    `;

export function useClubTotalCountQuery(options: Omit<Urql.UseQueryArgs<never, ClubTotalCountQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ClubTotalCountQuery>({ query: ClubTotalCountDocument, ...options });
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