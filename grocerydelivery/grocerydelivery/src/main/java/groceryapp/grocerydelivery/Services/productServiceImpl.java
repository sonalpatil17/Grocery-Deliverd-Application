package groceryapp.grocerydelivery.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import groceryapp.grocerydelivery.DAO.productDao;
import groceryapp.grocerydelivery.Entities.product;
@Service
public class productServiceImpl implements productServices
{
	@Autowired
	private productDao productdao;

	@Override
	public List<product> getproduct() 
	{
		
		return productdao.findAll();
	}

	@Override
	public product getproduct(long productId) 
	{
		
		return productdao.getOne(productId);
	}

	@Override
	public product addproduct(product Product) 
	{
		productdao.save(Product);
		return Product;
	}

	@Override
	public product updateproduct(product Product) 
	{
		productdao.save(Product);
		return Product;
	}

	@Override
	public void deleteproduct(long parseLong) 
	{
		product entity=productdao.getOne(parseLong);
		productdao.delete(entity);
	}

	

}
