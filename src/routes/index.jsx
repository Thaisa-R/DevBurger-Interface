import { Route, Routes } from "react-router-dom";

import { Cart, Home, Menu, Login, Register, Checkout, CompletePayment, Orders, NewProduct, EditProduct, Products } from "../containers";
import { UserLayout } from "../layouts/UserLayout";
import { AdminLayout } from "../layouts/UserLayout/AdminLayout";

export function Router() {
  return (
    <Routes>
      {/* Rotas com layout de usuário */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="cardapio" element={<Menu />} />
        <Route path="carrinho" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="completePayment" element={<CompletePayment />} />
      </Route>
      {/* Rotas de Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin/pedidos" element={<Orders />} />
        <Route path="/admin/novo-produto" element={<NewProduct />} />
        <Route path="/admin/editar-produto" element={<EditProduct />} />
        <Route path="/admin/produtos" element={<Products />} />
      </Route>

      {/* Rotas sem layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
    </Routes>
  );
}
