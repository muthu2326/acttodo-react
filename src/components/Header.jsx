const Header = (props) => {
    return <div>
        <h1 className="text-3xl font-medium">Hello {props.user}!</h1>
        <p>I help you to manage your activities :)</p>
    </div>
}

export default Header;