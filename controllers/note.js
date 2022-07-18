const Note = require("../models").Note;

module.exports = {
  getById(req, res) {
    return Note.findByPk(req.params.id, {
      include: [
        {
          all: true,
        },
      ],
    })
      .then((note) => {
        if (!note) {
          return res.status(404).send({
            message: "Note Not Found",
          });
        }
        return res.status(200).send(note);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  },

  add(req, res) {
    return Note.create({
      content: req.body.content,
      author: req.body.author,
    })
      .then((note) => res.status(201).send(note))
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Note.findByPk(req.params.id)
      .then((note) => {
        if (!note) {
          return res.status(400).send({
            message: "Note Not Found",
          });
        }
        return note
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
