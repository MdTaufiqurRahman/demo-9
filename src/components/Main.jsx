import React, { useEffect } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useAxiosRequest } from "../common/hooks/useAxiosRequest";

const Main = ({ handleClick }) => {
  const postsApi = useAxiosRequest([]);
  // Functions
  const LandingData = () => {
    postsApi.apiAction({
      urlObjKey: "postsApi",
      method: "GET",
      isToast: true,
    });
  };

  useEffect(() => {
    LandingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <Typography variant="h5" gutterBottom>
            Learn React
          </Typography>
          <div>
            <TextField
              id="outlined-basic"
              label="Search Results"
              variant="outlined"
              required
            />
          </div>
          {postsApi?.resData.map((item, index) => {
            return (
              <div className="col-md-4">
                <div className="card mt-2">
                  <img
                    className="card-img-top "
                    src={item?.img}
                    alt={item?.img}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item?.title}</h5>
                    <h6 className="card-title">$ {item?.price}</h6>
                    <Typography variant="h6" gutterBottom></Typography>
                    <Stack direction="row" spacing={2}>
                      <Button
                        onClick={() => handleClick(item)}
                        variant="contained"
                        color="success"
                      >
                        Add to cart
                      </Button>
                      {/* <Button variant="contained">Add</Button> */}
                      {/* <Button variant="contained" color="error">
                        Remove
                      </Button> */}
                    </Stack>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Main;
