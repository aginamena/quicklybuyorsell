import { auth, onAuthStateChanged } from "config/firebase";

export function getUser(setUser) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user.providerData[0]);
    } else setUser({});
  });
}
