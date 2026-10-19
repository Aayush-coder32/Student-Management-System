import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  subject: { type: String, required: true, trim: true },
  exam: { type: String, required: true, trim: true },
  marks: { type: Number, required: true, min: 0 },
  maxMarks: { type: Number, required: true, min: 1 }
}, { timestamps: true });

export default mongoose.model('Result', resultSchema);

