import Note from '../models/note_model';


export const createNote = (fields) => {
  const note = new Note(fields);
  return note.save();
};

export const getNotes = () => {
  return Note.find({}).then(notes => {
    return notes.reduce((result, item) => {
      const newResult = result;
      newResult[item.id] = item;
      return newResult;
    }, {});
  });
};

export const deleteNote = (id) => {
  return Note.findOneAndRemove({ _id: id });
};

export const updateNote = (id, fields, done) => {
  return Note.findOneAndUpdate({ _id: id },
    { title: fields.title,
      x: fields.x,
      y: fields.y,
      zIndex: fields.zIndex,
      text: fields.text });
};
