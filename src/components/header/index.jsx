import { useEffect, useState } from "react";
import { getUser } from "services/auth";
import MainHeader from "./mainHeader";
import SubHeader from "./subheader";

export default function Header() {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(setUser);
  }, []);

  return (
    <>
      <MainHeader user={user} setUser={setUser} />
      <div style={{ marginTop: "10px" }}></div>
      <SubHeader />
    </>
  );
}
