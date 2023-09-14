import { useState, useEffect } from "react";
import ShowGitUserProfile from "./ShowGitUserProfile";
import "../assets/css/componentsCss/GitViewer.css"

// This is a functional component that fetches and displays GitHub user profiles
const GitViewer = () => {
    // State variables for the input value, fetched photos, and any errors
    const [inputValue, setInputValue] = useState("kaushalkumar")
    const [photos, setPhotos] = useState([])
    const [error, setError] = useState("")

    // The API URL for fetching GitHub user profiles
    const API_URL = `https://api.github.com/search/users?q=${inputValue}`

    // Function to fetch photos from the GitHub API
    const fetchPhoto = async () => {
        try {
            setError(" ")
            const getResponse = await fetch(API_URL);
            if (!getResponse.ok) {
                throw new Error('Network response was not ok');
            }
            const getData = await getResponse.json();

            if (getData.items.length === 0) {
                setError("data not found")
            }

            setPhotos(getData.items)

        } catch (err) {
            console.log(err)
        }
    };

    // useEffect hook to call the fetchPhoto function when the API URL changes
    useEffect(() => {

        if (inputValue == '') {
            return
        }

        // Debouncing the API call to prevent unnecessary requests
        const debouncing = setTimeout(() => {
            fetchPhoto()
        }, 1000)

        return () => {
            clearTimeout(debouncing);
        };

    }, [API_URL])



    return (
        <>
            <div className="git_viewer">
                <div className="input_error_container">
                    <div className="search_bar">
                        {/* Input field for entering a GitHub username */}
                        <input type="text" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} onInput={() => { setError("") }} />
                    </div>
                    <div className="error_message">
                        {/* Displaying any error messages */}
                        {error && <div>{error}</div>}
                    </div>
                </div>
                <div className="mapping_git_data">
                    <div className="mapping">
                        {/* Mapping over the fetched photos and displaying each one */}
                        {
                            photos.map((data, index) => (
                                <div className="git_user_mapping" key={index}>
                                    <div className="mapped_git_user">
                                        <ShowGitUserProfile data={data} />
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>

            </div>
        </>
    );
};

// Exporting the component for use in other parts of your application
export default GitViewer;
