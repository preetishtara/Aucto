import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const home = () => {
  return (
    <div className="ml-4">
      <div className="text-center font-semibold text-2xl">Book Categories</div>

      <h1 className="font-semibold text-2xl m-2">Sci-fi</h1>
      <div className="grid grid-cols-2">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://upload.wikimedia.org/wikipedia/commons/7/76/The_Lost_World_%281925%29_-_film_poster.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                The Lost World
              </Typography>
              <Typography variant="body2" color="text.secondary">
                $20
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dune_%282021_film%29.jpg/220px-Dune_%282021_film%29.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dune
              </Typography>
              <Typography variant="body2" color="text.secondary">
                $20
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <h1 className="font-semibold text-2xl m-2">Fiction</h1>
      <div className="grid grid-cols-2">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://m.media-amazon.com/images/I/51bVNTqHFlL._AC_UF1000,1000_QL80_.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Alchemist
              </Typography>
              <Typography variant="body2" color="text.secondary">
                $20
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Brave New World
              </Typography>
              <Typography variant="body2" color="text.secondary">
                $20
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <h1 className="font-semibold text-2xl m-2">Comedy</h1>
      <div className="grid grid-cols-2">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.champak.in/wp-content/uploads/2020/03/mar-02-2020-315x422.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Champak
              </Typography>
              <Typography variant="body2" color="text.secondary">
                $15
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://m.media-amazon.com/images/I/71tVvU10bzL._AC_UF1000,1000_QL80_.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tenaliraman
              </Typography>
              <Typography variant="body2" color="text.secondary">
                $30
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default home;
