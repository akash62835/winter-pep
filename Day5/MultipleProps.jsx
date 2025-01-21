const UserProfile = ({ firstName, lastName, age }) => {
    return (
        <div>
            <h2>User Profile</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Age: {age}</p>
        </div>
    );
};
export default UserProfile
// Usage example

