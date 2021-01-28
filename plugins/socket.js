import Vue from 'vue';
import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

export default ({ store }) => {
	
	const options = '';

	Vue.use(new VueSocketIO({
		debug: true,
		connection: socketio('http://balticp.mediapark.com.ru:6112'),
		vuex: {
			store,
			actionPrefix: "SOCKET_",
			mutationPrefix: "SOCKET_",
		}
	})
	)
}
