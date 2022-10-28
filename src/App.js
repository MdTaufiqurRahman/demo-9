import { Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect } from "react";
import "./App.css";
import { useAxiosRequest } from "./common/hooks/useAxiosRequest";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  const postsApi = useAxiosRequest([]);
  // Functions
  const SalesData = () => {
    postsApi.apiAction({
      urlObjKey: "postsApi",
      method: "GET",
      isToast: true,
    });
  };

  useEffect(() => {
    SalesData();
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
                    <div className="card-body">
                      <h5 className="card-title">
                        {item?.id}. {item?.title}
                      </h5>
                      <Typography variant="h6" gutterBottom></Typography>
                      <Stack direction="row" spacing={2}>
                        <Button variant="contained" color="success">
                          Success
                        </Button>
                        <Button variant="contained">Add</Button>
                        <Button variant="contained" color="warning">
                          Warning
                        </Button>
                        <Button variant="contained" color="error">
                          Remove
                        </Button>
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
}

export default App;
