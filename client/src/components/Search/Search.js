import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import checkValidity from "../../utilities/checkValidity";
import updateObject from "../../utilities/updateObject";
import "./Search.css";

const Search = () => {
  const history = useHistory();
  const location = useLocation();

  const [text, setText] = useState({
    elementConfig: {
      type: "search",
      name: "q",
      placeholder: "Search for your favorite gifs...",
      maxLength: "50",
    },
    value: "",
    validation: {
      required: true,
      maxLength: 50,
    },
    valid: false,
  });

  const inputChangedHandler = (event) => {
    const { value } = event.target;
    setText(
      updateObject(text, {
        value: value,
        valid: checkValidity(value, text.validation),
      })
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (text.valid) {
      const params = new URLSearchParams({
        [text.elementConfig.name]: text.value.trim(),
      });
      history.replace({
        pathname: location.pathname,
        search: params.toString(),
      });
    }
  };

  return (
    <>
      <div className="search">
        <div className="search-container">
          <div className="search-input">
            <div className="search-input-content">
              <span className="form-input">
                <form onSubmit={submitHandler}>
                  <input
                    {...text.elementConfig}
                    value={text.value}
                    onChange={inputChangedHandler}
                  />
                </form>
              </span>
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
