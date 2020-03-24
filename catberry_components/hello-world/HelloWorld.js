'use strict';

/*
 * This is a Catberry Cat-component file.
 * More details can be found here
 * https://github.com/catberry/catberry/blob/master/docs/index.md#cat-components-interface
 */

class HelloWorld {

	/**
	 * Gets data for the component's template.
	 * @returns {Promise<Object>} Promise of data.
	 */
	render() {
		return this.$context.getStoreData();
	}
}

module.exports = HelloWorld;
