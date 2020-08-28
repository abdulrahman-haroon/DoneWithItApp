import client from "./client";

const register = (name, email, password, onUploadProgress) => {
  return client.post(
    "/users",
    { name, email, password },
    {
      onUploadProgress: (progress) =>
        onUploadProgress(progress.loaded / progress.total),
    }
  );
};

export default {
  register,
};
