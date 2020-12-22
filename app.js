const express = require("express");
const app = express();
const port = 5500;
const handlebars = require("express-handlebars");

app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
    partialsDir: __dirname + "/views/partials/",
  })
);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("1main", {layout: "principal"});
});

app.get("/listadolibros", (req, res) => {
  res.render("main", { layout: "index" });
});

app.get("/relatoseroticos", (req, res) => {
  res.render("templateLibro1", { layout: "planB" });
});

app.get("/todoonada", (req, res) => {
  res.render("templateLibro2", { layout: "planB" });
});

app.get("/hazmedisfrutar", (req, res) => {
  res.render("TemplateLibro3", { layout: "planB" });
});

app.get("/elcontrato", (req, res) => {
  res.render("TemplateLibro4", { layout: "planB" });
});

app.get("/lasumisainsumisa", (req, res) => {
  res.render("TemplateLibro5", { layout: "planB" });
});

app.get("/new", (req, res) => {
  res.render("addLibroTemplate", { layout: "index" });
});
app.get("/relatoseroticos/editar", (req, res) => {
  res.render("editarlibroTemplate", { layout: "planB" });
});

app.listen(port, () => console.log(`App listening to port ${port}`));


