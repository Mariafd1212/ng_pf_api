import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { provideMockStore } from '@ngrx/store/testing';


describe('LoginComponent', () => {
    let loginComponent: LoginComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [HttpClientTestingModule, SharedModule],
            providers: [provideMockStore({})],
        });
        const fixture = TestBed.createComponent(LoginComponent);
        loginComponent = fixture.componentInstance;
    });

    it('should create login component', () => {
        expect(loginComponent).toBeTruthy();
    });

    it('must mark all form fields as "touched" if it is invalid', () => {
        loginComponent.loginForm.patchValue({
            email: 'userfakemail@gmail.com',
            password: '1234',
        });
        loginComponent.login();
        expect(loginComponent.emailControl.touched).toBeTrue();
        expect(loginComponent.passwordControl.touched).toBeTrue();
    });

    it('must call the login method of the AuthService if the form is valid', () => {
        loginComponent.loginForm.patchValue({
            email: 'userfakemail@gmail.com',
            password: '1234',
        });

        const spyOnAuthServiceLogin = spyOn(
            (loginComponent as any).authService,
            'login'
        );

        loginComponent.login();

        expect(spyOnAuthServiceLogin).toHaveBeenCalled();
    });
});