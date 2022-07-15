const getNoteModel = (sequelize, { DataTypes }) => {
  const Note = sequelize.define("note", {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Note.associate = (models) => {
    Note.belongsTo(models.User);
  };

  return Note;
};

export default getNoteModel;
