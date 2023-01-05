/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import { storageService } from "@services";
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

  describe("when it has no user authenticated", () => {
    it("should return initial props correctly", () => {
      const { isLoggedIn, user } = render_useAuthentication();
      expect(isLoggedIn).toBe(false);
      expect(user).toBeNull();
    });
  });

  describe("when it has an authenticated user", () => {
    it("should return initial props correctly", () => {
      storageService.get.mockReturnValue({ user: "user", accessToken: "token" });
      const { user, isLoggedIn } = render_useAuthentication();
      expect(isLoggedIn).toBe(true);
      expect(user).toEqual({ user: "sser", accessToken: "token" }); // broken... testing CI params
    });
  });
});
