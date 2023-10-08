import React from "react";
import { Link, Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="auth-contanier">
     <div className="auth-menu">
     <Link to="/auth">Giriş yap</Link>
      <Link to="/auth/register">Kayıt ol</Link>
     </div>
      <hr />
      <Outlet />
    </div>
  );
}

export default AuthLayout;
