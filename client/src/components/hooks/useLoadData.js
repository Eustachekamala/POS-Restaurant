import { getUserData } from "../../https/api";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "../../redux/slices/userSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Custom hook to load user data
const useLoadData = () => {
    // Get the dispatch function from Redux to dispatch actions
    const dispatch = useDispatch();
    // Get the navigate function from react-router-dom to navigate programmatically
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    // useEffect hook to run the fetchUser function when the component mounts
    useEffect(() => {
        // Define an async function to fetch user data
        const fetchUser = async () => {
            try {
                // Call the API to get user data
                const { data } = await getUserData();
                console.log(data);
                // Destructure the necessary fields from the response data
                const { _id, name, email, phone, role, isAuth } = data.data;
                // Dispatch an action to set the user data in the Redux store
                dispatch(setUser({ _id, name, email, phone, role, isAuth }));
            } catch (error) {
                // If there is an error, dispatch an action to remove the user data from the Redux store
                dispatch(removeUser());
                // Navigate to the authentication page
                Navigate("/auth");
                // Log the error to the console
                console.log(error);
            } finally{
                setIsLoading(false);
            }
        };

        // Call the fetchUser function
        fetchUser();
    }, [dispatch, navigate]); // Dependencies array to re-run the effect if dispatch or navigate changes

    return isLoading;
};

export default useLoadData;