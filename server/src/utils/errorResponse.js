/* eslint-disable max-classes-per-file */
import { ApolloError } from "apollo-server-express";

export { ApolloError };

export class Unauthorized extends ApolloError {
  constructor(message, code, additionalProperties) {
    super(
      message || "You need to be authenticated to perform this action",
      code || "Unauthorized",
      additionalProperties,
    );
  }
}

export class Forbidden extends ApolloError {
  constructor(message, code, additionalProperties) {
    super(
      message || "You are forbidden from performing this action",
      code || "Forbidden",
      additionalProperties,
    );
  }
}

export class ValidationError extends ApolloError {
  constructor(message, code, additionalProperties) {
    super(
      message || "Kindly verify the input data",
      code || "ValidationFailed",
      additionalProperties,
    );
  }
}

export class UnexpectedError extends ApolloError {
  constructor(message, code, additionalProperties) {
    super(
      message || "An error occured. Kindly try again later.",
      code || "Unexpected",
      additionalProperties,
    );
  }
}
