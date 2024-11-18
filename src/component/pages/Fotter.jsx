
import { Containerbox } from "../compo/Container";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { fotterData } from "../../../lib/data";

const Icondata = [
  { icon: <Facebook className="!text-xl !rounded-full" />, herf: "#" },
  { icon: <Twitter className="!text-xl !rounded-full" />, herf: "#" },
  { icon: <Instagram  className="!text-xl !rounded-full"/>, herf: "#" },
];

const Fotter = () => {
  return (
    <>
      <section className="bg-neutral-950 text-white py-10">
        <Containerbox>
          <Grid
            container
            spacing={3}
            sx={{ placeItems: "start", placeContent: "start" }}
          >
            <Grid item xs={12} md={4}>
              <Typography>
                <img
                  src="./logow.png"
                  alt=""
                  className=" max-w-sm w-full object-cover   md:h-auto"
                />
              </Typography>
            </Grid>

            <Grid item xs={12} md={8} alignSelf={"center"}>
              <Grid container columns={{ xs: 12, md: 12, lg: 12 }}>
                {fotterData?.length &&
                  fotterData.map((res, index) => (
                    <Grid item key={index} xs={6} sm={3} md={3} lg={3}>
                      <h3 className="text-xl pb-5 font-bold text-white">
                        {res.name}
                      </h3>
                      <ul className="space-y-2">
                        {res.subMenu?.length &&
                          res.subMenu.map((res, i) => (
                            <li
                              className="text-base font-normal text-stone-500"
                              key={i}
                            >
                              {res}
                            </li>
                          ))}
                      </ul>
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </Grid>

          <Box className="pt-4">
            <div className="border-t border-t-white/25 pt-6 flex items-center justify-between">
              <p className="text-stone-400 text-base ">
                Copyright Degic {new Date().getFullYear()}
              </p>
              <div className="inline-flex items-center gap-2">
                {Icondata?.length &&
                  Icondata?.map((res) => (
                    <a
                     href={res.herf}
                      key={res.id}
                      className="size-[36px] bg-stone-900  grid place-items-center rounded-full"
                    >
                      {res.icon}
                    </a>
                  ))}
              </div>
            </div>
          </Box>
        </Containerbox>
      </section>
    </>
  );
};

export default Fotter;
