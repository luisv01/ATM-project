# ATM-project

## General Information
The purpose of this project is to simulate an ATM application. It allows users to deposit or withdraw money from a bank account.

## Improvements Made
I mainly worked on the UI to make it easier to use. I did not hide the input field before the user selected the ATM mode, but I made sure the user knows what mode he/she is in (Deposit or Withdraw) by changing the color on the UI. If the user tries to withdraw more money than its available on the account the UI will let the user know this and remove the input field without taking money from the account. The user then has to click a rest button to be able to use the application again. I also made some improvments on the focus and resetting the values entered on the input field.

## Technologies Used
- HTML
- JavaScript
- React
- Bootstrap
- CSS

## Setup
To run this project clone it using Git on the command line with the following command (note Bootsrap is already available on standalone.html):

        `$ git clone git@github.com:luisv01/ATM-project.git`


Run a local http server:

        `$ http-server -c-1`

Go to a web browser and enter:

        `http://localhost:8080/standalone.html`
