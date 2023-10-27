import { useEffect, useState } from "react";
import { getUser } from "services/auth";
import MainHeader from "./MainHeader";
import SubHeader from "./SubHeader";

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
