package com.example.todo.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Books")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String author;
    private double price;
}
