import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/home/home";
import RealizarPedido from "../views/pedidos/realizarPedido";
import HistorialPedidos from "../views/pedidos/historialPedidos";
import Inventario from "../views/inventario/inventario";
import Envios from "../views/envios/envios/envios";
import RealizarEnvio from "../views/envios/realizarEnvio";
import HistorialEnvios from "../views/envios/historialEnvios";
import Pedidos from "../views/pedidos/pedidos/pedidos";

export function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route path="inventario" element={<Inventario/>}/>
                    <Route path="pedidos" element={<Pedidos/>}>
                        <Route path="realizarPedido" element={<RealizarPedido/>}/>
                        <Route path="historialPedidos" element={<HistorialPedidos/>}/>
                    </Route>
                    <Route path="envios" element={<Envios/>}>
                        <Route path="realizarEnvio" element={<RealizarEnvio/>}/>
                        <Route path="historialEnvios" element={<HistorialEnvios/>}/>
                    </Route> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}