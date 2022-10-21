import { UserRoleEnum } from '@core/src/common/roles.enum';

export interface JwtDto {
  userId: string;
  /**
   * Issued at
   */
  role: UserRoleEnum;

  iat: number;
  /**
   * Expiration time
   */
  exp: number;
}
