import React, { useState } from "react";
import { authClient } from "../../lib/auth-client";

export default function Users() {
  const [userRole, setRole] = useState("");
  const handleSubmit = async () => {
    const { data, error } = await authClient.admin.createUser({
      role: "",
    });
  };
  return <div>Users</div>;
}
