import MainHeader from "./mainheader";
import SubHeader from "./subheader";

export default function Header() {
  return (
    <>
      <MainHeader />
      <div style={{ marginTop: "10px" }}></div>
      <SubHeader />
    </>
  );
}
