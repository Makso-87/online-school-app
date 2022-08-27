const express = require("express");
const config = require("config");
const path = require("path");
const { connect, mongoose } = require("mongoose");
const PORT = config.get("port") || 5000;
const app = express();

app.use(express.json({ extended: true }));
app.use("/api/auth", require("./routes/auth.routes"));

if (pocess.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"));
    app.listen(PORT, () =>
      console.log(`Приложение успешно запущенно на порту ${PORT}`)
    );

    console.log(config.get("mongoUri"));
  } catch (e) {
    console.log("Ошибка сервера", e.message);
    process.exit(1);
  }
}

start();
