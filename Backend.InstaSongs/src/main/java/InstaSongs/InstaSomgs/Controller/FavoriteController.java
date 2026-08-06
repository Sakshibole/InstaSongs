package InstaSongs.InstaSomgs.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import InstaSongs.InstaSomgs.Entity.FavoriteEntity;
import InstaSongs.InstaSomgs.Service.FavoriteService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/favorites")
public class FavoriteController {

    @Autowired
    private FavoriteService favoriteService;

    // Add Favorite
    @PostMapping
    public FavoriteEntity addFavorite(@RequestBody FavoriteEntity favorite) {
        return favoriteService.saveFavorite(favorite);
    }

    // Get All Favorites of User
    @GetMapping("/{userId}")
    public List<FavoriteEntity> getFavorites(@PathVariable Integer userId) {
        return favoriteService.getFavorites(userId);
    }

    // Check if Song is Favorite
    @GetMapping("/check")
    public FavoriteEntity checkFavorite(@RequestParam Integer userId,
                                  @RequestParam String songTitle) {

        return favoriteService.getFavorite(userId, songTitle);
    }

    // Delete Favorite by ID
    @DeleteMapping("/{id}")
    public void deleteFavorite(@PathVariable Integer id) {
        favoriteService.deleteFavorite(id);
    }

    // Remove Favorite by UserId and Song Title
    @DeleteMapping("/{userId}/{songTitle}")
    public void removeFavorite(@PathVariable Integer userId,
                               @PathVariable String songTitle) {

        favoriteService.removeFavorite(userId, songTitle);
    }
}