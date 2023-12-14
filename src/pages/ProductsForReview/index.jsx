import { Container, Toolbar, Typography } from "@mui/material";
import DisplayProducts from "components/DisplayProducts";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import { getProductsForReview } from "./util";

export default function ProductsForReview() {
  const [hasMore, setHasMore] = useState(true);

  const { data, fetchNextPage, status } = useInfiniteQuery({
    queryKey: ["ProductForReview"],
    queryFn: ({ pageParam: productId }) =>
      getProductsForReview(productId, setHasMore),
    getNextPageParam: (lastPage) => lastPage[lastPage.length - 1]?.productId,
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
