import {
  Typography,
  Stack,
  Divider,
  Box,
  TextField,
  useMediaQuery,
  Button,
} from "@mui/material";
import SelectCmp from "components/SelectCmp";
import {
  getAllCategoryNames,
  getTypeOfCategoryName,
} from "structure/categories";
import SendIcon from "@mui/icons-material/Send";
import { PostImage } from "./style";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { useTheme } from "@mui/material/styles";
import { createProduct } from "./util";

export default function CreateProducts() {
  const [specification, setSpecification] = useState({ images: [] });

  const theme = useTheme();

  const ismediumScreenSizeAndBelow = useMediaQuery(
    theme.breakpoints.down("md")
  );

  function addImages(newImage) {
    const MAXIMUM_NUMBER_OF_IMAGES = 6;
    if (specification.images.length < MAXIMUM_NUMBER_OF_IMAGES) {
      setSpecification({
        ...specification,
        images: [...specification.images, newImage],
      });
    } else {
      alert("Maximum number of images reached");
    }
  }
  function removeImages(index) {
    setSpecification({
      ...specification,
      images: specification.images.filter((_, i) => i !== index),
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const MINIMUM_LENGTH_OF_DESCRIPTION = 150;
    if (specification.Description.length < 150) {
      alert(
        `Description should be more than ${MINIMUM_LENGTH_OF_DESCRIPTION} characters`
      );
      return;
    }
    if (
      specification.Type &&
      !getTypeOfCategoryName(specification.Category).includes(
        specification.Type
      )
    ) {
      alert("Select the right type of category");
      return;
    }

    createProduct(specification);
    console.log(specification);
  }

  return (
    <form data-testid="Create Products Cmp" onSubmit={handleSubmit}>
      <Typography style={{ marginBottom: "20px" }}>Product category</Typography>
      <SelectCmp
        name="Select category"
        menuItems={getAllCategoryNames()}
        handleSelect={(value) =>
          setSpecification({
            ...specification,
            category: value,
          })
        }
      />
      {specification.Category &&
        getTypeOfCategoryName(specification.Category).length > 0 && (
          <div style={{ marginTop: "20px" }}>
            <SelectCmp
              name="Type"
              menuItems={getTypeOfCategoryName(specification.Category)}
              handleSelect={(value) =>
                setSpecification({
                  ...specification,
                  type: value,
                })
              }
            />
          </div>
        )}

      <Box style={{ marginTop: "30px", marginBottom: "30px" }}>
        <Typography style={{ marginBottom: "10px" }}>
          Product image(s)
        </Typography>
        <PostImage>
          <Box>
            <input
              type="file"
              data-testid="image"
              accept="image/jpeg, image/png"
              onChange={(e) => addImages(e.target.files[0])}
              required
            />

            <Typography>
              Add some images. You can add up to 6 images. Jpeg or Png only.
            </Typography>
          </Box>
        </PostImage>
        <Divider />
        <Stack
          direction={ismediumScreenSizeAndBelow ? "column" : "row"}
          spacing={2}
        >
          {specification.images.map((image, index) => (
            <Box
              key={index}
              style={{
                width: "200px",
                height: "200px",
                backgroundColor: "black",
                position: "relative",
              }}
            >
              <img
                src={URL.createObjectURL(image)}
                alt="Posting preview"
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: "0.7",
                }}
              />
              <div onClick={() => removeImages(index)}>
                <ClearIcon
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "10px",
                    cursor: "pointer",
                  }}
                  role=""
                  fontSize="large"
                />
              </div>
            </Box>
          ))}
        </Stack>
      </Box>

      <Typography style={{ marginBottom: "10px" }}>Product details</Typography>

      <TextField
        required
        label="Product title"
        variant="outlined"
        value={specification.Title}
        data-testid="title"
        fullWidth
        onChange={(e) =>
          setSpecification({
            ...specification,
            title: e.target.value,
          })
        }
      />
      <TextField
        required
        type="number"
        data-testid="amount"
        value={specification.Amount}
        style={{ marginTop: "30px", marginBottom: "30px" }}
        fullWidth
        inputProps={{ min: "0", step: "any", "data-testid": "setAmount" }}
        onChange={(e) =>
          setSpecification({
            ...specification,
            amount: e.target.value,
          })
        }
        label="Price (NGN)"
      />
      <TextField
        required
        name="Product description"
        variant="outlined"
        data-testid="description"
        fullWidth
        inputProps={{ "data-testid": "Product description" }}
        multiline
        value={specification.Description}
        rows={5}
        placeholder="What other details do you want buyers to know about?"
        onChange={(e) =>
          setSpecification({
            ...specification,
            description: e.target.value,
          })
        }
      />
      <Box style={{ marginTop: "40px", marginBottom: "30px" }}>
        <Button
          variant="outlined"
          endIcon={<SendIcon />}
          type="submit"
          role="submitBtn"
        >
          Create post
        </Button>
      </Box>
    </form>
  );
}
