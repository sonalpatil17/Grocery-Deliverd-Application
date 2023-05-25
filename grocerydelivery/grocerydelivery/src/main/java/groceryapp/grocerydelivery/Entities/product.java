package groceryapp.grocerydelivery.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class product 
{
	@Id
	private Long id;
	private String productname;
	private int productQuantity;
	private double price;
	public Long getId() 
	{
		return id;
	}
	public void setId(Long id) 
	{
		this.id = id;
	}
	public String getProductname() 
	{
		return productname;
	}
	public void setProductname(String productname) 
	{
		this.productname = productname;
	}
	public int getProductQuantity() 
	{
		return productQuantity;
	}
	public void setProductQuantity(int productQuantity) 
	{
		this.productQuantity = productQuantity;
	}
	public double getPrice() 
	{
		return price;
	}
	public void setPrice(double price) 
	{
		this.price = price;
	}
	@Override
	public String toString() {
		return "product [id=" + id + ", productname=" + productname + ", productQuantity=" + productQuantity
				+ ", price=" + price + "]";
	}
	public product(Long id, String productname, int productQuantity, double price) 
	{
		super();
		this.id = id;
		this.productname = productname;
		this.productQuantity = productQuantity;
		this.price = price;
	}
	public product() 
	{
		super();
		// TODO Auto-generated constructor stub
	}
	

}
