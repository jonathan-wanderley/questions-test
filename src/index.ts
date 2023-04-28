import express from "express";
import "express-async-errors";
import cors from "cors";
import routes from "./routes";
import { ErrorHandler } from "./middlewares/errorHandler";

import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(ErrorHandler);

app.get('/test', (req, res) => { res.json({ test: 'ok' }) })

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
