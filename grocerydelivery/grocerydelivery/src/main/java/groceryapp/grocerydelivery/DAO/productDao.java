package groceryapp.grocerydelivery.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import groceryapp.grocerydelivery.Entities.product;

public interface productDao extends JpaRepository<product, Long>
{

}
