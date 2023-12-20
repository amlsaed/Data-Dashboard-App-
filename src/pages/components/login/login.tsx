import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Login() {
  const { data: session } = useSession();
  const avatar = session?.user?.image as string || ""
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email}
        <p>Welcome {session?.user?.name}</p>
        <Avatar srs={avatar} alt={session?.user?.name}/>
        <Button variant={"contained"} color={"error"} onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      <h2>Please log in</h2> <br />
      <Button variant={"contained"} color={"success"} onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
}

export default Login;
