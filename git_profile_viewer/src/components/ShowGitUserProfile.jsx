import "../assets/css/componentsCss/ShowGitUserProfile.css"

// This is a functional component that displays a GitHub user's profile
const ShowGitUserProfile = (props) => {

    // Destructuring the data from props
    const { data } = props
    const { id, login, avatar_url, html_url } = data

    return (
        <>
            <div className="container">
                <div className="git_user_container">
                    <div className="id_name">
                        <div className="git_user_name">
                            {/* Displaying the user's login name */}
                            <p className="name">{login}</p>
                        </div>
                        <div className="git_user_id">
                            {/* Displaying the user's ID */}
                            <p className="id">
                                ID: {id}
                            </p>
                        </div>

                    </div>

                    <div className="git_user_image">
                        {/* Displaying the user's avatar */}
                        <img src={avatar_url} alt="image" className="user_image" target="_top" />
                    </div>

                    <div className="git_user_profile_link">
                        <div className="user_link">
                            {/* Providing a link to the user's GitHub profile */}
                            <h4>
                                see Profile : <span><a href={html_url}> {login}</a></span>
                            </h4>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

// Exporting the component for use in other parts of your application
export default ShowGitUserProfile
