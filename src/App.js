import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useAxiosRequest } from "./common/hooks/useAxiosRequest";
import Cart from "./components/Cart";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import PaginationPage from "./components/Pagination";
import Post from "./components/Post";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warnings, setWarnings] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [posts, setPosts] = useState([]);

  const handleClick = (event) => {
    let cartIsPresent = false;
    cart?.forEach((product) => {
      if (event._id === product._id) cartIsPresent = true;
    });
    if (cartIsPresent) {
      setWarnings(true);
      setTimeout(() => {
        setWarnings(false);
      }, 2000);
      return;
    }
    setCart([...cart, event]);
  };
  // For Pagination
  const paginationApi = useAxiosRequest([]);
  // Functions
  const PaginationData = () => {
    paginationApi.apiAction({
      urlObjKey: "paginationApi",
      method: "GET",
      isToast: true,
      cb: (resData) => {
        setPosts(resData);
      },
    });
  };

  useEffect(() => {
    PaginationData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <NavBar size={cart?.length} setShow={setShow} />
      <Post posts={currentPosts} />
      <PaginationPage
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      {show ? (
        <Main handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}

      {warnings && <div className="warning">Already Added This Product</div>}
    </>
  );
}

export default App;
