import { axiosInstance } from './base';
import { LoginResult } from '../models/user';
import { getUniqueId } from 'react-native-device-info';

export class UsersApi {
  public static async loginApple(identityToken: string): Promise<LoginResult> {
    const res = await axiosInstance.post('/v1/users/login/apple', {
      identityToken,
    });
    return res.data;
  }

  public static async loginGoogle(identityToken: string): Promise<LoginResult> {
    const res = await axiosInstance.post('/v1/users/login/google', {
      identityToken,
    });
    return res.data;
  }

  public static async patchRegistrationToken(
    accessToken: string,
    registrationToken: string
  ): Promise<LoginResult> {
    const res = await axiosInstance.patch(
      '/v1/users/registration-token',
      {
        uuid: getUniqueId(),
        registrationToken,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data;
  }
}
