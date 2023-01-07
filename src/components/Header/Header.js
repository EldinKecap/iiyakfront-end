import classes from "./Header.module.css"

const Header = (props) => {
    return(
        <header className={classes.header}>
            <ul className={classes.list}>
            <li>Create</li>
            <li>Get user</li>
            <li>Get all users</li>
            <li>Update user</li>
            <li>Delete user</li>
            </ul>
        </header>
    )
}

export default Header;