const test = require('ava');

const Entity = require('..');

test('plan', t => {
	const entityInstance = new Entity();

	t.is(typeof entityInstance, 'object');
});
