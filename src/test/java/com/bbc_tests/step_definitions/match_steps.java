package com.bbc_tests.step_definitions;

import com.bbc_tests.utilities.ConfigurationReader;
import com.bbc_tests.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class match_steps {


    @Given("The user is on the web page")
    public void theUserIsOnTheWebPage() {
    }

    @Then("User needs to collect info about today's matches")
    public void userNeedsToCollectInfoAboutTodaySMatches() {

        List<WebElement> elements = Driver.getDriver().findElements(By.xpath("//div[@class='sp-c-fixture__wrapper']"));

        if (elements.isEmpty()){
            System.out.println("There are no matches today ....!!!!");
        }
        else {
            for (WebElement element : elements) {
                System.out.println(element.getText());
                System.out.println("================****************************************=========================");
            }
        }
    }
}
