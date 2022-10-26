import { useState } from 'react';
import axios from 'axios';
import { apiPath as allApiPath } from '../apiPath/apiPath';
import { toast } from "react-toastify";
// type actionType = {
//   cb?: (resData) => void;
//   method?: string;
//   payload?: any;
//   urlObjKey: string;
//   params?: {};
//   isToast?: boolean;
//   successMessage?: string;
//   errorMessage?: string;
// };
export const useAxiosRequest = (initData) => {
  const [reqResponse, setReqResponse] = useState({
    error: '',
    resData: initData || '',
    isLoading: false,
    success: '',
  });
  const resetData = () => {
    setReqResponse({
      error: '',
      resData: initData || '',
      isLoading: false,
      success: '',
    });
  };
  const apiAction = ({
    method,
    urlObjKey,
    params,
    payload,
    cb,
    isToast,
    successMessage,
    errorMessage,
  }) => {
    const url = allApiPath[urlObjKey];

    setReqResponse((prv) => ({
      ...prv,
      error: '',
      resData: initData || '',
      isLoading: true,
      success: '',
    }));
    axios({
      method: method ? method : 'get',
      url: url,
      data: payload && payload,
      params: params,
    })
      .then((res) => {
        setReqResponse((prv) => ({
          ...prv,
          error: '',
          resData: res?.data || initData,
          isLoading: false,
          success: res?.data?.message,
        }));
        cb && cb(res.data);
        if (isToast) {
          toast.success(
            successMessage || res?.data?.message || 'Submitted Successfully'
          );
        }
      })
      .catch((error) => {
        setReqResponse((prv) => ({
          ...prv,
          error: error,
          resData: initData || '',
          isLoading: false,
          success: '',
        }));
        if (isToast) {
          toast.error(
            errorMessage ||
            error?.response?.data?.message ||
            error?.response?.data?.Message ||
            'Failed, try again'
          );
        }
      });
  };

  const { error, resData, isLoading, success } = reqResponse;
  return { apiAction, resData, isLoading, error, success, resetData };
};

// ========example =============
// loginApiCall.apiAction({
//   urlObjKey: 'login',
//   method: 'POST',
//   payload: {
//     password: '1234',
//     username: 'taufiqur.anik.bd@gmail.com',
//   },
//   isToast: true,
//   modifiedRespons: (data) => {
//     data.email = 'jahed';
//   },
// });
