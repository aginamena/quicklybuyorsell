import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getUser } from "services/users";
import MainHeader from "./MainHeader";
import SubHeader from "./SubHeader";

export default function Header() {
  const location = useLocation();
  const [user, setUser] = useState({});

  useEffect(() => {
    //we're also watching the pathname of the url. we only want to display the SubHeader component in the root
    //page
    if (Object.keys(user).length == 0) {
      getUser(setUser);
    }
  }, [location.pathname]);

  return (
    <>
      <MainHeader user={user} setUser={setUser} />
      <div style={{ marginTop: "10px" }}></div>
      {location.pathname === "/" && <SubHeader />}
    </>
  );
}
