const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const { createTables } = require("./db/initializeDatabase");

const app = express();
const PORT = process.env.PORT || 8000;

const ventaRoutes = require('./routes/ventaRoutes');
const reporteRoutes = require('./routes/reporteRoutes');
const productosRouter = require("./routes/products");

// Handlebars
app.engine("hbs", engine({ extname: ".hbs", defaultLayout: "mainLayout" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Middleware para formularios
app.use(express.urlencoded({ extended: true }));

// Rutas
app.get("/", (req, res) => {
  res.render("index", { title: "Monolito con Node.js y Handlebars" });
});

app.use("/products", productosRouter);
app.use('/ventas', ventaRoutes);
app.use('/reportes', reporteRoutes);

// Sequelize y arranque del servidor
const sequelize = require('./db/config');
const Venta = require('./models/venta');
const Reporte = require('./models/reporte');

sequelize.sync().then(() => {
  app.listen(PORT, () => {

    console.log('🚀 Servidor corriendo en http://localhost:${PORT}');
  });
}).catch((err) => {
  console.error('❌ Error al sincronizar la base de datos:', err);
});