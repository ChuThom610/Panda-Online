Feature: Watch life skill items
    As a student
    I want to read posts or play video about life skill
    In order to improve my life skills
       
        
    Scenario: Read "Hưng Đạo Đại Vương" story in "Truyện ngắn" column
        Given I am on "Kỹ năng sống" page
        When I click on "Hưng Đạo Đại Vương" link
        Then I should see "Hưng Đạo Đại Vương" story to read
        
    Scenario: Watch "Gánh xôi của bà" video in "Quà tặng cuộc sống" column
        Given I am on "Kỹ năng sống" page
        When I click on "Gánh xôi của bà" link 
        Then I should see video "Gánh xôi của bà" to watch
       
