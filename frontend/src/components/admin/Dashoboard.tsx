import React from "react";
import { authClient } from "../../lib/auth-client";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

function Dashoboard() {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const navigate = useNavigate();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => navigate("/"),
      },
    });
  };
  return (
    <div>
      <h1>welcome to dashboard</h1>
      <div>
        <p>{user?.email}</p>
        <p>{user?.name}</p>
        <img src={user?.image} alt="" />
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
}

export default Dashoboard;
