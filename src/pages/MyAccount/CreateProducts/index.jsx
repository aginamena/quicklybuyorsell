import ClearIcon from "@mui/icons-material/Clear";
import SendIcon from "@mui/icons-material/Send";
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import SelectCmp from "components/SelectCmp";
import { useState } from "react";
import {
  getAllCategoryNames,
  getTypeOfCategoryName,
} from "structure/categories";
import { PostImage } from "./style";
import { createProduct } from "./util";
import BackdropCmp from "components/BackdropCmp";
import SnackbarCmp from "components/SnackbarCmp";

export default function CreateProducts() {
  const [specification, setSpecification] = useState({ files: [] });
  const [loadingProgress, setLoadingProgress] = useState({
    loadingHasStarted: false,
    loadingHasEnded: false,
  });

  const theme = useTheme();

  const ismediumScreenSizeAndBelow = useMediaQuery(
    theme.breakpoints.down("md")
  );

  function addFile(newFile) {
    console.log(newFile.type);
    const MAXIMUM_NUMBER_OF_FILES = 10;
    if (specification.files.length < MAXIMUM_NUMBER_OF_FILES) {
      setSpecification({
        ...specification,
        files: [...specification.files, newFile],
      });
    } else {
      alert("Maximum number of files reached");
    }
  }
  function removeFile(index) {
    setSpecification({
      ...specification,
      files: specification.files.filter((_, i) => i !== index),
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const minimumLengthOfDescription = 150;
    const maximumLengthOfTitle = 64;
    if (specification.description.length < 150) {
      alert(
        `Description should be more than ${minimumLengthOfDescription} characters`
      );
      return;
    }
    if (specification.title.length > maximumLengthOfTitle) {
      alert(`Title should be less than ${maximumLengthOfTitle} characters`);
      return;
    }
    if (
      specification.type &&
      !getTypeOfCategoryName(specification.category).includes(
        specification.type
      )
    ) {
      alert("Select the right type of category");
      return;
    }
    try {
      setLoadingProgress({
        loadingHasStarted: true,
        loadingHasEnded: false,
      });
      await createProduct(specification);
      setLoadingProgress({
        loadingHasStarted: false,
        loadingHasEnded: true,
      });
    } catch (error) {
      console.log(error);
      alert("An error occured");
      setLoadingProgress({
        loadingHasStarted: false,
        loadingHasEnded: false,
      });
    }
  }

  return (
    <>
      <form data-testid="Create Products Cmp" onSubmit={handleSubmit}>
        <Typography style={{ marginBottom: "20px" }}>
          Product category
        </Typography>
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
        {specification.category &&
          getTypeOfCategoryName(specification.category).length > 0 && (
            <div style={{ marginTop: "20px" }}>
              <SelectCmp
                name="Type"
                menuItems={getTypeOfCategoryName(specification.category)}
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
                accept="image/jpeg, image/png, video/mp4"
                onChange={(e) => addFile(e.target.files[0])}
                required
              />

              <Typography>
                Add image and video files of your product. You can add up to 10
                files. Jpeg or Png or mp4 only
              </Typography>
            </Box>
          </PostImage>
          <Divider />
          <Stack
            direction={ismediumScreenSizeAndBelow ? "column" : "row"}
            spacing={2}
          >
            {specification.files.map((file, index) => (
              <Box
                key={index}
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "black",
                  position: "relative",
                }}
              >
                {file.type === "image/jpeg" || file.type === "image/png" ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt="Posting preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      opacity: "0.7",
                    }}
                  />
                ) : (
                  <video
                    controls
                    style={{
                      width: "100%",
                      height: "100%",
                      opacity: "0.7",
                    }}
                  >
                    <source src={URL.createObjectURL(file)} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}

                <div onClick={() => removeFile(index)}>
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

        <Typography style={{ marginBottom: "10px" }}>
          Product details
        </Typography>

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
        {loadingProgress.loadingHasStarted && <BackdropCmp />}
        {loadingProgress.loadingHasEnded && (
          <SnackbarCmp message="Your post has been created! Go to View Products to see your products!" />
        )}
      </form>
    </>
  );
}
