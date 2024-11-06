import { Avatar, Box, Grid2, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid2 container spacing={2} gap={3}>
        <Grid2 item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid2>

        <Grid2 item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Ram</p>
              <p className="opacity-70">November 5, 2024</p>
            </div>
          </div>
          <Rating readOnly value={4.5} name="half-rating" precision={.5}/>
          <p>
            Nice Product. I Love this cloth
          </p>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default ProductReviewCard;
