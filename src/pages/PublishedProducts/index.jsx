import { Container, Toolbar, Typography } from "@mui/material";
import DisplayProducts from "components/DisplayProducts";
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
    <Container>
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
    </Container>
  );
}
