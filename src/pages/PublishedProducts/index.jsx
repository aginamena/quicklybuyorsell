import {
  Box,
  Button,
  Drawer,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import DisplayProducts from "components/DisplayProducts";
import RadioGroupCmp from "components/RadioGroupCmp";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getAllPublishedProducts } from "./util";

export default function PublishedProducts() {
  const { selectedCategory } = useParams();
  const [hasMore, setHasMore] = useState(true);

  const { data, fetchNextPage, status } = useInfiniteQuery({
    queryKey: ["PublishedProducts", selectedCategory],
    queryFn: ({ pageParam: productId }) =>
      getAllPublishedProducts(selectedCategory, productId, setHasMore),
    getNextPageParam: (lastPage) => {
      return lastPage[lastPage.length - 1]?.productId;
    },
  });

  if (status === "error") {
    alert("An error occured");
    return null;
  }

  const combinedPages = data?.pages.reduce((acc, page) => {
    return [...acc, ...page];
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: "300px",
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: "300px",
            boxSizing: "border-box",
            left: "20px",
          },
        }}
      >
        <Toolbar />
        <Typography
          variant="h5"
          style={{ margin: "30px 0", textAlign: "center" }}
        >
          Filter products
        </Typography>

        <Paper sx={{ padding: "20px", marginRight: "20px" }}>
          <Typography sx={{ marginBottom: "15px" }} variant="h6">
            Gender
          </Typography>
          <RadioGroupCmp values={["Male", "Female"]} />
        </Paper>

        <Paper sx={{ padding: "20px", marginTop: "30px", marginRight: "20px" }}>
          <Typography sx={{ marginBottom: "15px" }} variant="h6">
            Price
          </Typography>
          <TextField
            id="outlined-number"
            label="From"
            type="number"
            sx={{ width: "100px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <span>----</span>
          <TextField
            id="outlined-number"
            label="To"
            type="number"
            sx={{ width: "100px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button sx={{ marginTop: "30px", width: "100%" }} variant="outlined">
            Search
          </Button>
        </Paper>
        <Paper sx={{ padding: "20px", marginTop: "30px", marginRight: "20px" }}>
          <Typography sx={{ marginBottom: "15px" }} variant="h6">
            Condition
          </Typography>
          <RadioGroupCmp values={["New", "Used"]} />
        </Paper>
      </Drawer>

      <Box sx={{ width: "70%" }}>
        <Toolbar />
        {status === "loading" ? (
          <Typography>Loading...</Typography>
        ) : (
          <InfiniteScroll
            dataLength={combinedPages.length}
            next={fetchNextPage}
            hasMore={hasMore}
            loader={<Typography>Loading...</Typography>}
          >
            <DisplayProducts products={combinedPages} isPrivate={false} />
          </InfiniteScroll>
        )}
      </Box>
    </Box>
  );
}
