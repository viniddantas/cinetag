import Rodape from "components/Rodape";

const { default: Cabecalho } = require("components/Cabecalho");
const { default: Container } = require("components/Container");
const { default: FavoritosProvider } = require("contextos/Favoritos");
const { Outlet } = require("react-router-dom");

function PaginaBase() {
    return (
        <main>
            <Cabecalho/>
            <FavoritosProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritosProvider>
            <Rodape/>
        </main>
    )
}

export default PaginaBase