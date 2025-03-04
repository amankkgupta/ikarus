const { db } = require('../config/firebase');

const uploadFile = async (req, res) => {
  const formdata = req.body;
  const { name, description, url } = formdata;
  console.log(name, description, url);
  const uploadDate = req.body.uploadDate || new Date();
  try {
    const docRef = await db.collection('models').add({
      name,
      description,
      uploadDate,
      url
    });

    res.json({ id: docRef.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { uploadFile };