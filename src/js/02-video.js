import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

player.on(
  'timeupdate',
  throttle(function (data) {
     console.log('timeupdate:', data);
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);
 
var currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}