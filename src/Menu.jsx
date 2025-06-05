import './Menu.css'

const Menu =()=>{

    return (
        <div>
            <ul className="nav">
                <li class="nav-item">
                    <a class="nav-link active" href="/home">
                        Home
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="/PokeFlex">
                        PokeFlex
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link a" href="/PokeGrid">
                        PokeGrid
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Menu