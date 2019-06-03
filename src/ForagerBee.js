var ForagerBee = function() {
	this.age = 10;
	this.job = 'find pollen';
	this.canFly = true;
	this.treasureChest = [];
};

ForagerBee.prototype = Object.create(new Bee());
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure) {
	return this.treasureChest.push(treasure);
}
