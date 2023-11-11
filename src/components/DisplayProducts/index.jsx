import { Grid } from "@mui/material";
import Displaycard from "components/Card";
import PropTypes from "prop-types";

export default function DisplayProducts({ products, isPrivate }) {
  return (
    <Grid container spacing={2}>
      {products.map(
        ({ amount, title, files, productId, productStatus }, index) => (
          <Grid key={index} item>
            <Displaycard
              productId={productId}
              amount={amount}
              title={title}
              imagePath={files[0]}
              isPrivate={isPrivate}
              productStatus={productStatus}
            />
          </Grid>
        )
      )}
    </Grid>
  );
}

DisplayProducts.propTypes = {
  products: PropTypes.array.isRequired,
  isPrivate: PropTypes.bool.isRequired,
};
