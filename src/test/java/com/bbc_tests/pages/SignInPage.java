package com.bbc_tests.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SignInPage extends BasePage{



    @FindBy(id = "user-identifier-input")
    public WebElement usernameInput;


    @FindBy(id = "password-input")
    public WebElement passwordInput;

    @FindBy(id = "submit-button")
    public WebElement submitButton;

    @FindBy(xpath = "//p[@class='form-message__text']")
    public WebElement errorMessage;







}
