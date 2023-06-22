import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  @Input() book: Book;
  editing = false;

  constructor(private bookService: BookService) {
    this.book = {
      id: 0,
      image: '',
      name: '',
      editorial: '',
      gender: '',
      author: ''
    };
  }

  ngOnInit() {
    this.editing = this.book.id !== 0;
  }

  saveBook() {
    if (this.editing) {
      this.bookService.updateBook(this.book).subscribe(() => {
      });
    } else {
      this.bookService.createBook(this.book).subscribe(() => {
      });
    }
  }

  cancelEdit() {
   
  }
}
