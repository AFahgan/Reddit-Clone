const CustomError = (message, status) => {
    const serverError = new Error(message);
    serverError.status = status;
    return serverError;
  };
  module.exports = CustomError;