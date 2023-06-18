const Game = require('../models/Game');

exports.createGame = async (gameData) => {
  const game = new Game(gameData);
  game.save();
  return game;
};

exports.getAllGames = async () => {
  const allGames = await Game.find().lean();
  return allGames;
};

exports.getGameById = async (gameId) => {
  const game = await Game.findById(gameId).lean();
  return game;
};

exports.buyGame = async (gameId, userId) => {
  const game = await Game.findById(gameId);
  game.boughtBy.push(userId);
  await game.save();
};

exports.getSearchedGames = async (name, platform) => {
  let game = await Game.find().lean();

  if (name) {
    game = game.filter((game) => game.name.includes(name));
  }

  if (platform) {
    game = game.filter((game) => game.platform == platform);
  }

  return game;
};

exports.deleteGame = async (gameId) => await Game.findByIdAndDelete(gameId);

exports.updateGame = async (gameId, gameData) =>
  await Game.findByIdAndUpdate(gameId, gameData);
