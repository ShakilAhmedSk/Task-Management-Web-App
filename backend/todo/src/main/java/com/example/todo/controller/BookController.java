package com.example.todo.controller;


import com.example.todo.entity.Book;
import com.example.todo.service.BookServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Books")
public class BookController {

    private final BookServiceImpl bookServiceImpl;

    @Autowired
    public BookController(BookServiceImpl bookServiceImpl) {
        this.bookServiceImpl = bookServiceImpl;
    }

    @GetMapping
    public List<Book> findAllBook(){
        return this.bookServiceImpl.findAllBook();
    }

    @PostMapping
    public ResponseEntity<Book>  createBook(@RequestBody  Book book){
        Book  savedBook = bookServiceImpl.createBook(book);
        return new ResponseEntity<>(savedBook, HttpStatus.CREATED);
    }

}
