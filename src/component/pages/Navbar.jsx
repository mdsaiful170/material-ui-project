import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {Containerbox } from "../compo/Container";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [MenuOpen, setMenu] = useState(false);
  const theme = useTheme();
  const isMenu = useMediaQuery(theme.breakpoints.down("md"));
  const handelMenu = () => setMenu((pre) => !pre);
  const itesm = ["About", "Service", "Projects", "Contacts"];

  const Dawerbox = () => {
    return (
      <>
        <Typography variant="div">
          <img src="./logo.png" alt="" className="max-w-36" />
        </Typography>
        <Divider />
        <Box sx={{ textAlign: "center" }}>
          <List>
            {itesm.map((navlink, i) => (
              <ListItem
                key={i}
                onClick={handelMenu}
                className="!font-Inter !cursor-pointer hover:!text-btntext !text-neutral-950 !capitalize  !text-lg "
              >
                <ListItemText>{navlink}</ListItemText>
              </ListItem>
            ))}
          </List>
          <ListItem button className="!cursor-pointer">
            <ListItemText primary="sing up"></ListItemText>
          </ListItem>

          <ListItem button className="!cursor-pointer">
            <ListItemText primary="login"></ListItemText>
          </ListItem>
        </Box>
      </>
    );
  };

  return (
    <>
      <section className={"border-b border-stone-00"}>

      <Containerbox >
        <AppBar
          elevation={0}
          sx={{ display: "flex" ,}}
          position="static"
          color="black"
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {isMenu ? (
              <>
                <IconButton onClick={handelMenu}>
                  <MenuIcon />
                </IconButton>
              </>
            ) : (
              <>
                <Typography sx={{ marginRight: "auto" }}>
                  <img src="./logo.png" alt="" className="max-w-36" />
                </Typography>
                <Box>
                  {itesm.map((res, i) => (
                    <Button
                      sx={{
                        "&:hover": {
                          backgroundColor: "inherit",
                          boxShadow: "none",
                        },
                      }}
                      className="!font-Inter hover:!text-btntext !text-neutral-950 !capitalize  !text-lg !px-4"
                      key={i}
                    >
                      {res}
                    </Button>
                  ))}
                </Box>
              </>
            )}
            <Button className="!bg-btnColor !ms-4 !text-btntext !font-medium !capitalize !px-3 !font-Inter !text-lg ">
              sing In
            </Button>
          </Toolbar>
        </AppBar>
      </Containerbox>
      </section>

      <nav>
        <Drawer
          anchor="left"
          onClose={handelMenu}
          open={MenuOpen}
          sx={{
            "& .MuiDrawer-paper": {
              width: "250px",
              height: "100vh",
              backgroundColor: "white",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              overflow: "auto",
              transition: "0.3s",
            },
          }}
        >
          <Dawerbox />
        </Drawer>
      </nav>
    </>
  );
};

export default Navbar;
