import { betterAuth } from "better-auth";

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!googleClientId || !googleClientSecret) {
  throw new Error("Google OAuth environment variables are not configured");
}

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,

  socialProviders: {
    google: {
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    },
  },
});