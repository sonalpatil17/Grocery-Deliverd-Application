package groceryapp.grocerydelivery.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import groceryapp.grocerydelivery.Entities.product;
import groceryapp.grocerydelivery.Services.productServices;

@RestController
@CrossOrigin(allowedHeaders = "*")
public class Mycontroller 
{
	@Autowired
	private productServices productservice;
	@GetMapping("/home")
	public String Home() 
	{
		return "Welcome To Grocerry app";
		
	}
	@GetMapping("/Products")
	public List<product> getProduct()
	{
		return this.productservice.getproduct();
		
	}
	@GetMapping("/Products/{productId}")
	public product getProduct (@PathVariable String productId )
	{
		return this.productservice.getproduct(Long.parseLong(productId));
		
	}
	@PostMapping("/Products")
	public product addcoproduct(@RequestBody product Product)
	{
		return this.productservice.addproduct(Product);
		
	}
	@PutMapping("/Products")
	public product updateproProduct(@RequestBody product Product )
	{
		return this.productservice.updateproduct(Product);
		
	}
	@DeleteMapping("/Products/{productId}")
	public void deleteproduct(@PathVariable String productId )
	{
		this.productservice.deleteproduct(Long.parseLong(productId));
	}
	

}
