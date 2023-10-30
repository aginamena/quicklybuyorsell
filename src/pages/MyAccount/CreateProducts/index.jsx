import SelectCmp from "components/SelectCmp";

export default function CreateProducts() {
  return (
    <div data-testid="Create Products Cmp">
      <SelectCmp name="Category" menuItems={["first", "second", "third"]} />
    </div>
  );
}
