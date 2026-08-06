package InstaSongs.InstaSomgs.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import InstaSongs.InstaSomgs.Entity.EntityClass;

public interface RepoClass extends JpaRepository<EntityClass, Integer>{

    Optional<EntityClass> findByEmail(String email);

}