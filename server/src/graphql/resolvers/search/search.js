import searchResult from "../../../utils/giphySearch";
import indexFromCursor from "../../../utils/indexFromCursor";
import { UnexpectedError } from "../../../utils/errorResponse";

export default async (_root, args) => {
  const {
    before, after, first, last, query,
  } = args;

  try {
    const result = await searchResult(query);
    if (result.status !== 200 || result.data.meta.status !== 200) {
      throw new UnexpectedError(
        "An Error occured while retreiving images, kindly try again later.",
      );
    }

    const resultArray = result.data.data;

    const sliceStart = 0;
    const arrayLength = resultArray.length;
    const sliceEnd = sliceStart + resultArray.length;

    const beforeOffset = before
      ? indexFromCursor(resultArray, before)
      : arrayLength;
    const afterOffset = after ? indexFromCursor(resultArray, after) : -1;

    let startOffset = Math.max(sliceStart - 1, afterOffset, -1) + 1;
    let endOffset = Math.min(sliceEnd, beforeOffset, arrayLength);

    if (first) {
      if (first < 0) { throw new Error("Argument 'first' must both be a non-negative integer"); }
      endOffset = Math.min(endOffset, startOffset + first);
    }

    if (last) {
      if (last < 0) { throw new Error("Argument 'last' must both be a non-negative integer"); }
      startOffset = Math.max(startOffset, endOffset - last);
    }

    const slice = resultArray.slice(
      Math.max(startOffset - sliceStart, 0),
      resultArray.length - (sliceEnd - endOffset),
    );

    const edges = slice.map((value, index) => ({
      cursor: resultArray[startOffset + index].id,
      node: value,
    }));

    const startCursor = edges[0]?.cursor || null;
    const endCursor = edges[edges.length - 1]?.cursor || null;
    const lowerBound = after ? afterOffset + 1 : 0;
    const upperBound = before ? beforeOffset : arrayLength;

    return {
      edges,
      pageInfo: {
        startCursor,
        endCursor,
        hasPreviousPage: last
          ? startOffset > lowerBound
          : indexFromCursor(resultArray, startCursor) > 0,
        hasNextPage: first
          ? endOffset < upperBound
          : indexFromCursor(resultArray, endCursor) + 1 < arrayLength,
        total: arrayLength,
      },
    };
  } catch (error) {
    throw new UnexpectedError(
      error.message
        || "Unable to fetch images at this time, Kindly try again later.",
    );
  }
};
