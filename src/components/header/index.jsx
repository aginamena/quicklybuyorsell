import { useEffect, useState } from "react";
import { getUser } from "services/users";
import MainHeader from "./MainHeader";
import SubHeader from "./SubHeader";

export default function Header() {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(setUser);
  }, []);

  const currentPage = window.location.pathname;
  return (
    <>
      <MainHeader user={user} setUser={setUser} />
      <div style={{ marginTop: "10px" }}></div>
      {currentPage === "/" && <SubHeader />}
    </>
  );
}
