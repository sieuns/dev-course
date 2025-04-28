import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/global";
import { ThemeProvider } from "styled-components";
import { getTheme, ThemeName } from "./style/theme";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { useContext, useState } from "react";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/common/Error";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import Cart from "./pages/Cart";
import Order from "./pages/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/books",
    element: (
      <Layout>
        <Books />
      </Layout>
    ),
    errorElement: <div>오류가 발생했습니다.</div>,
  },
  {
    path: "/signup",
    element: (
      <Layout>
        <Signup />
      </Layout>
    ),
    errorElement: <div>오류가 발생했습니다.</div>,
  },
  {
    path: "/reset",
    element: (
      <Layout>
        <ResetPassword />
      </Layout>
    ),
    errorElement: <div>오류가 발생했습니다.</div>,
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
    errorElement: <div>오류가 발생했습니다.</div>,
  },
  {
    path: "/books/:bookId",
    element: (
      <Layout>
        <BookDetail />
      </Layout>
    ),
    errorElement: <div>오류가 발생했습니다.</div>,
  },
  {
    path: "/cart",
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
    errorElement: <div>오류가 발생했습니다.</div>,
  },
  {
    path: "/order",
    element: (
      <Layout>
        <Order />
      </Layout>
    ),
    errorElement: <div>오류가 발생했습니다.</div>,
  },
]);

function App() {
  return (
    <BookStoreThemeProvider>
      <RouterProvider router={router} />
    </BookStoreThemeProvider>
  );
}

export default App;
