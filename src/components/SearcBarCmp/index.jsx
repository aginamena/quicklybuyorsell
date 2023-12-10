import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import algoliasearch from "algoliasearch/lite";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch-hooks-web";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const StyledSearchBox = styled(SearchBox)(({ theme }) => ({
  "& .ais-SearchBox-input": {
    width: "600px",
    //   width: ismediumScreenSizeAndBelow ? "90%" : "600px",
    height: "40PX",
    paddingLeft: "20px",
    paddingRight: "10px",
    fontSize: "16px",
    letterSpacing: "1.5px",
  },
  "& .ais-SearchBox-form": {
    display: "flex",
    justifyContent: "center",
  },
  [theme.breakpoints.down("md")]: {
    "& .ais-SearchBox-input": {
      width: "90%",
    },
  },
}));

//algolia credentials
const searchClient = algoliasearch(
  process.env.REACT_APP_ALOGLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY
);

export default function SearchBarCmp() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openSearchBar, setOpenSearchBar] = useState(false);

  const navigate = useNavigate();

  return (
    <Box style={{ position: "relative" }}>
      <InstantSearch
        searchClient={searchClient}
        indexName="products"
        future={{ preserveSharedStateOnUnmount: false }}
      >
        <StyledSearchBox
          onInput={(e) => {
            setSearchQuery(e.target.value);
            setOpenSearchBar(true);
          }}
          placeholder="I am looking for..."
        />
        {searchQuery.length > 0 && openSearchBar && (
          <Paper
            sx={{
              position: "absolute",
              width: "100%",
              zIndex: "2000",
              height: "400px",
              overflow: "auto",
            }}
          >
            <List>
              <Hits
                hitComponent={({ hit }) => (
                  <ListItem disablePadding component="div">
                    <ListItemButton
                      onClick={() => {
                        setOpenSearchBar(false);
                        navigate(`product-details/${hit.productId}`);
                      }}
                    >
                      <ListItemText primary={hit.title} />
                    </ListItemButton>
                  </ListItem>
                )}
              />
            </List>
          </Paper>
        )}
      </InstantSearch>
    </Box>
  );
}
