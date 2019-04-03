import Vue from 'vue'
import LoginPage from '../../../src/pages/LoginPage.vue'

describe('LoginPage.vue', () => {
    it('should render te link to register', () => {
        const LoginPageConstructor = Vue.extend(LoginPage)
        const comp = new LoginPageConstructor().$mount()
        expect(comp.$el.queryelector('router-link').getAttribute('to'))
        .to.equal('/register')
    })
})