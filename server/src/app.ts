import express, { Express, Request, Response } from "express";

const app: Express = express();

app.use(express.json());

app.get("/api/newest-releases", (req: Request, res: Response): void => {
  res.send([
    {
      title: "Legend of Zelda: Tears of the Kingdom",
      cover: "/images/games/totk.jpg",
      platform: "Switch",
    },
    {
      title: "Diablo IV",
      cover: "/images/games/d4.webp",
      platform: "PS5",
    },
    {
      title: "System Shock",
      cover: "/images/games/ssr.jpg",
      platform: "PS5",
    },
    {
      title: "Street Fighter 6",
      cover: "/images/games/sf6.jpg",
      platform: "PS5",
    },
    {
      title: "Killer Frequency",
      cover: "/images/games/kf.jpg",
      platform: "Xbox Series X|S",
    },
  ]);
});

app.listen(3000, (): void => {
  console.log("Server running on 3000");
});
