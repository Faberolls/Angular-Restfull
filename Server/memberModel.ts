// memberModel.js
import * as mongoose from 'mongoose';
// Setup schema
export const MemberSchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cotisation: {
        type: Number,
        required: true
    },
});

export interface MemberModel extends mongoose.Document {
    name: string;
    cotisation: number;
}

// Export Memmber model
export const Member: mongoose.Model<MemberModel> = mongoose.model<MemberModel>('member', MemberSchema);

export const GetMember = (callback:  (err: any, res: MemberModel[]) => void, limit: number) => {
    Member.find(callback).limit(limit);
};
