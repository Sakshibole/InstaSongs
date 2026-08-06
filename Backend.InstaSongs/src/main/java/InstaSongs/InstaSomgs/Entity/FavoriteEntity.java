package InstaSongs.InstaSomgs.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
	@Table(name="favorites")
	public class FavoriteEntity {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Integer id;

	    private Integer userId;

	    private String songTitle;

	    private String artist;

	    private String mood;

	    private String youtubeLink;

	    private String image;

	    public FavoriteEntity() {
	    }

	    public FavoriteEntity(Integer id, Integer userId, String songTitle,
	            String artist, String mood,
	            String youtubeLink, String image) {

	        this.id = id;
	        this.userId = userId;
	        this.songTitle = songTitle;
	        this.artist = artist;
	        this.mood = mood;
	        this.youtubeLink = youtubeLink;
	        this.image = image;
	    }

		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
			this.id = id;
		}

		public Integer getUserId() {
			return userId;
		}

		public void setUserId(Integer userId) {
			this.userId = userId;
		}

		public String getSongTitle() {
			return songTitle;
		}

		public void setSongTitle(String songTitle) {
			this.songTitle = songTitle;
		}

		public String getArtist() {
			return artist;
		}

		public void setArtist(String artist) {
			this.artist = artist;
		}

		public String getMood() {
			return mood;
		}

		public void setMood(String mood) {
			this.mood = mood;
		}

		public String getYoutubeLink() {
			return youtubeLink;
		}

		public void setYoutubeLink(String youtubeLink) {
			this.youtubeLink = youtubeLink;
		}

		public String getImage() {
			return image;
		}

		public void setImage(String image) {
			this.image = image;
		}

	    // Generate getters and setters
	    
	    
	    
	}


