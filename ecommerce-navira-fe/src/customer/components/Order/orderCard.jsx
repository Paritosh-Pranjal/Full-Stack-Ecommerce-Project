import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/account/order/${5}`)}
      className="p-5 shadow-md shadow-black hover:shadow-2xl border "
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/5/w/o/l-vlsd-a0lt-vida-loca-original-imagay8hg3nydjuh-bb.jpeg?q=70"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p>Men Slim Mid Black Jeans</p>
              <p className=" opacity-50 text-xs font-semibold">Size: M</p>
              <p className=" opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>$1999</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  className="text-green-600 text-sm"
                  sx={{ width: "15px", height: "15px" }}
                />
                <span>Delivered on March 03 2024</span>
              </p>
              <p className="text-sm">Your Item has been delivered.</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivered on March 03 2024</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
