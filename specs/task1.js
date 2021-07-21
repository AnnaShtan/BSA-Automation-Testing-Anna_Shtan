const { expect } = require('chai');
const { App } = require('../src/pages');
const rundomNumber = () => Date.now();

const app = new App();


describe('SignIn:', function () {
	beforeEach(async function () {
		await browser.setWindowSize(1440, 960);
		await browser.url('http://46.101.234.121/sign-in');
	});
	this.afterEach(async function () {
		await browser.reloadSession();
	});


	it('should be able to SignIn', async function () {

		await app.authPage.logIn({
			email: `john_admin1@admin.com`,
			password: 'Pa55word',
		})
	});

	const url = await browser.getUrl();
	expect(url).to.be.eql('http://46.101.234.121/doctors')
});
