package com.bbc_tests.pages;

import com.bbc_tests.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;

public abstract class BasePage {


    public BasePage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }


    public void navigateTo(String linkText){
        Driver.getDriver().findElement(By.linkText(linkText)).click();
    }


}
