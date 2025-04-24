import React from "react";
import { getByText, render } from "@testing-library/react";
import BookItem from "./BookItem";
import { BookStoreThemeProvider } from "../../context/themeContext";

const dummyBook = {
  id: 1,
  title: "Dummy Book",
  img: 5,
  category_id: 1,
  form: "paperback",
  isbn: "Dummy ISBN",
  summary: "Dummy Summary",
  detail: "Dummy Detail",
  author: "Dummy Author",
  pages: 100,
  contents: "Dummy Contents",
  price: 10000,
  likes: 1,
  pubDate: "2021-01-01",
};

describe("BookItem", () => {
  it("렌더 여부", () => {
    //1 렌더
    render(
      <BookStoreThemeProvider>
        <BookItem book={dummyBook} />
      </BookStoreThemeProvider>
    );

    //2 확인
    // expect(getByText(dummyBook.title)).toBeInTheDocument();
    // expect(getByText(dummyBook.summary)).toBeInTheDocument();
    // expect(getByText(dummyBook.author)).toBeInTheDocument();
    // expect(getByText("10,000원")).toBeInTheDocument();
    // expect(getByText(dummyBook.likes)).toBeInTheDocument();
  });
});
