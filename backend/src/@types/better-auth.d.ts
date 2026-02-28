// src/types/better-auth.d.ts

import "better-auth";

// Define a reusable Role type for scalability (lowercase to match better-auth config)
type Role = "admin" | "agent" | "landlord" | "guest" | "renter";

declare module "better-auth" {
  interface User {
    role: Role | Role[];
  }
}

declare module "better-auth/api" {
  interface CreateUserBody {
    role?: Role | Role[];
  }
}
