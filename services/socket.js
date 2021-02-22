

import io from 'socket.io-client/dist/socket.io'
import config from '../config'

const ENDPOINT = config.SOCKET_URL;
const socket = io(ENDPOINT, {reconnectionDelayMax: 10000,});

export default socket