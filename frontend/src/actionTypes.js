//@flow

export type TokenPayload = {
  accessToken: string,
  exp: number,
  email: string
};

export type SignInPayload = TokenPayload & { id: string };

export type Action =
  | {
      type: "SIGN_IN",
      payload: SignInPayload
    }
  | { type: "SIGN_OUT" };
