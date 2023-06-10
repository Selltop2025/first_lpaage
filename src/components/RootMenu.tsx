const RootMenu = () => {

    return (<>

        <nav className="top right m l">
            <img src="https://www.beercss.com/favicon.png" className="circle margin"/>
            <a>
                <i>home</i>
                <div>Home</div>
            </a>
            <a>
                <i>search</i>
                <div>Search</div>
            </a>
            <a>
                <i>share</i>
                <div>Share</div>
            </a>
            <a>
                <i>more_vert</i>
                <div>More</div>
            </a>
        </nav>
        <nav className="bottom s">
            <a>
                <i>home</i>
            </a>
            <a>
                <i>search</i>
            </a>
            <a>
                <i>share</i>
            </a>
            <a>
                <i>more_vert</i>
            </a>
        </nav>

    </>)
}

export default  RootMenu