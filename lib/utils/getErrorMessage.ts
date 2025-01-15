export const getErrorMessage = (error: unknown) => {
  let message = "";
  if (
    error instanceof Error ||
    (error && typeof error === "object" && "message" in error)
  ) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }
  return message;
};
