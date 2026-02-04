package com.art_gallery.Gallery.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.art_gallery.Gallery.demo.User;
import com.art_gallery.Gallery.repo.UserRepositary;

@Service
public class UserServices {
     
	@Autowired  
	private UserRepositary userRepositary;
	
	public  List<User> getAllUsers() {
		return userRepositary.findAll();
	}
	
	public Optional<User> getUserById(Long id){
		return userRepositary.findById(id);
	}
	
	public User saveUser(User user) {
		return userRepositary.save(user);
	}
	public void deleteUser(Long id) {
		userRepositary.deleteById(id);
	}
}
