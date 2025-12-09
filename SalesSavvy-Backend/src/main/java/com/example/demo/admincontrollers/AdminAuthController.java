package com.example.demo.admincontrollers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/admin/auth")
public class AdminAuthController {

	@PostMapping("/logout")
	public ResponseEntity<String> logoutAdmin(HttpServletResponse response) {
	    Cookie cookie = new Cookie("authToken", null);
	    cookie.setHttpOnly(true);
	    cookie.setSecure(false);
	    cookie.setPath("/");   // IMPORTANT
	    cookie.setMaxAge(0);

	    response.addCookie(cookie);
	    return ResponseEntity.ok("Admin logged out successfully");
	}

}
