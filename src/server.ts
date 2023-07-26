import express from 'express';

import { getPlayList } from './controllers/playList';

const app = express();

app.use(express.static(__dirname));

app.get('/playlist', getPlayList);

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Express app listening on localhost:3000'));
