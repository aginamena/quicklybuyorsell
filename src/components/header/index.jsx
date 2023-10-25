import { auth, provider, signInWithPopup } from "config/firebase";
import { storeProfile } from "services/users";
import MainHeader from "./mainHeader";
import SubHeader from "./subheader";

export default function Header() {
  async function signInWithGoogle() {
    const result = await signInWithPopup(auth, provider);
    const { phoneNumber, uid, email, displayName, photoURL } = result.user;
    storeProfile({ phoneNumber, uid, email, displayName, photoURL });
  }
  return (
    <>
      <MainHeader signInWithGoogle={signInWithGoogle} />
      <div style={{ marginTop: "10px" }}></div>
      <SubHeader />
    </>
  );
}
