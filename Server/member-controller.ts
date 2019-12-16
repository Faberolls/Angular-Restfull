// member-controller.js
// Import member model
// Handle index actions
import {GetMember, Member, MemberModel} from "./member-model";

export const Index = (req, res) => {
    const limit: string = req.query.limit || '5';
    GetMember(
        function (err, members) {
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
            }
            res.json({
                status: "success",
                message: "Members retrieved successfully",
                data: members
            });
        },
        Number.parseFloat(limit) || 5
    );
};
// Handle create Member actions
export const NewMember = (req, res) => {
    let member: MemberModel = new Member();
    member.name = req.body.name ? req.body.name : member.name;
    member.cotisation = req.body.cotisation;
// save the member and check for errors
    member.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New Member created!',
            data: member
        });
    });
};
// Handle view member info
export const ViewMember = (req, res) => {
    Member.findById(req.params.member_id, (err, member: MemberModel) => {
        if (err)
            res.send(err);
        res.json({
            message: 'member details loading..',
            data: member
        });
    });
};
// Handle update member info
export const UpdateMember = (req, res) => {
    Member.findById(req.params.member_id, (err, member: MemberModel) => {
        if (err) {
            res.send(err);
        }
        member.name = req.body.name ? req.body.name : member.name;
        member.cotisation = req.body.cotisation;
// save the member and check for errors
        member.save((err) => {
            if (err)
                res.json(err);
            res.json({
                message: 'Member Info updated',
                data: member
            });
        });
    });
};
// Handle delete contact
export const DeleteMember = (req, res) => {
    Member.remove({
        _id: req.params.member_id
    }, function (err) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'member deleted'
        });
    });
};