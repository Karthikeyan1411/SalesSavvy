package com.example.demo.admincontrollers;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.adminservices.AdminProductService;
import com.example.demo.entities.Product;

@RestController
@RequestMapping("/admin/products")
public class AdminProductController {

    private final AdminUserController adminUserController;

	private final AdminProductService adminProductService;

	public AdminProductController(AdminProductService adminProductService, AdminUserController adminUserController) {
		super();
		this.adminProductService = adminProductService;
		this.adminUserController = adminUserController;
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addProduct(@RequestBody Map<String, Object> productRequest) {
		try {
			System.out.println("Raw keys received:");
			productRequest.forEach((k, v) -> System.out.println(k + " = " + v));
			
			System.out.println("Incoming product data: " + productRequest);
			
			String name = (String) productRequest.get("name");
			String description = (String) productRequest.get("description");
			Double price = Double.valueOf(String.valueOf(productRequest.get("price")));
			Integer stock = Integer.valueOf(String.valueOf(productRequest.get("stock")));
			
			Object categoryObj = productRequest.get("categoryId");
			Integer categoryId = categoryObj != null ? Integer.parseInt(categoryObj.toString()) : null;
			
			String imageUrl = (String) productRequest.get("imageUrl");
			
			Product addedProduct = adminProductService.addProductWithImage(name, description, price, stock, categoryId, imageUrl);
			return ResponseEntity.status(HttpStatus.CREATED).body(addedProduct);
		} catch (IllegalArgumentException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
		}
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<?> deleteProduct(@RequestBody Map<String, Integer> requestBody) {
		try {
			Integer productId = requestBody.get("productId");
			adminProductService.deleteProduct(productId);
			return ResponseEntity.status(HttpStatus.OK).body("Product deleted successfully");
		} catch (IllegalArgumentException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
		}
	}
	
	@GetMapping("/all")
	public ResponseEntity<?> getAllProducts() {
	    try {
	        return ResponseEntity.ok(adminProductService.getAllProducts());
	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                .body("Something went wrong");
	    }
	}

}
