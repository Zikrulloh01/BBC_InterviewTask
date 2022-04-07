package com.bbc_tests.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class SearchPage extends BasePage{

    @FindBy(xpath = "(//ul[@role='list'])[4]//a")
    public List<WebElement> headings;

    @FindBy(id = "search-input")
    public WebElement searchBox;

    @FindBy(xpath = "//button[@data-testid='test-search-submit']")
    public WebElement searchButton;



}
