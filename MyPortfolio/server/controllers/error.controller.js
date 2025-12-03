function handleError(req, res) {
  // Generic error handler (not used directly in controllers here)
  return res.status(500).json({ error: "Server error" });
}

function getErrorMessage(err) {
  // If Mongoose validation error, return the first message
  if (!err) return "Unknown error";

  if (err.errors) {
    const firstKey = Object.keys(err.errors)[0];
    if (firstKey && err.errors[firstKey].message)
      return err.errors[firstKey].message;
  }

  // Fallback to message or string representation
  if (err.message) return err.message;
  try {
    return String(err);
  } catch (e) {
    return "An error occurred";
  }
}

export default {
  handleError,
  getErrorMessage,
};
