import { AppDispatch } from "./store";
import { setUsers, setLoading, setError } from "./userSlice";

export const fetchUsers = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    dispatch(setError(null));

    try {
      const response = await fetch("/api/users");

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();

      dispatch(setUsers(data.data));
    } catch (error) {
      dispatch(
        setError(
          error instanceof Error
            ? error.message
            : "Something went wrong"
        )
      );
    } finally {
      dispatch(setLoading(false));
    }
  };
};