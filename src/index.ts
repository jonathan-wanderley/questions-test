import express from "express";
import cors from "cors";
import routes from "./routes";

import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/test', (req, res) => { res.json({ test: 'ok' }) })

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})