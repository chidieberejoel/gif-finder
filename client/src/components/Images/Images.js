import React, { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { useLocation } from "react-router";
import { SEARCH_GIFS } from "../../utilities/queries";
import { limitText } from "../../utilities/formatText";
import ImageItem from "./ImageItem/ImageItem";
import NoResults from "../Layout/NoResult/NoResults";
import Error from "../Layout/Error/Error";
import Spinner from "../Layout/Spinner/Spinner";
import Home from "../Home/Home";
import Pagination from "../Pagination/Pagination";
import "./Images.css";

const ITEMS_PER_PAGE = 10;
const DELAY = true;

const Images = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  const { error, data, loading, variables, fetchMore } = useQuery(SEARCH_GIFS, {
    variables: { query: query, first: ITEMS_PER_PAGE, delay: DELAY },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  });

  if (!variables.query) return <Home />;

  if (error) return <Error message={error.message} />;

  if (loading || !data) return <Spinner />;

  return (
    <Fragment>
      <div className="images">
        <div className="search-result-title">
          <h1 className="search-result-header">{variables.query}</h1>
          <p className="search-result-description">
            {data.search.pageInfo.total > 0 && "Browse through"}{" "}
            {data.search.pageInfo.total} available{" "}
            <span className="search-result-query">
              {" "}
              {limitText(variables.query)}{" "}
            </span>
            Gifs
          </p>
        </div>
        <div className="image-content">
          {data.search.edges.length <= 0 ? (
            <NoResults />
          ) : (
            <ul>
              {data?.search &&
                data.search.edges.map(({ node }) => (
                  <ImageItem
                    key={node.id}
                    url={node.url}
                    type={node.type}
                    title={node.title}
                    imageUrl={node.images.downsized.url}
                    rating={node.rating}
                    uploader={node.user}
                  />
                ))}
            </ul>
          )}
        </div>
      </div>
      {data.search.pageInfo && (
        <Pagination
          hasNextPage={data.search.pageInfo.hasNextPage}
          hasPreviousPage={data.search.pageInfo.hasPreviousPage}
          nextClicked={() =>
            fetchMore({
              variables: {
                delay: DELAY,
                last: null,
                before: null,
                first: ITEMS_PER_PAGE,
                after: data.search.pageInfo.endCursor,
              },
            })
          }
          previousClicked={() =>
            fetchMore({
              variables: {
                delay: DELAY,
                first: null,
                after: null,
                last: ITEMS_PER_PAGE,
                before: data.search.pageInfo.startCursor,
              },
            })
          }
        />
      )}
    </Fragment>
  );
};

export default Images;
