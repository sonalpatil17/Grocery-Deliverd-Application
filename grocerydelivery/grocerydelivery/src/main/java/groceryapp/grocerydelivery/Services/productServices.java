package groceryapp.grocerydelivery.Services;

import java.util.List;

import groceryapp.grocerydelivery.Entities.product;

public interface productServices 
{
	public List<product> getproduct();
	public product getproduct(long productId);
	public product addproduct(product Product);
	public product updateproduct(product Product);
	public void deleteproduct(long parseLong);

}
