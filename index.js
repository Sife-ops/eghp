import express from "express";
import { fileURLToPath } from "url";

const router = express.Router();

// views
router.get("/", function (_, res) {
  res.render("index", { nav: "home" });
});

router.get("/birthdays", function (_, res) {
  res.render("birthdays", { nav: "birthdays" });
});

router.get("/christmas", function (_, res) {
  res.render("christmas", { nav: "christmas" });
});

// server
async function main() {
  const app = express();
  app.set("view engine", "ejs");

  //   app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(
    express.static(
      fileURLToPath(new URL("./node_modules/htmx.org/dist", import.meta.url))
    )
  );
  app.use(express.static(fileURLToPath(new URL("./public", import.meta.url))));

  app.use("/", router);
  app.listen(3002); // todo: hardcoded
}

main();
