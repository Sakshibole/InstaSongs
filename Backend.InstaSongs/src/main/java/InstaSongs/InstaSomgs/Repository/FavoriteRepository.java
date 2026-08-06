package InstaSongs.InstaSomgs.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import InstaSongs.InstaSomgs.Entity.FavoriteEntity;


public interface FavoriteRepository extends JpaRepository<FavoriteEntity, Integer>{

    List<FavoriteEntity> findByUserId(Integer userId);

    Optional<FavoriteEntity> findByUserIdAndSongTitle(Integer userId,String songTitle);

}