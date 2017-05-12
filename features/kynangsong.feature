Feature: Watch life skill items
    As a student
    I want to read posts or play video about life skill
    In order to improve my life skills
       
        
    Scenario: Listen story "Sọ Dừa" in "Truyện ngắn"
        Given I am on "Kỹ năng sống" page
        When I click on "Hưng Đạo Đại Vương" button link in "Truyện ngắn" group
        Then I should see "Hưng Đạo Đại Vương" story to read
        
    Scenario: Play "Quà tặng cuộc sống" videos  
        Given I am on "Kỹ năng sống" page
        When I click on "Gánh xôi của bà" button
        Then I should see video "Gánh xôi của bà" to watch
       
