package com.example.todo.service;

import com.example.todo.entity.Todo;
import com.example.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

    @Autowired
    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    // Get all Todos
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    // Get a Todo by ID
    public Optional<Todo> getTodoById(Long id) {
        return todoRepository.findById(id);
    }

    // Save a new or updated Todo
    public Todo saveTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    // Delete a Todo by ID
    public void deleteTodoById(Long id) {
        todoRepository.deleteById(id);
    }
}
