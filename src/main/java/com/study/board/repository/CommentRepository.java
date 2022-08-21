package com.study.board.repository;

import com.study.board.entity.Board;
import com.study.board.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
}
