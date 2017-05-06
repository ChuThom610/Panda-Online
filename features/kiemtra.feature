Feature: Do the test
    As a student
    I want to do the test 
    In order to total and reinforce my knowledge
    
    Background:
        Given I clicked on "Đề kiểm tra số 1" test
        And I see request "Thực hiện phép tính"
        And I see question "12 + 34 =???"
		And I see a empty box
    Scenario: I am true
        When I push 46
        And I click on "Nộp bài" button
        Then I should see a panel include "Điểm" is "1"
    Scenario: I am false
        When I push 30
        And I click on "Nộp bài" button
        Then I should see a panel include "Điểm" is "0"
