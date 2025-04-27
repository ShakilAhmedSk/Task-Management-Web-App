package com.example.todo.service;


import com.example.todo.entity.Book;

import java.util.List;

public interface BookService {

    List<Book> findAllBook();
    Book createBook(Book book);
}
