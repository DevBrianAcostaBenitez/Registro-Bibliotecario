import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  createBook() {
  }

  editBook(book: Book) {

  }

  deleteBook(bookId: number) {
    this.bookService.deleteBook(bookId).subscribe(() => {
      this.getBooks();
    });
  }
}
