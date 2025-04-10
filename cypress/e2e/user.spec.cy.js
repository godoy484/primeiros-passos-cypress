import LoginPage from '../fixtures/pages/loginPage.js'
import userData from '../fixtures/user-data.json'
import DashboardPage from '../fixtures/pages/dashboardPage.js'
import MenuPage from '../fixtures/pages/menuPage.js';
import MyInfoPage from '../fixtures/pages/myInfoPage.js';

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
  
  
    it('User Info Update - Success', () => {
      
      loginPage.acessLoginPage()
      loginPage.loginWithUser(userData.userSucess.usarname, userData.userSucess.password)
      dashboardPage.checkDashboardPage()
      menuPage.acessMyInfo()
      myInfoPage.fillPersonalDetails('First', 'Middle', 'Last')
      myInfoPage.fillEmployeeDetails('ID 1 - OK', 'ID 2 - OK', '102030', '2025-12-31')
      myInfoPage.fillStatus('2000-08-06')
      myInfoPage.saveForm()
      myInfoPage.fillCustom('Teste Finalizado')
      myInfoPage.saveForm()    
  })
})