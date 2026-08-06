package InstaSongs.InstaSomgs.Service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import InstaSongs.InstaSomgs.Entity.FavoriteEntity;
import InstaSongs.InstaSomgs.Repository.FavoriteRepository;


@Service
public class FavoriteService {

    @Autowired
    private FavoriteRepository favoriteRepository;

    // Save Favorite
    public FavoriteEntity saveFavorite(FavoriteEntity favorite) {
        return favoriteRepository.save(favorite);
    }

    // Get Favorites by User ID
    public List<FavoriteEntity> getFavorites(Integer userId) {
        return favoriteRepository.findByUserId(userId);
    }

    // Delete Favorite by ID
    public void deleteFavorite(Integer id) {
        favoriteRepository.deleteById(id);
    }

    // Check if Favorite Exists
    public FavoriteEntity getFavorite(Integer userId, String songTitle) {

        Optional<FavoriteEntity> favorite =
                favoriteRepository.findByUserIdAndSongTitle(userId, songTitle);

        return favorite.orElse(null);
    }

    // Remove Favorite
    public void removeFavorite(Integer userId, String songTitle) {

        Optional<FavoriteEntity> favorite =
                favoriteRepository.findByUserIdAndSongTitle(userId, songTitle);

        if (favorite.isPresent()) {
            favoriteRepository.delete(favorite.get());
        }
    }
}
