import { Container, Toolbar, Typography } from "@mui/material";
import DisplayProducts from "components/DisplayProducts";
import { isUserAdmin } from "pages/util";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getAllProducts } from "./util";

export default function SellerProducts() {
  const { sellerEmail } = useParams();
  const [hasMore, setHasMore] = useState(true);
  const isAdmin = isUserAdmin();

  const { data, fetchNextPage, status } = useInfiniteQuery({
    queryKey: ["SellerProducts", sellerEmail],
    queryFn: ({ pageParam: productId }) =>
      getAllProducts(productId, setHasMore, sellerEmail, isAdmin),
    getNextPageParam: (lastPage) => lastPage[lastPage.length - 1].productId,
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
      ) : combinedPages.length == 0 ? (
        <Typography>
          {" "}
          Seller hasn't created any products or they are not live yet.
        </Typography>
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
