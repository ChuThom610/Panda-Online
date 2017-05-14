Feature: Watch life skill items
    As a student
    I want to read posts or play video about life skill
    In order to improve my life skills
       
        
    Scenario: Read "Hưng Đạo Đại Vương" story in "TRUYỆN NGẮN" column
        Given I am on "Kỹ năng sống" page
        When I click on "Hưng Đạo Đại Vương" link button in stories list
        Then I should see "Hưng Đạo Đại Vương" story to read
        
    Scenario: Watch "Gánh xôi của bà" video in "QUÀ TẶNG CUỘC SỐNG" column
        Given I am on "Kỹ năng sống" page
        When I click on "Gánh xôi của bà" link button in videos list
        Then I should see video "Gánh xôi của bà" to watch
       
