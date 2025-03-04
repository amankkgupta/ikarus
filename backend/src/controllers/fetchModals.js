const { db } = require("../config/firebase");

const fetchModals = async (req, res) => {
  const { name } = req.query; 
  try {
    let modelsSnapshot;
    modelsSnapshot = await db.collection("models").get();
    let models = modelsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    if (name) {
      models = models.filter((model) =>
        model.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    res.json(models);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { fetchModals };
