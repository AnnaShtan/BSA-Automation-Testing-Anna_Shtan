const { expect } = require('chai');
const { App } = require('../src/pages');
const rundomNumber = () => Date.now();

const app = new App();

describe('Registration:', function () {
  beforeEach(async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-up');
  });

  afterEach(async function () {
    await browser.reloadSession();
  });

  it('should be able to register doctor', async function () {
    await app.authPage.register({
      name: `John${rundomNumber()}`,
      surname: 'Doctor',
      email: `marcus${rundomNumber()}@gmail.com`,
      password: 'Pa55word',
      phone: '380999999',
      birthDate: '11/11/2000',
      status: 'doctor',
      gender: 'female',
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');
  });

  it('should be able to register patient', async function () {
    await app.authPage.register({
      name: `John${rundomNumber()}`,
      surname: 'Patient',
      email: `marcus${rundomNumber()}@gmail.com`,
      password: 'Pa55word',
      phone: '380999999',
      birthDate: '11/11/2000',
      status: 'patient',
      gender: 'male',
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');
  });
});



//HW10
const { expect } = require('chai');

const rundomNumber = () => Date.now();

describe('Registration:', function () {

  xit('should be able to register', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-up');

    const usernameField = await $('input[name="name"]');
    const surnameField = await $('input[name="surname"]');
    const birthDateField = await $('input[name="birthdate"]');
    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const retryPasswordField = await $('input[name="retypePassword"]');
    const phoneField = await $('input[name="phone"]');

    const ddls = await $$('div.selectStyles__control');

    const genderDdl = ddls[0];
    const statusDdl = ddls[1];

    const femaleOption = await $('div.selectStyles__option=female');
    const doctorOption = await $('div.selectStyles__option=doctor');

    const signUpButton = await $('button');

    await usernameField.waitForDisplayed({ timeout: 5000 });
    await usernameField.setValue('Marcus');

    await surnameField.waitForDisplayed({ timeout: 5000 });
    await surnameField.setValue('Aurelius');

    await birthDateField.waitForDisplayed({ timeout: 5000 });
    await birthDateField.setValue('11/11/1999');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`marcus${rundomNumber()}@gmail.com`);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    await retryPasswordField.waitForDisplayed({ timeout: 5000 });
    await retryPasswordField.setValue('Pa55word');

    await phoneField.waitForDisplayed({ timeout: 5000 });
    await phoneField.setValue('380000000000');

    await genderDdl.waitForDisplayed({ timeout: 5000 });
    await genderDdl.click();

    await femaleOption.waitForDisplayed({ timeout: 5000 });
    await femaleOption.click();

    await statusDdl.waitForDisplayed({ timeout: 5000 });
    await statusDdl.click();

    await doctorOption.waitForDisplayed({ timeout: 5000 });
    await doctorOption.click();

    await signUpButton.waitForDisplayed({ timeout: 5000 });
    await signUpButton.click();

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');

    await browser.reloadSession();
  });
});


// 1. Тест на логин.
describe('Sign In:', function () {
  it('should be able to sign in', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');

    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`john_admin1@admin.com`);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');

    await browser.reloadSession();
  });

});


// 2. Тест на логин с невалидными данными.
describe('Sign In with non valid data:', function () {
  xit('should not be able to sign in (with invalid password)', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');

    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`john_admin1@admin.com`);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();



    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/sign-in');

    await browser.reloadSession();
  });

});


//3. Тест на изменение данных в профиле пользователя.

describe('Changing data in user profile:', function () {
  xit('should be able to change the data in user profile', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');

    const signInButton = await $('button');

    const myProfile = await $('//a[contains(text(), "My Profile")]');

    const buttonEdit = await $('button.styles_edit__ftuHl');

    const surnameField = await $('input[name="surname"]');

    const ddls = await $$('button');
    const submitButton = ddls[5];

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`john_admin1@admin.com`);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await myProfile.waitForDisplayed({ timeout: 5000 });
    await myProfile.click();


    await buttonEdit.waitForDisplayed({ timeout: 5000 });
    await buttonEdit.click();


    await surnameField.waitForDisplayed({ timeout: 5000 });
    await surnameField.setValue("Ukolov");


    await submitButton.waitForDisplayed({ timeout: 5000 });
    await submitButton.click();

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265');

    await browser.reloadSession();
  });

});

//4. Тест на изменение специальности и клиники для доктора.

describe('Changing doctor_s specialty and clinic:', function () {
  xit('should be able to change doctor_s specialty and clinic in user profile', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');

    const signInButton = await $('button');

    const myProfile = await $('//a[contains(text(), "My Profile")]');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`john_admin1@admin.com`);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await myProfile.waitForDisplayed({ timeout: 5000 });
    await myProfile.click();



    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265');

    await browser.reloadSession()
  });
});


//5. Тест на добавление новой клиники.
describe('Add new clinic:', function () {
  xit('should be able to add new clinic', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');

    const signInButton = await $('button');

    const clinicsPage = await $('//a[contains(text(),"Clinics")]');


    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`john_admin1@admin.com`);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await clinicsPage.waitForDisplayed({ timeout: 5000 });
    await clinicsPage.click();



    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/clinics';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/clinics');

    await browser.reloadSession();
  });
});

