package com.bbc_tests.step_definitions;

import com.bbc_tests.pages.SearchPage;
import com.bbc_tests.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;

public class search_step_definitions {

    SearchPage searchPage = new SearchPage();


    @When("User navigates to {string} page")
    public void user_navigates_to_page(String pageName) {
        searchPage.navigateTo(pageName);
    }

    @When("inputs {string}")
    public void inputs(String articleName) {
        searchPage.searchBox.sendKeys(articleName);
    }

    @When("Clicks search button")
    public void clicks_search_button() {
        searchPage.searchButton.click();
    }

    @Then("Print first and last headers")
    public void print_first_and_last_headers() {
        System.out.println(searchPage.headings.get(0).getText());
        System.out.println(searchPage.headings.get(searchPage.headings.size() - 1).getText());
    }
}
