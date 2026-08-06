package InstaSongs.InstaSomgs.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import InstaSongs.InstaSomgs.Entity.EntityClass;
import InstaSongs.InstaSomgs.Service.ServiceClass;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class Controllerclass {

    @Autowired
    private ServiceClass userService;

    // Register
    @PostMapping("/register")
    public EntityClass register(@RequestBody EntityClass user) {
        return userService.register(user);
    }

    // Login
    @PostMapping("/login")
    public EntityClass login(@RequestBody EntityClass user) {
        return userService.login(user);
    }
}