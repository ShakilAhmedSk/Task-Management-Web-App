package com.example.todo.service;

import com.example.todo.entity.Book;
import com.example.todo.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;

    @Autowired
    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }


    @Override
    public List<Book> findAllBook() {
        return this.bookRepository.findAll();
    }

    @Override
    public Book createBook(Book book) {
        return this.bookRepository.save(book);
    }
}
