import Book from "@/types/Book";

export default function (id: String, books: Array<Book>) {
  let response = null;
  for (const book of books) {
    if (id === book.id) {
      response = book;
      break;
    }
  }
  return response;
}
