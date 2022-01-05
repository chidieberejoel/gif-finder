import { ReactComponent as Next } from "../../assets/icons/left-direction-arrow.svg";
import { ReactComponent as Previous } from "../../assets/icons/right-direction-arrow.svg";
import "./Pagination.css";

const Pagination = (props) => {
  return (
    <div className="pagination-container">
      <div className="pagination">
        <div className="pagination-item-right">
          {props.hasPreviousPage && (
            <button
              className="pagination-item previous"
              onClick={props.previousClicked}
            >
              <div>
                <Previous />
              </div>
              <div>Previous</div>
            </button>
          )}
        </div>
        <div className="pagination-item-left">
          {props.hasNextPage && (
            <button
              className="pagination-item next"
              onClick={props.nextClicked}
            >
              <div>Next</div>
              <div>
                <Next />
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
