package com.bbc_tests.step_definitions;

import com.bbc_tests.pages.SignInPage;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class signIn_step_definitions {



    SignInPage sign = new SignInPage();

    @When("User enters negative {string} and {string}")
    public void user_enters_negative_and(String username, String password) {
        sign.usernameInput.sendKeys(username);
        sign.passwordInput.sendKeys(password);
        sign.submitButton.click();
    }



    @Then("Verify error message")
    public void verify_error_message() {

        String expectedErrorMessage = "Sorry, we cant find an account with that email. You can register for a new account or get help here.";
        String actualMessage = sign.errorMessage.getText();
        Assert.assertTrue(sign.errorMessage.isDisplayed());
    }
}
