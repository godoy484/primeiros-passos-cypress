import LoginPage from '../fixtures/pages/loginPage.js'
import userData from '../fixtures/user-data.json'
import DashboardPage from '../fixtures/pages/dashboardPage.js'
import MenuPage from '../fixtures/pages/menuPage.js';
import MyInfoPage from '../fixtures/pages/myInfoPage.js';

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
  
  
    it('User Info Update - Success', () => {
      
      loginPage.acessLoginPage()
      loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
      dashboardPage.checkDashboardPage()
      menuPage.acessMyInfo()
      myInfoPage.fillPersonalDetails(chance.first(), chance.word() ,chance.last())
      myInfoPage.fillEmployeeDetails(chance.integer({ min: 0, max: 5 }), chance.cpf(), chance.animal(), '2025-12-31')
      myInfoPage.fillStatus('2000-08-06')
      myInfoPage.saveForm()
      myInfoPage.fillCustom(chance.word({ syllables: 3 }))
      myInfoPage.saveForm()    
  })
})