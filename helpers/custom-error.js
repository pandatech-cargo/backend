class ClientError extends Error {
  constructor(message, statusCode = 400) {
    super(message);

    if (this.constructor.name === "ClientError") {
      throw new Error("cannot instantiate abstract class");
    }

    this.statusCode = statusCode;
    this.name = "ClientError";
  }
}

class InvariantError extends ClientError {
  constructor(message) {
    super(message);
    this.name = "InvariantError";
  }
}

class AuthenticationError extends ClientError {
  constructor(message) {
    super(message, 401);
    this.name = "AuthenticationError";
  }
}

class AuthorizationError extends ClientError {
  constructor(message) {
    super(message, 403);
    this.name = "AuthorizationError";
  }
}

class NotFoundError extends ClientError {
  constructor(message) {
    super(message, 404);
    this.name = "NotFoundError";
  }
}

module.exports = {
  InvariantError,
  AuthenticationError,
  AuthorizationError,
  NotFoundError,
};
