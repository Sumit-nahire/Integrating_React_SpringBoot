package com.art_gallery.Gallery.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.art_gallery.Gallery.demo.User;

@Repository
public interface UserRepositary extends JpaRepository<User, Long> {
     
}
