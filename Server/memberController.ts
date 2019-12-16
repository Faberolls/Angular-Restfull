// memberController.js
// Import member model
// Handle index actions
import {GetMember, Member, MemberModel} from "./memberModel";

export const Index = function (req, res) {
    const limit: number = req.query.limit || 5;
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
        limit
    );
};
// Handle create Member actions
export const NewMember = function (req, res) {
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
export const ViewMember = function (req, res) {
    Member.findById(req.params.member_id, function (err, member: MemberModel) {
        if (err)
            res.send(err);
        res.json({
            message: 'member details loading..',
            data: member
        });
    });
};
// Handle update member info
export const UpdateMember = function (req, res) {
    Member.findById(req.params.member_id, function (err, member: MemberModel) {
        if (err) {
            res.send(err);
        }
        member.name = req.body.name ? req.body.name : member.name;
        member.cotisation = req.body.cotisation;
// save the member and check for errors
        member.save(function (err) {
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
export const DeleteMember = function (req, res) {
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