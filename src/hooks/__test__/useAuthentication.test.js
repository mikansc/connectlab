/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import * as contexts from "@contexts";
import { renderHook } from "@testing-library/react";
import { vi } from "vitest";
import { useAuthentication } from "../useAuthentication";

// setup services
vi.mock("@services", () => ({
  login: vi.fn().mockResolvedValue(),
  storageService: {
    get: vi.fn(),
    save: vi.fn(),
  },
}));

// setup contexts

vi.mock("@contexts", () => ({
  useAppContext: vi.fn().mockReturnValue({
    setStatus: {
      loading: vi.fn(),
      success: vi.fn(),
    },
  }),
}));

const render_useAuthentication = () => {
  const { result } = renderHook(useAuthentication);
  return result.current;
};

describe("@hooks/useAuthentication", () => {
  it("should return initial funcs correctly", () => {
    const { signIn, signOut, persistUser, retrieveUser } = render_useAuthentication();
    expect(signIn).toBeDefined();
    expect(signOut).toBeDefined();
    expect(persistUser).toBeDefined();
    expect(retrieveUser).toBeDefined();
  });

  it("should return initial props correctly", () => {
    const { isLoggedIn, user } = render_useAuthentication();
    expect(isLoggedIn).toBe(false);
    expect(user).toBeNull();
  });
});
