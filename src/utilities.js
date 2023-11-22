function returnPlayer(players, userId) {
  let player;

  try {
    for (let i = 0; i < players.length; i++) {
      if (players[i].owner === userId) {
        player = players[i];
        break;
      }
    }
    return player;
  } catch (error) {
    return null;
  }
};

function printItems(itemsToPrint, action) {
  const itemCount = {};

  itemsToPrint.forEach(item => {
    const itemName = item.name;
    if (itemCount[itemName]) {
      itemCount[itemName]++;
    } else {
      itemCount[itemName] = 1;
    }
  });
  let resultString = `${action}:\n`;
  for (const itemName in itemCount) {
    resultString += `${itemCount[itemName]} - ${itemName} \n`;
  }
  return resultString;
};

function getRandomItemId(availableItemIds) {
  const randomIndex = Math.floor(Math.random() * availableItemIds.length);
  return availableItemIds[randomIndex];
}

module.exports = {
  returnPlayer,printItems, getRandomItemId
};
