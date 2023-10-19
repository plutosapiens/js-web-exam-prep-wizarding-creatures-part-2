
const Creature = require('../models/Creature')

exports.create = (createData) => Creature.create(createData);

exports.getAll = () => Creature.find();

exports.singleCreature = (creatureId) => Creature.findById(creatureId);

exports.update = (creatureId, creatureData) => 
Creature.findByIdAndUpdate(creatureId, creatureData);

exports.delete = (creatureId) => Creature.findByIdAndDelete(creatureId);

exports.getMyCreatures = (ownerId) => Creature.find({ owner: ownerId}).populate('owner');

exports.addVotesToCreature = async (creatureId, userId) => {
    const creature = await this.singleCreature(creatureId);

    // console.log({ votes: creature.votes })
    const existingVote = creature.votes.some(
        (v) => v?.toString() === userId
    )
    creature.votes.push(userId);
    return creature.save();
};