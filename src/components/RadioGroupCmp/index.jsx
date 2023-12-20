import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import { useState } from "react";

export default function RadioGroupCmp({
  values,
  name,
  setFilter,
  previousValue,
}) {
  const [value, setValue] = useState(previousValue);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: selectedValue }));
    setValue(selectedValue);
  };

  function clear() {
    setValue("");
    setFilter((prevFilter) => {
      const clonedFilter = { ...prevFilter };
      delete clonedFilter[name];
      return clonedFilter;
    });
  }

  return (
    <>
      <FormControl>
        <RadioGroup value={value} onChange={handleChange}>
          {values.map((value, index) => (
            <FormControlLabel
              key={index}
              value={value}
              control={<Radio />}
              label={value}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Box sx={{ textAlign: "right" }}>
        <Button onClick={clear}>Clear</Button>
      </Box>
    </>
  );
}
