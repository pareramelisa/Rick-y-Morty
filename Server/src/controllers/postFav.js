const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { id, name, origin, status, image, species, gender } = req.body;

    if (!id || !name || !origin || !status || !image || !species || !gender)
      return res.status(401).send("Faltan Datos");

    await Favorite.findOrCreate({
      where: {
        id,
        name,
        origin,
        status,
        image,
        species,
        gender,
      },
    });
  } catch (error) {}
};

module.exports = postFav;
