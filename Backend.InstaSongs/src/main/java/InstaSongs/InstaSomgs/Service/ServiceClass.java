package InstaSongs.InstaSomgs.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import InstaSongs.InstaSomgs.Entity.EntityClass;
import InstaSongs.InstaSomgs.Repository.RepoClass;

@Service
public class ServiceClass {

    @Autowired
    private RepoClass userRepository;

    // Register User
    public EntityClass register(EntityClass user) {
        return userRepository.save(user);
    }

    // Login User
    public EntityClass login(EntityClass user) {

        Optional<EntityClass> existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser.isPresent()) {

        	EntityClass dbUser = existingUser.get();

            if (dbUser.getPassword().equals(user.getPassword())) {
                return dbUser;
            }
        }

        return null;
    }

}