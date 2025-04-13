<template>
  <div class="app">

    <Project title="热门歌手" :items="artists" class="artist">
      <template v-slot:default="{ item }">
        <div class="hotartist">
          <img :src="item.picUrl" class="artist-photo" />
          <span>{{ item.name }}</span>
        </div>
      </template>
    </Project>
    <h2 class="bangdan">榜单</h2>
    <div class="flexapp">

      <Project title="新歌榜" :cover-img-url="newsongs.coverImgUrl" :description="newsongs.description"
        :items="newsongs.tracks">
        <template v-slot:default="{ item, index }">
          <div class="song-item">
            <span>{{ index + 1 }}.</span>
            <img :src="item.picUrl" class="song-photo" />
            <div>
              <span>{{ item.name }}</span>
              
            </div>
          </div>
        </template>
      </Project>
      <Project title="热歌榜" :items="hotsongs.tracks" :cover-img-url="hotsongs.coverImgUrl" :description="hotsongs.description">
        <template v-slot:default="{ item, index }">
          <div class="song-item">
            <span>{{ index + 1 }}.</span>
            <img :src="item.picUrl" class="song-photo" />
            <div>
              <span>{{ item.name }}</span>
            </div>
          </div>
        </template>
      </Project>


      <Project title="原创榜" :cover-img-url="originsongs.coverImgUrl" :description="originsongs.description"
        :items="originsongs.tracks">
        <template v-slot:default="{ item, index }">
          <div class="song-item">
            <span>{{ index + 1 }}.</span>
            <img :src="item.picUrl" class="song-photo" />
            <div>
              <span>{{ item.name }}</span>
            </div>
          </div>
        </template>
      </Project>
    </div>
  </div>
</template>

<script>
import Project from './components/Project.vue'
import artists from './assets/artist.js'
import hotsongs from './assets/hotSong.js'
import newsongs from './assets/newSong.js'
import originsongs from './assets/originSong.js'

export default {
  components: { Project },
  data() {
    return {
      artists,
      hotsongs,
      newsongs,
      originsongs
    }
  }
}
</script>

<style>
.app {
  width: 1300px;
}


.artist ul {
  display: flex;
  flex-wrap: nowrap;
  border-top: 2px solid black;
  border-bottom: 2px solid black;

}

.hotartist {
  display: flex;
  flex-direction: column;
  padding: 15px;
}

.flexapp {
  display: flex;
  justify-content: space-between;
  padding:20px;
}

.bangdan {
  padding: 20px;
  border-bottom: 2px solid black;
}

.artist-photo {
  width: 50px;
  height: 50px;
}

.song-item {
  display: flex;
  align-items: center;
}

.song-photo {
  width: 40px;
  height: 40px;
  padding: 10px;

}
</style>
