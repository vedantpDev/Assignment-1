import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataAction, searchAction } from "../Action/action";
import "../css/Booklist.css";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router";
import { logOut } from "../Action/action";

const Booklist = () => {
  const navigate = useNavigate();
  const { data, loading } = useSelector((store) => store.bookData);
  const dispatch = useDispatch();

  const [getData, setGetData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  useEffect(() => {
    setGetData(data);
  }, [data]);

  const searchHandler = () => {
    dispatch(searchAction({ searchValue: search }));
  };

  const changeHandler = (e) => {
    let value = e.target.value;
    setSearch(value);
  };

  const Logout = () => {
    dispatch(logOut());
    localStorage.removeItem("auth-token");
    navigate("/login");
  };

  return (
    <>
      <div className="search-class">
        <input
          className=" me-2"
          style={{ borderRadius: " 8px" }}
          type="search"
          placeholder="Search"
          aria-label="Search"
          name="search"
          onChange={changeHandler}
        />

        <Tooltip title="Search">
          <Button
            variant="contained"
            onClick={searchHandler}
            type="button"
            className="btn btn-primary"
          >
            <SearchIcon />
          </Button>
        </Tooltip>
      </div>
      <div className="container-div">
        {loading ? (
          <CircularProgress color="secondary" />
        ) : getData.length === 0 ? (
          "No Records Found!!"
        ) : (
          <>
            {Array.from(getData).map((data, i) => {
              return (
                <div className="print-data" key={i}>
                  <p>{data.name}</p>
                  <p>{data.author}</p>
                  <p>{data.price}</p>
                  <p>{data.isbn}</p>
                </div>
              );
            })}
          </>
        )}
      </div>
      <Tooltip title="Logout" className="logout-btn">
        <button
          onClick={Logout}
          className="btn btn-danger"
          style={{ marginLeft: "15px" }}
        >
          <LogoutIcon />
        </button>
      </Tooltip>
    </>
  );
};

export default Booklist;
