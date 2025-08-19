import http from 'node:http'
import Getdata from './db.js';

const server = http.createServer(async (req, res) => {
    const destination = await Getdata();
    if (req.url === '/api' && req.method === "GET") {
        res.end(JSON.stringify(destination));
    }
})
const PORT = 3000
server.listen(PORT, () => console.log(`server running at http://localhost:${PORT}/`));